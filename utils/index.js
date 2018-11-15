'use strict'
var inquirer = require('inquirer')
var shell = require('shelljs')
var strftime = require('strftime')
require('dotenv').config()

var thetimestamp = strftime('%Y%m%d%H%M%S', new Date())

var questions = [
  {
    type: 'rawlist',
    name: 'op',
    message: 'Would you like to backup or restore the scs db?',
    choices: ['backup', 'restore']
  },
  {
    type: 'input',
    name: 'bname',
    message: 'Timestamp as name for backup?',
    default: thetimestamp
  }
]

inquirer.prompt(questions).then(answers => {
  // console.log(JSON.stringify(answers, null, '  '));
  // console.log('\nYou said: ', answers.op + "\n" );
  switch(answers.op) {
    case 'backup':
      // console.log('\nYou said: backup' + "\n" );
      // console.log('answers', answers)
      var thecmd = 'mongodump -d ' + process.env.DB_DB + ' -o ' + process.env.BACKUP_DIR + '/'  + answers.bname + ' -u ' + process.env.DB_USER + ' -p ' + process.env.DB_PASSWORD + ' --authenticationDatabase admin'
      // console.log('thecmd', thecmd + "\n")
      if (shell.exec(thecmd).code !== 0) {
        shell.echo('Error: Backup failed');
        shell.exit(1);
      }
      break
    case 'restore':
      console.log('\nYou said: restore' + "\n" );
      shell.exec('ls .')
      break
    default:
      console.log('\nYou said: nothing' + "\n" );
      process.exit(0)
  }
})
