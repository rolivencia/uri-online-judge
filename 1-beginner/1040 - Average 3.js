// 1040 - Average 3
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1040

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const [a, b, c, d] = lines.shift().split(" ").map(value => parseFloat(value));

const average = (2*a + 3*b + 4*c + d)/10;

console.log(`Media: ${average.toFixed(1)}`);

if(average >= 7) {
    console.log('Aluno aprovado.');
}
else if (average < 5) {
    console.log('Aluno reprovado.');
}
else{
    const examGrade = parseFloat(lines.shift());
    console.log('Aluno em exame.');
    console.log(`Nota do exame: ${examGrade.toFixed(1)}`);

    const finalAverage = (average + examGrade) / 2;

    if(finalAverage >= 5){
        console.log('Aluno aprovado.');
    }
    else {
        console.log('Aluno reprovado.');
    }

    console.log(`Media final: ${finalAverage.toFixed(1)}`);
}