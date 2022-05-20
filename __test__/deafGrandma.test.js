const deafGrandma = require('../src/deafGrandma')

describe('deafGrandma', () => {
  it('outputs an array', () => {
    expect(deafGrandma(['hello'])).toBeInstanceOf(Array);
  });
})