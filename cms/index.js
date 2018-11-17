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
  console.log('basename', basename)
  console.log('extname', extname)
  fs.stat(answers.file, function(err, stats) {
    if (stats.isDirectory()) {
      console.log('directory')
      if (basename === 'content') {
        console.log('upsert all')
      } else {
        console.log('upsert all', basename)
      }
    }
    if (stats.isFile()) {
      console.log('file')
      console.log('upsert content item ', basename, ' for content type ', dirname)
    }
    console.log('stats', stats)
  })
})
