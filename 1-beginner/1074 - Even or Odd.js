const input = require("fs").readFileSync("/dev/stdin", "utf8");

const values = input
  .split("\n")
  .slice(1) // I remove the first value
  .map((value) => parseInt(value));

for (let value of values) {
  if (value === 0) {
    console.log("NULL");
  }

  if (value > 0) {
    if (value % 2 === 0) {
      console.log("EVEN POSITIVE");
    } else if (value % 2 !== 0) {
      console.log("ODD POSITIVE");
    }
  }
  if (value < 0) {
    if (value % 2 === 0) {
      console.log("EVEN NEGATIVE");
    } else if (value % 2 !== 0) {
      console.log("ODD NEGATIVE");
    }
  }

}
