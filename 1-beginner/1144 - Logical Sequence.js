// 1144 - Logical Sequence
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1144

// const input = "5";
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const value = parseInt(input);

for(let counter = 1; counter <= value; counter++){
    console.log(`${counter} ${counter**2} ${counter**3}`);
    console.log(`${counter} ${counter**2 + 1} ${counter**3 + 1}`);
}
