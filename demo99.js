let a = {
  d1: 1,
  d2: {
    dd1: 1234,
    dd2: undefined,
    dd3:[1,2,3,4]
  },
  d3:'abc'
}

var _ = require('lodash');
let b = _.cloneDeep(a)
console.log(b)