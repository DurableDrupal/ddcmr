'use strict'
var inquirer = require('inquirer')
var shell = require('shelljs')
var fs = require('fs')
var path = require('path')
require('dotenv').config()

inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))

var questions = [
  {
    type: 'fuzzypath',
    name: 'file',
    rootPath: process.env.ROOT_PATH_CONTENT,
    message: 'Choose single file, entire content type (folder) or all content (parent content folder) to upsert'
  }
]

inquirer.prompt(questions).then(answers => {
  var thecmd
  // console.log(JSON.stringify(answers, null, '  '));
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
        // shell execute custom written upsert-all.sh (schema model dependency based) with no parameters
        thecmd = './upsert/upsert-all.sh'
        if (shell.exec(thecmd).code != 0) {
          shell.echo('Error: upsert-all failed')
        }
      } else {
        // console.log(patharray)
        // console.log('length', patharray.length, 'contentindex', contentindex)
        // if this is a subdir (sub content type) underneath the content type, identify it so we can properly provide it as parameter to upsert script
        if (patharray.length - contentindex > 2) {
          dirname2 = patharray[contentindex + 1]
          console.log('upsert all for content type', dirname2, 'and content sub type', basename)
          // shell execute upsert-all-items.sh contenttype contentsubtype
          thecmd = './upsert/upsert-all-items.sh ' + dirname + ' ' + basename
          if (shell.exec(thecmd).code != 0) {
            shell.echo('Error: upsert-all-items for content type ' + dirname + ' and content subtype ' + basename + ' failed')
          }
        } else {
          console.log('upsert all', basename)
          // shell execute upsert-all-items.sh contenttype
          thecmd = './upsert/upsert-all-items.sh ' + basename
          if (shell.exec(thecmd).code != 0) {
            shell.echo('Error: upsert-all-items for content type ' + basename + ' failed')
          }
        }
      }
    }
    if (stats.isFile()) {
      // console.log(patharray)
      // console.log('length', patharray.length, 'contentindex', contentindex)
      // if this is a file in a subdir (sub content type) underneath the content type, identify it so we can properly provide it as parameter to upsert script
      if (patharray.length - contentindex > 3) {
        dirname2 = patharray[contentindex + 1]
        console.log('upsert content item', basename, 'for content type', dirname2, 'and content sub type', dirname)
        // shell execute upsert-single-item.sh contenttype contentitem contentsubtype
        thecmd = './upsert/upsert-single-item.sh ' + dirname2 + ' ' + basename + ' ' + dirname
        if (shell.exec(thecmd).code != 0) {
          shell.echo('Error: upsert-single-item for content type ' + dirname2 + ' and content subtype ' + dirname + ' and content item ' + basename + ' failed')
        }
      } else {
        // console.log('file')
        console.log('upsert content item', basename, 'for content type', dirname)
        // shell execute upsert-single-item.sh contenttype "" contentitem
        thecmd = './upsert/upsert-single-item.sh ' + dirname + ' ' + " "  + ' ' + basename
        if (shell.exec(thecmd).code != 0) {
          shell.echo('Error: upsert-single-item for content type ' + dirname + ' and content item ' + basename + ' failed')
        }
      }
    }
    // console.log('stats', stats)
  })
})
