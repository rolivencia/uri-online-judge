// 1099 - Sum of Consecutive Odd Numbers II
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1099

const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split("\n").slice(1);

for (let line of lines) {
  const [start, end] = line.split(" ").map((value) => parseInt(value)).sort();

  let sum = 0;
  if(start !== end){
    for (let i = start + 1; i < end; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
  }

  console.log(sum);
}
