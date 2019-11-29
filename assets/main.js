'use strict'

// Inquirer is a powerful collection of common interactive CL user interfaces
const { prompt } = require('inquirer')

// Importing a question for the inuirer
const { attributes } = require('./questions')

const main = () => {
  // choose between attributes: class, classNames, identifier
  prompt(attributes)
  .then(res => {
    console.log(res)
  })
}

module.exports = {
  main
}
