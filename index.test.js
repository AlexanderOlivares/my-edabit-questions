const { expect } = require("@jest/globals");
const battingAvg = require("./index");

describe("test for batting average", () => {
  it("test 1", () => {
    expect(
      battingAvg([
        [0, 0],
        [1, 3],
        [2, 2],
        [0, 4],
        [1, 5],
      ])
    ).toEqual(".286");
  });

  it("test 2", () => {
    expect(
      battingAvg([
        [2, 5],
        [2, 3],
        [0, 3],
        [1, 5],
        [2, 4],
      ])
    ).toEqual(".350");
  });

  it("3rd example", () => {
    expect(
      battingAvg([
        [2, 3],
        [1, 5],
        [2, 4],
        [1, 5],
        [0, 5],
      ])
    ).toEqual(".273");
  });
});
