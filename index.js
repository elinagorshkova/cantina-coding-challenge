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
    // Asking user if that is OK to proceed with the current url to JSON file
    prompt(begin)
    .then(res => {
        // If user cobnfirms the URL, start the app by calling the program fucntion
        if (res.source) {
          console.log('confirmed')
          // If the user doesn`t confirm the URL, exit.
        } else {
          console.log('I don`t currently support other JSON files, sorry😔\nBye!')
          return
        }
      })
  })


program.parse(process.argv)
