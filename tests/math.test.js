var simple = require('../js_tests/math');
var expect = require('expect.js');

describe('simple', function () {
  it('should return false', function () {
    expect(simple.math(0)).to.equal(false);
  });

  it('should return true', function () {
    expect(simple.math(1)).to.equal(true);
  });

  it('should return null', function () {
    expect(simple.math(2)).to.equal(null);
  });
  
  it('should be an object', function () {
    expect(typeof simple).to.equal('object');
  })
});