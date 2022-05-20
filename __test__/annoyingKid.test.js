const annoyingKid = require('../src/annoyingKid');

describe('annoyingKid', () => {
  it('replies with a sentence starting the same way each time', () => {
    expect(annoyingKid("Today I played football.")).toContain("I don't think you");
  });

  it('tells you you did not do what you said you did', () => {
    expect(annoyingKid("Today I played football.")).toEqual("I don't think you played football today, I think you didn't play at all!");
    expect(annoyingKid("Today I visited Grandma.")).toEqual("I don't think you visited Grandma today, I think you didn't visit at all!");
  });

  it('tells you you did do what you said you did not', () => {
    expect(annoyingKid("Today I didn't play football.")).toEqual("I don't think you didn't play football today, I think you did play it!")
    expect(annoyingKid("Today I didn't buy food.")).toEqual("I don't think you didn't buy food today, I think you did buy it!")
  });
});