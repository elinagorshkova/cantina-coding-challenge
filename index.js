
// Commander is a framework for CLI in Node.js
const program = require('commander')

program
.version('1.0.0')
.description('Cantina Coding Challenge by E. Gorshkova')

// start
program
  .command('start')
  .alias('s')
  .description(`"Starting page" of the app`)
  .action(() => {
    console.log('Hello world')
  })


program.parse(process.argv)
