'use strict'
// THE LIST OF QUESTIONS TO BE USED BY THE INQUIRER NODE MODULE

// Start and confirm the json source url
const begin = {
    type: 'confirm',
    name: 'source',
    message: '\n🙌 Welcome to my program!\n\nThe JSON source is: \nhttps://raw.githubusercontent.com/jdolan/quetoo/master/src/cgame/default/ui/settings/SystemViewController.json\nProceed?'
  }

  // Select an attribute from a list to search for all occurances of the attribute in the JSON file
const attributes = {
  type: 'list',
  name: 'attribute',
  message: '\n Choose an attribute',
  choices: ['class', 'classNames', 'identifier']
  }

  const pickSelectorDynamic = (valuesArray) => {
  const selectorPick = {
      type: 'list',
      name: 'selectorPick',
      message: '\n Choose a selector',
      choices: valuesArray,
    }
    return selectorPick
  }

  // Ask whether a user wants to continue browsing the JSON file or they want to exit
  const anotherSelect = {
      type: 'confirm',
      name: 'anotherSelector',
      message: 'Would you like to choose another attribute?'
    }

module.exports = {
  begin,
  attributes,
  pickSelectorDynamic,
  anotherSelect
}
