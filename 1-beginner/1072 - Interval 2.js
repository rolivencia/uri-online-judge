// 1072 - Six Odd Numbers
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1072

const input = require("fs").readFileSync("/dev/stdin", "utf8");
const [length, ...values] = input.split("\n").map((value) => parseInt(value)); // first value is ignored

if (values && values.length) {
  const inside = values.filter((value) => value >= 10 && value <= 20);
  const outside = values.filter((value) => value < 10 || value > 20);

  console.log(`${inside.length} in`);
  console.log(`${outside.length} out`);
}
