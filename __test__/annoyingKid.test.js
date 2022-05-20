const annoyingKid = require('../src/annoyingKid');

describe('annoyingKid', () => {
  it('replies with a sentence starting the same way each time', () => {
    expect(annoyingKid("Today I played football.")).toContain("I don't think you");
  });
});