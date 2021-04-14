// 1036 - Bhaskara's Formula

 const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [a,b,c] = input.split(" ").map(value => parseFloat(value));

//Functions
const denominator = (a) => 2*a;
const discriminant = (a,b,c) => Math.pow(b, 2) - 4 * a * c;
const bhaskaraNumerator = (a, b, c) => Math.sqrt(discriminant(a,b,c));

//Evaluations
const denominatorIsZero = denominator(a) > 0;
const discriminantNonNegative = discriminant(a,b,c) >= 0;

if(!denominatorIsZero || !discriminantNonNegative){
    console.log('Impossivel calcular');
}
else{
    const results = {
        positiveSolution: (-b + bhaskaraNumerator(a,b,c)) / denominator(a),
        negativeSolution: (-b - bhaskaraNumerator(a,b,c)) / denominator(a)
    };

    console.log(`R1 = ${results.positiveSolution.toFixed(5)}`);
    console.log(`R2 = ${results.negativeSolution.toFixed(5)}`);
}



