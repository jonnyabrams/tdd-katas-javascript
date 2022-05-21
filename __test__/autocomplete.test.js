const autocomplete = require('../src/autocomplete');

describe('autocomplete', () => {
  it('outputs an array', () => {
    expect(autocomplete('ai', ['airplane','airport','apple','ball'])).toBeInstanceOf(Array);
  });

  it('returns values from the array that start with the input string', () => {
    expect(autocomplete('ai', ['airplane','airport','apple','ball'])).toEqual(['airplane','airport']);
  });
});