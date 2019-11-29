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

module.exports = {
  fetchingData
}
