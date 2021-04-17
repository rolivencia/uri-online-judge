// 1041 - Coordinates of a Point

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [x, y] = input.split(" ").map(value => parseFloat(value));

//If points are equal, return origin
if(x === 0 && y === 0){
    console.log("Origem");
}
// Check if result is in one of the axes
else if(y === 0){

    console.log("Eixo X");
}
else if(x === 0){
    console.log("Eixo Y");
}
else{
    //Check x to eliminate two quadrants
    let quadrants = x > 0 ? ["Q1", "Q4"] : ["Q2", "Q3"];

    //Check y to eliminate remaining quadrant
    if(y > 0){
        quadrants = quadrants.filter(quadrant => quadrant === "Q1" || quadrant === "Q2");
    }
    else{
        quadrants = quadrants.filter(quadrant => quadrant === "Q3" || quadrant === "Q4");
    }

    console.log(quadrants.pop());
}

