const input = require("fs").readFileSync("/dev/stdin", "utf8");

const values = input
  .split("\n")
  .map((value) => parseInt(value))
  .slice(1); // I remove the first value

for (let value of values) {
  let output = "";
  if (value === 0) {
    console.log("NULL");
    continue;
  }

  if (value % 2 === 0) {
    output = output.concat("EVEN ");
  } else if (value % 2 !== 0) {
    output = output.concat("ODD ");
  }

  if (value > 0) {
    output = output.concat("POSITIVE");
  } else if (value < 0) {
    output = output.concat("NEGATIVE");
  }

  console.log(output);
}
