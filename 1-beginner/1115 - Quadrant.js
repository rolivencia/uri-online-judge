// 1115 - Quadrant
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1115

// const input = "2 2\n" + "3 -2\n" + "-8 -1\n" + "-7 1\n" + "0 2";
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const points = input
  .split("\n")
  .map((rawPoint) => rawPoint.split(" "))
  .map((point) => ({ x: parseInt(point.shift()), y: parseInt(point.shift()) }));

for (const point of points) {
  if (!point.x || !point.y) {
    break;
  }

  if (point.x > 0) {
    if (point.y > 0) {
      console.log("primeiro");
    } else {
      console.log("quarto");
    }
  }

  if (point.x < 0) {
    if (point.y > 0) {
      console.log("segundo");
    } else {
      console.log("terceiro");
    }
  }
}
