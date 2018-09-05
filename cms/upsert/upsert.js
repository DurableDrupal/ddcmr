// run with npm from project root: 'npm run upsert -- authors nora-alicia-perusin'
// else 'cd upsert; node upsert authors nora-alicia-perusin'

var fs = require('fs')
var rp = require('request-promise');
require('dotenv').config()
// for console log
var util = require('util')
var YAML = require('yamljs');

var apiHost  = 'http://' + process.env.API_HOST + ':' + process.env.API_PORT

if (process.argv.length > 3) {
  contentType = process.argv[2]
  param = process.argv[3]
} else {
  console.log("\nnode upsert content-type slug")
  console.log("node upsert texts the-book\n")
  process.exit(0)
}

const file = './content/' + contentType + '/' + param + '.md'

fs.readFile(file, 'utf8', function (err,content) {
  if (err) {
    return console.log(err)
  }
  contentItem = YAML.parse(content);
//   console.log(util.inspect(contentItem, { showHidden: false, depth: null}))
//   return
  // console.log('theUri', theUri)
  if (contentType === 'poems') {
    rp({
      method: 'GET',
      uri: apiHost + '/api/authors?itemName='  + contentItem.author + '&select=_id',
      json: true
    })
    .then(function (authorbody) {
      // console.log('author', authorbody)
      if (typeof authorbody[0] === "undefined" ) {
        console.log("Unknown author", contentItem.author + "\n")
      } else {
        // console.log('authorId', authorId)
        contentItem.author = authorbody[0]._id
        console.log('contentItem', contentItem)
        rp({
          method: 'PUT',
          uri: apiHost + '/api/' + contentType,
          body: contentItem,
          json: true
        })
        .then(function (body) {
          // console.log('body ', body)
        })
        .catch(function (err) {
          console.log('error', err)
        })
      }
    })
  } else if (contentType === 'books') {
    // TODO support editor and/or author, at least one value of either
    rp({
      method: 'GET',
      uri: apiHost + '/api/authors?itemName='  + contentItem.author + '&select=_id',
      json: true
    })
    .then(function (authorbody) {
      // console.log('author', authorbody)
      if (typeof authorbody[0] === "undefined" ) {
        console.log("Unknown author", contentItem.author + "\n")
      } else {
        contentItem.author = authorbody[0]._id
        // get publisher
        rp({
          method: 'GET',
          uri: apiHost + '/api/publishers?itemName='  + contentItem.publisher + '&select=_id',
          json: true
        })
        .then(function (thePublishers) {
          if (typeof thePublishers[0] === "undefined" ) {
            console.log("Unknown publisher", contentItem.publisher + "\n")
          } else {
            // console.log('authorId', authorId)
            contentItem.publisher = thePublishers[0]._id
            // console.log('contentItem', contentItem)
            rp({
              method: 'PUT',
              uri: apiHost + '/api/' + contentType,
              body: contentItem,
              json: true
            })
            .then(function (body) {
              console.log('body ', body)
            })
            .catch(function (err) {
              console.log('error', err)
            })
          }
        })
      }
    })
  } else {
    rp({
      method: 'PUT',
      uri: apiHost + '/api/' + contentType,
      body: contentItem,
      json: true
    })
    .then(function (body) {
      console.log('body ', body)
    })
    .catch(function (err) {
      console.log('error', err)
    })
  }
})
