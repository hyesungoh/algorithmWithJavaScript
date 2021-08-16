const input = `10
1 4 2 3 1 4 2 3 1 2`.split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const l = Array.from(new Set(input[1].split(" ").map(Number)), (n) =>
    parseInt(n)
);

console.log(...l.sort((a, b) => a - b));
