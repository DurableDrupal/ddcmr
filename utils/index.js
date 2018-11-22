'use strict'
var inquirer = require('inquirer')
var shell = require('shelljs')
var strftime = require('strftime')
var fs = require('fs')
var path = require('path')
require('dotenv').config()

var thetimestamp = strftime('%Y%m%d%H%M%S', new Date())

inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))

var questions = [
  {
    type: 'list',
    name: 'op',
    message: 'Would you like to backup, restore or zap the scs db?',
    choices: ['backup', 'restore to this env', 'zap', 'cancel']
  },
  {
    type: 'fuzzypath',
    name: 'bname',
    rootPath: process.env.BACKUP_DIR,
    pathFilter: (isDirectory, nodePath) => isDirectory,
    message: 'Choose BSON data dump folder you wish to restore (./<timestamp>/ddcmr_dev or ./<timestamp>/ddcmr_prod)',
    when: function(answers) {
      return (answers.op === 'restore to this env')
    }
  }
]

inquirer.prompt(questions).then(answers => {
  switch(answers.op) {
    case 'backup':
      // we always use an automatically generated timestamp for backup directory name
      console.log("\nBacking up to ", process.env.BACKUP_DIR + '/' + thetimestamp + "\n")
      var thecmd = 'mongodump -d ' + process.env.DB_DB + ' -o ' + process.env.BACKUP_DIR + '/'  + thetimestamp + ' -u ' + process.env.DB_USER + ' -p ' + process.env.DB_PASSWORD + ' --authenticationDatabase admin'
      if (shell.exec(thecmd).code !== 0) {
        shell.echo('Error: Backup failed');
        shell.exit(1);
      }
      break
    case 'restore to this env':
      // we always use fuzzy search for backup directory name bname
      // extract db name
      var dbname = process.env.DB_DB
      var thecmd = 'mongorestore --drop --db ' + dbname + ' -u ' + process.env.DB_USER + ' -p ' + process.env.DB_PASSWORD + ' --authenticationDatabase admin ' + answers.bname
      if (shell.exec(thecmd).code !== 0) {
        shell.echo('Error: Restore failed');
        shell.exit(1);
      }
      break
    case 'zap':
      var thecmd = 'mongo ' + process.env.DB_DB + ' -u ' + process.env.DB_USER + ' -p ' + process.env.DB_PASSWORD + ' --authenticationDatabase admin --eval "db.dropDatabase();"'
      if (shell.exec(thecmd).code !== 0) {
        shell.echo('Error: Zap failed');
        shell.exit(1);
      }
      break
    case 'cancel':
      console.log('\n Thanks for dropping by anyway: canceled as per your request' + "\n" );
      process.exit(0)
    default:
      console.log('\nYou said: nothing' + "\n" );
      process.exit(0)
  }
})
