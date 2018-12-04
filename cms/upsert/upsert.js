// run with npm from project root: 'npm run upsert -- authors nora-alicia-perusin'
// else 'cd upsert; node upsert authors nora-alicia-perusin'

const fs = require('fs')
// const YAML = require('yamljs')
const yaml = require('js-yaml')
const matter=require('gray-matter')
const rp = require('request-promise')
require('dotenv').config()

// for more complete console log if necessary, such as the following:
//   console.log(util.inspect(contentItem, { showHidden: false, depth: null}))
// const util = require('util')

const apiHost = process.env.API_HOST
let contentType = null;

if (process.argv.length > 3) {
  contentType = process.argv[2]
  param = process.argv[3]
} else {
  console.log("\nnode upsert content-type slug")
  console.log("node upsert texts the-book\n")
  process.exit(0)
}

async function processArticles(contentItem) {
  // get author _id for query population  TODO authors, make sure we have one at least
  const optionsGet = {
    method: 'GET',
    uri: apiHost + '/api/authors?itemName='  + contentItem.author + '&select=_id',
    json: true
  }
  const authors = await rp(optionsGet)
  if (authors.length > 0) {
    contentItem.author = authors[0]._id
  } else {
    return console.log("no author specified\n")
  }
  // upsert article
  const optionsPut = {
    method: 'PUT',
    uri: apiHost + '/api/' + contentType,
    body: contentItem,
    json: true
  }
  const res =  await rp(optionsPut)
  console.log("res", res.message)
  return res
}

async function processVideos(contentItem) {
  // get author _id for query population  TODO authors, make sure we have one at least
  const optionsGet = {
    method: 'GET',
    uri: apiHost + '/api/authors?itemName='  + contentItem.author + '&select=_id',
    json: true
  }
  const authors = await rp(optionsGet)
  if (authors.length > 0) {
    contentItem.author = authors[0]._id
  } else {
    return console.log("no author specified\n")
  }
  // upsert video
  const optionsPut = {
    method: 'PUT',
    uri: apiHost + '/api/' + contentType,
    body: contentItem,
    json: true
  }
  const res =  await rp(optionsPut)
  console.log("res", res.message)
  return res
}

async function processBooks(contentItem) {
  // get author _id for query population TODO authors and/or editors, make sure we have one at least one of either
  const optionsGetAuthor = {
    method: 'GET',
    uri: apiHost + '/api/authors?itemName='  + contentItem.author + '&select=_id',
    json: true
  }
  const authors = await rp(optionsGetAuthor)
  if (authors.length > 0) {
    contentItem.author = authors[0]._id
  } else {
    console.log("no author specified\n")
  }
  // get publisher for query population
  const optionsGetPublisher = {
    method: 'GET',
    uri: apiHost + '/api/publishers?itemName='  + contentItem.publisher + '&select=_id',
    json: true
  }
  const publishers = await rp(optionsGetPublisher)
  if (publishers.length > 0) {
    contentItem.publisher = publishers[0]._id
  } else {
    console.log("no publisher specified\n")
  }
  // upsert book
  const optionsPut = {
    method: 'PUT',
    uri: apiHost + '/api/' + contentType,
    body: contentItem,
    json: true
  }
  const res =  await rp(optionsPut)
  console.log("res", res.message)
  return res
}

async function processCaseStudies(contentItem) {
  // get articles _id from provided slug for query population
  let theArticles = []
  for (const article of contentItem.articles) {
    const optionsGetPublisher = {
      method: 'GET',
      uri: apiHost + '/api/articles/slug/'  + article.article + '?select=_id',
      json: true
    }
    const articleId = await rp(optionsGetPublisher)
    theArticles.push({
      weight: article.weight,
      article: articleId._id
    })
  } 
  contentItem["articles"] = theArticles
  // upsert case study
  const optionsPut = {
    method: 'PUT',
    uri: apiHost + '/api/' + contentType,
    body: contentItem,
    json: true
  }
  const res =  await rp(optionsPut)
  console.log("res", res.message)
  return res
}

// doesn't have (i.e. populate) dependencies to grab first
async function processGenericContent(contentItem) {
  const optionsPut = {
    method: 'PUT',
    uri: apiHost + '/api/' + contentType,
    body: contentItem,
    json: true
  }
  const res =  await rp(optionsPut)
  console.log("res", res.message)
  return res
}

const file = './content/' + contentType + '/' + param + '.md'

fs.readFile(file, 'utf8', function (err,fileStr) {
  if (err) {
    return console.log(err)
  }

  // legacy yamljs parsing
  // contentItem = YAML.parse(content);

  // gray-matter version
  // first convert to front matter if yaml only
  if (fileStr.substring(0,3) !== '---') {
    // convert to standard front matter format with no "content",
      fileStr = ("---\n" + fileStr + "\n---\n")
  }

  // parse, including sections
  const matterJson = matter(fileStr, {
    section: function(section, matterJson) {
      if (typeof section.data === 'string' && section.data.trim() !== '') {
        section.data = yaml.safeLoad(section.data);
      }
      section.content = section.content.trim() + '\n';
    }
  });

//  console.log(JSON.stringify(matterJson, null, 2));

  // iterate over gray-matter sections
  // and insert them into data as expected by SCS
  for (let i = 0; i < matterJson.sections.length; i++) {
    // console.log('section ', matterJson.sections[i].key)
    // console.log('content', matterJson.sections[i].content)
    matterJson.data[matterJson.sections[i].key] = {
      value: matterJson.sections[i].content
    }
  }

  const contentItem = matterJson.data

//  console.log(JSON.stringify(contentItem, null, 2));

  let result = 0
  if (contentType === 'articles') {
    result = processArticles(contentItem)
  } else if (contentType === 'videos') {
    result =  processVideos(contentItem)
  } else if (contentType === 'books') {
    result =  processBooks(contentItem)
  } else if (contentType === 'case-studies') {
    result =  processCaseStudies(contentItem)
  } else {
    result = processGenericContent(contentItem)
  }
  try {
    return Promise.resolve(result)
  }
  catch (error) {
    return Promise.reject(error)
  }
})

