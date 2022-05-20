const deafGrandma = require('../src/deafGrandma')

describe('deafGrandma', () => {
  it('outputs an array', () => {
    expect(deafGrandma(['hello'])).toBeInstanceOf(Array);
  });

  it('outputs the same reply unless you shout', () => {
    expect(deafGrandma(['hello'])).toEqual(['HUH?! SPEAK UP, SONNY!'])
  });
})