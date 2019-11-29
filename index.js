// Commander is a framework for CLI in Node.js
const program = require('commander')

// Inquirer is a powerful collection of common interactive CL user interfaces
const { prompt } = require('inquirer')

// Importing a question for the inuirer
const { begin } = require('./assets/questions')

program
.version('1.0.0')
.description('Cantina Coding Challenge by E. Gorshkova')

// start
program
  .command('start')
  .alias('s')
  .description(`"Starting page" of the app`)
  .action(() => {
    prompt(begin)
    .then(res => console.log('Response: ', res))
  })


program.parse(process.argv)
