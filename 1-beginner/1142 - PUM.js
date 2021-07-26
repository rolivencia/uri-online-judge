// 1142 - PUM
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1142

// const input = "7";
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const value = parseInt(input);

const multiplicator = (value) => 3 * (value - 1);

for (let counter = 1; counter <= value; counter++) {
  console.log(
    `${counter + multiplicator(counter)} ${
      counter + multiplicator(counter) + 1
    } ${counter + multiplicator(counter) + 2} PUM`
  );
}
