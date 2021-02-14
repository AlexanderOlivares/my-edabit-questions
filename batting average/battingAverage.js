// Question posted on edabit.com on 02/14/20

function battingAvg(arr) {
  let hits = 0;
  let atBats = 0;
  for (let i = 0; i < arr.length; i++) {
    hits += arr[i][0];
    atBats += arr[i][1];
  }
  let avg = (hits / atBats).toFixed(3);
  return avg.slice(1);
}

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

it("test 3", () => {
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

/// below is all new data

test("test 4", () => {
  expect(
    battingAvg([
      [1, 4],
      [0, 5],
      [4, 4],
      [1, 5],
      [0, 5],
    ])
  ).toEqual(".261");
});

test("test 5", () => {
  expect(
    battingAvg([
      [3, 3],
      [0, 5],
      [0, 4],
      [3, 5],
      [1, 5],
    ])
  ).toEqual(".318");
});

test("test 6", () => {
  expect(
    battingAvg([
      [0, 5],
      [1, 2],
      [1, 1],
      [4, 5],
      [1, 6],
      [2, 5],
      [0, 4],
      [3, 3],
      [0, 4],
      [0, 3],
    ])
  ).toEqual(".316");
});

test("test 7", () => {
  expect(
    battingAvg([
      [1, 6],
      [1, 4],
      [0, 4],
      [3, 6],
      [2, 5],
      [1, 4],
      [1, 6],
      [0, 1],
      [2, 5],
      [2, 6],
    ])
  ).toEqual(".277");
});

test("test 8", () => {
  expect(
    battingAvg([
      [2, 4],
      [1, 6],
      [2, 6],
      [1, 4],
      [4, 4],
      [3, 6],
      [2, 5],
      [0, 4],
      [0, 5],
      [0, 5],
    ])
  ).toEqual(".306");
});

test("test 9", () => {
  expect(
    battingAvg([
      [2, 6],
      [0, 3],
      [2, 5],
      [1, 3],
      [4, 6],
      [1, 4],
      [0, 5],
      [0, 5],
      [0, 6],
      [3, 3],
    ])
  ).toEqual(".283");
});

test("test 10", () => {
  expect(
    battingAvg([
      [1, 6],
      [0, 5],
      [0, 6],
      [0, 3],
      [2, 4],
      [3, 3],
      [1, 6],
      [3, 4],
      [0, 5],
      [1, 5],
    ])
  ).toEqual(".234");
});

test("test 11", () => {
  expect(
    battingAvg([
      [1, 1],
      [1, 5],
      [0, 3],
      [1, 3],
      [2, 6],
      [0, 4],
      [0, 5],
      [1, 5],
      [1, 6],
      [2, 2],
    ])
  ).toEqual(".225");
});

test("test 12", () => {
  expect(
    battingAvg([
      [2, 6],
      [0, 5],
      [1, 4],
      [2, 4],
      [4, 5],
      [1, 6],
      [2, 2],
      [0, 4],
      [1, 5],
      [0, 5],
    ])
  ).toEqual(".283");
});

test("test 13", () => {
  expect(
    battingAvg([
      [0, 3],
      [1, 5],
      [3, 4],
      [0, 6],
      [1, 2],
      [3, 4],
      [4, 5],
      [0, 5],
      [0, 5],
      [1, 5],
    ])
  ).toEqual(".295");
});

test("test 14", () => {
  expect(
    battingAvg([
      [3, 3],
      [0, 1],
      [0, 3],
      [3, 5],
      [1, 5],
      [1, 1],
      [2, 6],
      [0, 4],
      [1, 5],
      [2, 6],
    ])
  ).toEqual(".333");
});

test("test 15", () => {
  expect(
    battingAvg([
      [1, 6],
      [1, 5],
      [1, 6],
      [3, 5],
      [3, 5],
      [1, 5],
      [1, 4],
      [2, 6],
      [1, 5],
      [3, 6],
    ])
  ).toEqual(".321");
});

module.exports = battingAvg;
