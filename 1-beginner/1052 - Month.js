// 1052 - Month
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1052

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const month = parseInt(input);

const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

console.log(months[month-1]);