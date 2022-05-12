// const input = `ACAYKP
// CAPCAK`.split("\n");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [s1, s2] = input;
const l1 = s1.length;
const l2 = s2.length;
const dp = Array.from(Array(l1 + 1), () => Array(l2 + 1).fill(0));

for (let y = 1; y < l1 + 1; y++) {
  for (let x = 1; x < l2 + 1; x++) {
    if (s1[y - 1] === s2[x - 1]) dp[y][x] = dp[y - 1][x - 1] + 1;
    else dp[y][x] = Math.max(dp[y - 1][x], dp[y][x - 1]);
  }
}

console.log(dp[l1][l2]);
