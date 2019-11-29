'use strict'
// Promise based HTTP client for Node.js
const axios = require('axios')

const fetchingData = (url) => {
  // Fetching the JSON file from the URL
   axios.get(url)
  .then((res) => {
    // Returning the array of all the values matching the attribute from user input (class, classNames, or identifier)
    return res.data
    })
}

const searchingFunction = (jsonFile, lookupKey) => {
  // Declaring and empty array that we will populate with all the matches
  let values = []
  for (const i in jsonFile) {
      // Skipping the parts of the JSON that are not objects (don`t have a key)
        if (!jsonFile.hasOwnProperty(i)) continue
        // If key of the current object matches our key...
        if (i === lookupKey) {
        // ... if the value of the key is a string...
        if (typeof jsonFile[i] == 'string') {
          // ... push the string in the objects array
          values.push(jsonFile[i])
        } else {
          // Othervise, the value of the key must be an array, so we iterate though the array,
          // and push each value in the objects array
          jsonFile[i].forEach(value => values.push(value))
        }
        // Going deeper in the JSON object
        // Searching for the key instances in the 'children' objects of the JSON
      } else if (typeof jsonFile[i] === 'object') {
          values = values.concat(searchingFunction(jsonFile[i], lookupKey));
        }
    }
    // Returning the array of the values
    return values
}

module.exports = {
  fetchingData,
  searchingFunction
}
