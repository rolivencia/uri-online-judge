// 1133 - Rest of a Division
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1133

// const input = "8\n" +
//     "1\n" +
//     "7\n" +
//     "2\n" +
//     "2\n" +
//     "4";
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const fuels = input.split("\n").map((value) => parseInt(value));

console.log("MUITO OBRIGADO");

let alcohol = 0;
let gasoline = 0;
let diesel = 0;

for (let fuel of fuels) {
  switch (fuel) {
    case 1:
      alcohol++;
      break;
    case 2:
      gasoline++;
      break;
    case 3:
      diesel++;
      break;
  }
}

console.log(`Alcool: ${alcohol}`);
console.log(`Gasolina: ${gasoline}`);
console.log(`Diesel: ${diesel}`);
