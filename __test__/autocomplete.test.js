const autocomplete = require('../src/autocomplete');

describe('autocomplete', () => {
  it('outputs an array', () => {
    expect(autocomplete('ai', ['airplane','airport','apple','ball'])).toBeInstanceOf(Array);
  });

  it('returns values from the array that start with the input string', () => {
    expect(autocomplete('ai', ['airplane','airport','apple','ball'])).toEqual(['airplane','airport']);
  });

  it('is not case sensitive', () => {
    expect(autocomplete('ba', ['ball', 'Bash', 'cat', 'bop', 'back'])).toEqual(['ball', 'Bash', 'back']);
  });

  it('outputs no more than five words', () => {
    expect(autocomplete('ba', ['ball', 'Bash', 'cat', 'bop', 'back', 'balance', 'Bat', 'Bad', 'base', 'badge'])).toEqual(['ball', 'Bash', 'back', 'balance', 'Bat']);
  });
});