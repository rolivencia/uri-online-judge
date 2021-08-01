// 1555 - Functions
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1555

const tripletMax = (result) => {
  let max = "";
  if (result.Rafael > result.Beto) {
    max = "Rafael";
  } else if (result.Beto > result.Carlos) {
    max = "Beto";
  } else {
    max = "Carlos";
  }
  return max;
};

const rafaelFunction = (x, y) => (3 * x) ** 2 + y ** 2;
const betoFunction = (x, y) => 2 * x ** 2 + (5 * y) ** 2;
const carlosFunction = (x, y) => -100 * x + y ** 3;

const input =
  "10\n" +
  "15 10\n" +
  "145 10152\n" +
  "121 2002\n" +
  "12 2\n" +
  "1 5\n" +
  "525 4255\n" +
  "1051 61\n" +
  "1 9\n" +
  "987 789\n" +
  "24 69";
// const input = require("fs").readFileSync("/dev/stdin", "utf8");

const variablePairs = input
  .split("\n")
  .slice(1)
  .map((value) => {
    const [x, y] = value.split(" ");
    return { x: parseInt(x), y: parseInt(y) };
  });

const results = variablePairs.map((pair) => ({
  Rafael: rafaelFunction(pair.x, pair.y),
  Beto: betoFunction(pair.x, pair.y),
  Carlos: carlosFunction(pair.x, pair.y),
}));

const winners = results.map((result) => tripletMax(result));

result = "";

winners.forEach((winner, index) => {
  result = result.concat(`${winner} ganhou`);
  if (index !== result.length - 1) {
    result = result.concat("\n");
  }
});

console.log(result);
