const assert = require('chai').assert
const { searchingFunction, findEveryInstance } = require('./../assets/helpers')

// WE NEED A FUNCTION THAT WOULD PARSE A JSON FILE AND WOULD SEARCH THROUGH THE FILE FOR ALL THE VALUES THAT MATCH A CERTAIN KEY
// a) need a dummy json:
const dummyJSON = {
  dummyClass: 'Dummy1',
  subClass:
    [{
      dummyClass: 'dummy2',
      someKey: 'none'
    },
    {subSubClass: {
      dummyClass: 'DUMMY3'
    }
  }]
}
// b) need conditions:
// - output should be an array
// - with the particular dummy JSON output should be ['Dummy1', 'dummy2', 'DUMMY3']
describe('App', function() {
  it(`should be an array`, function() {
    const result = searchingFunction(dummyJSON, 'dummyClass')
    assert.typeOf(result, 'array')
  })

  it(`should return ['Dummy1', 'dummy2', 'DUMMY3']`, function() {
    const result = searchingFunction(dummyJSON, 'dummyClass')
    assert.deepEqual(result, ['Dummy1', 'dummy2', 'DUMMY3'])
  })
})

// WE NEED A FUNCTION THAT WOULD FIND EVERY VALUE INSTANCE OF AN ATTRIBUTE AND COUNT THE NUMBER OF IT`S OCCURANCES
// a) need a dummy array with non-unique values to ensure correctness of the function
const dummyValuesArray = ['Input', 'Input', 'Input', 'Box', 'Box']
// b) Test should chec for the output to be an array of unique values
describe('App', function() {
  it (`should return an array of each instance of the matching attribute: ['Input', 'Box']`, function() {
    const result = findEveryInstance(dummyValuesArray)
    assert.deepEqual(result, ['Input', 'Box'])
  })
})
