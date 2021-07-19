// 1118 - Score Validation
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1118

const printMedia = (validValues) =>
  console.log(
    `media = ${(
      validValues.reduce((value, accumulator) => value + accumulator) /
      validValues.length
    ).toFixed(2)}`
  );

// const input ="1\n" +
//     "2\n" +
//     "3\n" +
//     "4\n" +
//     "5\n" +
//     "1\n" +
//     "2\n" +
//     "3\n" +
//     "4\n" +
//     "5\n" +
//     "4\n" +
//     "3\n" +
//     "2\n";
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const values = input.split("\n").map((value) => parseFloat(value));
let validValues = [];
let execution = 1;

for (const value of values) {
  if (execution === 1) {
    if (value > 0 && value <= 10) {
      validValues = validValues.concat(value);

      if (validValues.length === 2) {
          // console.log(validValues);
        printMedia(validValues);
        validValues = [];
        execution = 0;
      }
    } else {
      console.log("nota invalida");
    }
  } else {
    console.log(`novo calculo (1-sim 2-nao)`);
    if (value === 2) {
      break; // Escape condition
    }
    else if(value === 1){
        execution = 1;
    }
  }
}
