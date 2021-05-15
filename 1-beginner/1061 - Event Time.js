// 1061 - Event Time
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1061

const input = require("fs").readFileSync("/dev/stdin", "utf8");

// const input = "Dia 5\n" + "08 : 12 : 23\n" + "Dia 9\n" + "06 : 13 : 23";

// Input parsing
let [startingDay, startingTime, endingDay, endingTime] = input.split("\n");

const [startingDayNumber] = startingDay
  .split(" ")
  .slice(1, 2)
  .map((value) => parseInt(value));
const [startingHour, startingMinute, startingSecond] = startingTime
  .split(" : ")
  .map((value) => parseInt(value));

const [endingDayNumber] = endingDay
  .split(" ")
  .slice(1, 2)
  .map((value) => parseInt(value));
const [endingHour, endingMinute, endingSecond] = endingTime
  .split(" : ")
  .map((value) => parseInt(value));

// Building of date objects
const startingDate = new Date(
  2021,
  3,
  startingDayNumber,
  startingHour,
  startingMinute,
  startingSecond
);

const endingDate = new Date(
  2021,
  3,
  endingDayNumber,
  endingHour,
  endingMinute,
  endingSecond
);

let daySpan,
  hourSpan,
  minuteSpan,
  secondSpan = 0;

// Calculation of time spans in the different units
const differenceInSeconds = Math.abs(endingDate - startingDate) / 1000;
secondSpan = differenceInSeconds % 60;
minuteSpan = (differenceInSeconds / 60) % 60;
hourSpan = (differenceInSeconds / 3600) % 24;
daySpan = (differenceInSeconds / 86400) % 30;

// Presentation of the output
console.log(`${Math.floor(daySpan).toFixed(0)} dia(s)`);
console.log(`${Math.floor(hourSpan).toFixed(0)} hora(s)`);
console.log(`${Math.floor(minuteSpan).toFixed(0)} minuto(s)`);
console.log(`${Math.floor(secondSpan).toFixed(0)} segundo(s)`);
