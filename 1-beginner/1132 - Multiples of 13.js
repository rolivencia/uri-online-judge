// 1132 - Multiples of 13
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1132

const compare = (a, b) =>  {
    if (a<b) {
        return -1;
    }
    if (a>b) {
        return 1;
    }
    return 0;
}

// const input = "200\n" + "100";
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const [initial, final] = input.split("\n").map((value) => parseInt(value)).sort(compare);

let sum = 0;

for (let i = initial; i <= final; i++) {
  if (i % 13 !== 0) {
    sum += i;
  }
}

console.log(sum);
