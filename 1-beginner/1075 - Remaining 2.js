// 1075 - Even Between Five Numbers
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1075

const input = require("fs").readFileSync("/dev/stdin", "utf8");
const divider = parseInt(input);

for (let i = 1; i <= 10000; i++) {
  if (i % divider === 2) {
    console.log(i);
  }
}

