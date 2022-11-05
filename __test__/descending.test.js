const descending = require("../src/descending")

describe('descending', () => {
  xit('returns the integer it takes as argument', () => {
    expect(descending(15)).toEqual(15)
  })

  xit('splits the digits into an array', () => {
    expect(descending(1317)).toEqual([1, 3, 1, 7])
  })

  xit('sorts the resulting array into descending order', () => {
    expect(descending(1317)).toEqual([7, 3, 1, 1])
  })

  xit('returns the digits in descending order as a string', () => {
    expect(descending(1317)).toEqual("7311")
  })
  it('returns the digits in descending order as a number', () => {
    expect(descending(1317)).toEqual(7311)
  })
})


// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321