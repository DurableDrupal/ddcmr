'use strict'
var inquirer = require('inquirer')
var shell = require('shelljs')
var fs = require('fs')
var path = require('path')

inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))

var questions = [
  {
    type: 'fuzzypath',
    name: 'file',
    rootPath: '/home/durabledrupal/ddcmr/dev/cms/content',
    message: 'Choose single file, entire content type (folder) or all content (parent content folder) to upsert'
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(JSON.stringify(answers, null, '  '));
  var dirname = path.basename(path.dirname(answers.file))
  var basename = path.basename(answers.file)
  var extname = path.extname(answers.file)
  // console.log('basename', basename)
  // console.log('extname', extname)
  var patharray = answers.file.split('/')
  // where in the path array is the dir "content"?
  var contentindex = patharray.indexOf('content')
  // by default, there will not be any grandfather content type
  var dirname2 = ''
  fs.stat(answers.file, function(err, stats) {
    if (stats.isDirectory()) {
      // console.log('directory')
      if (basename === 'content') {
        console.log('upsert all')
      } else {
        // console.log(patharray)
        // console.log('length', patharray.length, 'contentindex', contentindex)
        if (patharray.length - contentindex > 2) {
          dirname2 = patharray[contentindex + 1]
          console.log('upsert all for content type', dirname2, 'and content sub type', basename)
        } else {
          console.log('upsert all', basename)
        }
      }
    }
    if (stats.isFile()) {
      // console.log(patharray)
      // console.log('length', patharray.length, 'contentindex', contentindex)
      // if this is a file in a subdir (sub content type) underneath the content type identify it so we can provide it as parameter to upsert script
      if (patharray.length - contentindex > 3) {
        dirname2 = patharray[contentindex + 1]
        console.log('upsert content item', basename, 'for content type', dirname2, 'and content sub type', dirname)
      } else {
        // console.log('file')
        console.log('upsert content item', basename, 'for content type', dirname)
      }
    }
    // console.log('stats', stats)
  })
})
