'use strict'
// Promise based HTTP client for Node.js
const axios = require('axios')

// Using Store file to store data for further use in it
const store = require('./../store')

// Inquirer is a powerful collection of common interactive CL user interfaces
const { prompt } = require('inquirer')

// Importing a question for the inuirer
const { attributes, pickSelectorDynamic, anotherSelect } = require('./questions')

// Importing helpers functions
const { searchingFunction, findEveryInstance, countingSelectorOccurances } = require('./helpers')

const main = () => {
  // choose between attributes: class, classNames, identifier
  prompt(attributes)
  .then(res => {
    workWithJson(res.attribute, store.url)
  })
}

const workWithJson = (selector, url) => {
  // Fetching the JSON file from the URL
   axios.get(url)
   .then((res) => {
    // Returning the array of all the values matching the attribute from user input (class, classNames, or identifier)
    return searchingFunction(res.data, selector)
    })
    .then(array => {
      return findEveryInstance(array)
    })
    .then((eachValue) => {
        // Asking the user to pick a selector from the list to return how many instances of the selector there are in JSON
        return pickSelectorDynamic(eachValue)
      })
      // Asking the user to choose a selector from the list
      .then(question => prompt(question))
      .then(selector => {
        return countingSelectorOccurances(selector, store.eachValue, store.instances)
      })
      .then(() => {
        // Asking the user whenter they want to continue
        return prompt(anotherSelect)
      })
      .then(res => {
        // If the user wants to continue, call the FUNCTIONAL function again
        if (res.anotherSelector === true) {
          main()
        // Otherwise, exit
        } else {
          console.log('Bye!')
          return
        }
      })
}
module.exports = {
  main
}
