// 1133 - Rest of a Division
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1133

const compare = (a, b) =>  {
    if (a<b) {
        return -1;
    }
    if (a>b) {
        return 1;
    }
    return 0;
}

// const input = "10\n" + "18";
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const [initial, final] = input.split("\n").map((value) => parseInt(value)).sort(compare);

for(let i = initial + 1; i < final; i++) {
    if(i%5 === 2 || i%5 === 3){
        console.log(i);
    }
}
