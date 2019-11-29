'use strict'

// Node module, that counts the instances of each value in an array, ignoring any non-string values.
const count = require('count-array-values')

// Using Store file to store data for further use in it
const store = require('./../store')

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

const findEveryInstance = (valuesArray) => {
  // Using the 'count-array-values' module to find every instance of the picked selector and count how many occurances of the instance there are
//Returns an array of objects: [
  // {value; 'Input', count: 5}
  // {value: 'something', count: 4}
// ]
const instances = count(valuesArray)
// Storing the counted object in the store
store.instances = instances
// Mapping through the array to get only the values from the object
const eachValue = instances.map((instance) => {
  return instance.value
})
store.eachValue = eachValue
// Returning an array with every matching value for the picked attribute:
// User picked Class - return ['Input', 'CvarSlider', 'CvarSelect', 'StackView', 'Box', 'CvarCheckbox', 'VideoModeSelect' ]
return eachValue
}

const countingSelectorOccurances = (selector, arrayOfValues, countArray) => {
  // Choosen by the user selector as a string
const picked = selector.selectorPick
// Searching for an index of the picked selector in the array of all selectors.
// This index will match the index of COUNT object ( [
  // {value; 'Input', count: 5}
  // {value: 'something', count: 4}
// ])
// so we can acces the number of occuring instances of the picked selector
const index = arrayOfValues.indexOf(picked)
const numberOfOccurances = countArray[index].count
console.log(`Found ${numberOfOccurances} occurances of ${picked} selector`)
// returning the selector
return numberOfOccurances
}

module.exports = {
  searchingFunction,
  findEveryInstance,
  countingSelectorOccurances
}
