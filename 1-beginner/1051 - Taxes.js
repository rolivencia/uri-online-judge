// 1051 - Taxes
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1051

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const profit = parseFloat(input);

const taxableAmount = (amount, scale) => {

    if(amount < scale.lower){
        return 0;
    }

    const maximumTaxableInScale = scale.upper - scale.lower; //Maximum taxable amount of a scale
    const taxableInScale = amount - scale.lower;
    return taxableInScale >  maximumTaxableInScale ? maximumTaxableInScale : taxableInScale;
}

if(profit <= 2000){
    console.log('Isento');
}
else{

    const scales = [
        { lower: 2000.00, upper: 3000.00, rate: 0.08, taxable: 0 },
        { lower: 3000.00, upper: 4500.00, rate: 0.18, taxable: 0 },
        { lower: 4500.00, upper: Infinity, rate: 0.28, taxable: 0 },
    ];

    const toPay = scales.map((scale => ({...scale, taxable: taxableAmount(profit, scale)}))) // Assign taxable amount
                        .map((scale => scale.taxable * scale.rate))                          // Calculate taxes per category
                        .reduce((previous, current) => previous + current);                  // Add taxes

    console.log(`R$ ${ toPay.toFixed(2) }`);
}

