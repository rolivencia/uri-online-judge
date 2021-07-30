// 1145 - Logical Sequence 2
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1145

// const input = "3 98";
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const [x, y] = input.split(" ").map((value) => parseInt(value));

let result = "";

for (let i = 1; i <= y; i++) {
  result = result.concat(`${i}`);
  if (i % x === 0 && i !== y) {
    result = result.concat("\n");
  }
  else if(i!==y){
      result = result.concat(' ');
  }
}

console.log(result);

// for(let counter = 1; counter <= value; counter++){
//     console.log(`${counter} ${counter**2} ${counter**3}`);
//     console.log(`${counter} ${counter**2 + 1} ${counter**3 + 1}`);
// }
