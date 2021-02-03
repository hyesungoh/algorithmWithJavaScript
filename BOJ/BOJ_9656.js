const input = `4`.split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = parseInt(input[0]);
console.log(n % 2 === 0 ? "SK" : "CY");