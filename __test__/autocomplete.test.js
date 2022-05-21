const autocomplete = require('../src/autocomplete');

describe('autocomplete', () => {
  it('outputs an array', () => {
    expect(autocomplete('ai', ['airplane','airport','apple','ball'])).toBeInstanceOf(Array);
  });
});