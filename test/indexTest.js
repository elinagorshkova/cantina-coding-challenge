const assert = require('chai').assert
const { searchingFunction } = require('./../assets/helpers')

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
