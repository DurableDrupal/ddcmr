'use strict'
var inquirer = require('inquirer')
var shell = require('shelljs')
var strftime = require('strftime')
require('dotenv').config()

var thetimestamp = strftime('%Y%m%d%H%M%S', new Date())

var questions = [
  {
    type: 'list',
    name: 'op',
    message: 'Would you like to backup, restore or zap the scs db?',
    choices: ['backup', 'restore', 'zap', 'cancel']
  },
  {
    type: 'input',
    name: 'bname',
    message: 'Timestamp as name for backup/restore?',
    default: thetimestamp,
    when: function(answers) {
      return (answers.op === 'backup' || answers.op === 'restore')
    }
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
      var thecmd = 'mongorestore --drop --db ' + process.env.DB_DB + ' -u ' + process.env.DB_USER + ' -p ' + process.env.DB_PASSWORD + ' --authenticationDatabase admin ' + process.env.BACKUP_DIR + '/' + answers.bname + '/' + process.env.DB_DB 
      // console.log('thecmd', thecmd + "\n")
      if (shell.exec(thecmd).code !== 0) {
        shell.echo('Error: Restore failed');
        shell.exit(1);
      }
      break
    case 'zap':
      var thecmd = 'mongo ' + process.env.DB_DB + ' -u ' + process.env.DB_USER + ' -p ' + process.env.DB_PASSWORD + ' --authenticationDatabase admin --eval "db.dropDatabase();"'
      // console.log('thecmd', thecmd + "\n")
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
