const annoyingKid = require('../src/annoyingKid');

describe('annoyingKid', () => {
  it('replies with a sentence starting the same way each time', () => {
    expect(annoyingKid("Today I played football.")).toContain("I don't think you");
  });

  it('tells you you did not do what you said you did', () => {
    expect(annoyingKid("Today I played football.")).toEqual("I don't think you played football today, I think you didn't play at all!")
  });
});