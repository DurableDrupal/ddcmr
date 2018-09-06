// run with npm from project root: 'npm run upsert -- authors nora-alicia-perusin'
// else 'cd upsert; node upsert authors nora-alicia-perusin'

const fs = require('fs')
const YAML = require('yamljs');
const rp = require('request-promise');
require('dotenv').config()

// for more complete console log if necessary, such as the following:
//   console.log(util.inspect(contentItem, { showHidden: false, depth: null}))
// const util = require('util')

const apiHost  = 'http://' + process.env.API_HOST + ':' + process.env.API_PORT

if (process.argv.length > 3) {
  contentType = process.argv[2]
  param = process.argv[3]
} else {
  console.log("\nnode upsert content-type slug")
  console.log("node upsert texts the-book\n")
  process.exit(0)
}

async function processArticles(contentItem) {
  const optionsGet = {
    method: 'GET',
    uri: apiHost + '/api/authors?itemName='  + contentItem.author + '&select=_id',
    json: true
  }
  const authors = await rp(optionsGet)
  if (authors.length > 0) {
    contentItem.author = authors[0]._id
  } else {
    console.log("no author specified\n")
  }
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

fs.readFile(file, 'utf8', function (err,content) {
  if (err) {
    return console.log(err)
  }
  contentItem = YAML.parse(content);
  let result = 0
  if (contentType === 'articles') {
    result = processArticles(contentItem)
  } else if (contentType === 'books') {
    result =  processBooks(contentItem)
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

