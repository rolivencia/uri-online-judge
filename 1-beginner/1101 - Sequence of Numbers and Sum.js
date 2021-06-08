//1101 - Sequence of Numbers and Sum
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1101

const input = require("fs").readFileSync("/dev/stdin", "utf8");
// const input = "1 10\n" +
//     "8 8\n" +
//     "8 7\n" +
//     "7 2\n" +
//     "2 7\n" +
//     "3 9\n" +
//     "15 10\n" +
//     "-1 0";
const lines = input.split("\n");

for (let line of lines) {
  const [start, end] = line
    .split(" ")
    .map((value) => parseInt(value))
    .sort();
  if (start <= 0 || end <= 0) {
    break;
  }

  let values = []; // Used to hold values in-between start and end
  for (let i = start; i <= end; i++) {
    values = values.concat(i);
  }

  const sum = values.reduce((previous, actual) => {
    return previous + actual;
  });

  console.log(`${(values.toString()).replace(/,/g, ' ')} Sum=${sum}`);
}
