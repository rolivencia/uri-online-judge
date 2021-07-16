// 1114 - Fixed Password
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1114

const input = require("fs").readFileSync("/dev/stdin", "utf8");
const passwords = input.split("\n");

for (let password of passwords) {
    if(password === '2002'){
        console.log('Acesso Permitido');
        break;
    }
    console.log('Senha Invalida');
}
