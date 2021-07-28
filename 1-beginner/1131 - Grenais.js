// 1131 - Grenais
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1131

let gremioMatches = 0;
let internacionalMatches = 0;
let draws = 0;
let prompts = [];

const processInputs = (value) => {
  if (value.includes(" ")) {
    const [internacionalScore, gremioScore] = value
      .split(" ")
      .map((x) => parseInt(x));
    if (internacionalScore === gremioScore) {
      draws++;
    } else if (internacionalScore > gremioScore) {
      internacionalMatches++;
    } else {
      gremioMatches++;
    }
  } else {
    prompts = prompts.concat(parseInt(value));
  }
};

// const input = "4 4\n" +
//     "2"
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const values = input.split("\n").forEach((value) => processInputs(value));

prompts.forEach(() => {
  console.log("Novo grenal (1-sim 2-nao)");
});

console.log(`${gremioMatches + internacionalMatches + draws} grenais`);
console.log(`Inter:${internacionalMatches}`);
console.log(`Gremio:${gremioMatches}`);
console.log(`Empates:${draws}`);

if (internacionalMatches === gremioMatches) {
  console.log("Nao houve vencedor");
} else if (internacionalMatches > gremioMatches) {
  console.log("Inter venceu mais");
} else {
  console.log("Gremio venceu mais");
}