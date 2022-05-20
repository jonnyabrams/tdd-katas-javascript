const deafGrandma = require('../src/deafGrandma');

describe('deafGrandma', () => {
  it('outputs an array', () => {
    expect(deafGrandma(['hello'])).toBeInstanceOf(Array);
  });

  it('outputs the same reply unless you shout', () => {
    expect(deafGrandma(['hello'])).toEqual(['HUH?! SPEAK UP, SONNY!']);
    expect(deafGrandma(['hello', 'how are you'])).toEqual(['HUH?! SPEAK UP, SONNY!', 'HUH?! SPEAK UP, SONNY!']);
  });

  it('returns the same reply if you shout', () => {
    expect(deafGrandma(['HELLO'])).toEqual(['NO, NOT SINCE 1938!']);
    expect(deafGrandma(['hello', 'HOW ARE YOU'])).toEqual(['HUH?! SPEAK UP, SONNY!', 'NO, NOT SINCE 1938!']);
    expect(deafGrandma(['HELLO', 'HOW ARE YOU'])).toEqual(['NO, NOT SINCE 1938!', 'NO, NOT SINCE 1938!']);
  });

  it('ends the conversation if you shout BYE', () => {
    expect(deafGrandma(['hello', 'HOW ARE YOU', 'BYE'])).toEqual(['HUH?! SPEAK UP, SONNY!', 'NO, NOT SINCE 1938!', 'OK, BYE!']);
  });
})