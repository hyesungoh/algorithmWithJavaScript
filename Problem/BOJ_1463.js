// const input = `2`.split("\n");
// const input = require("fs").readFileSync("/dev/stdin").split("\n");
// const n = Number(input[0]);
// // const dp = Array.from(Array(n + 1), () => 0);
// const dp = [0, 0];

// for (let i = 2; i < n + 1; i++) {
//     dp.push(dp[i - 1] + 1);
//     if (i % 2 === 0) {
//         const t = Number(i / 2);
//         dp[i] = Math.min(dp[i], dp[t] + 1);
//     }

//     if (i % 3 === 0) {
//         const t = Number(i / 3);
//         dp[i] = Math.min(dp[i], dp[t] + 1);
//     }
// }

// console.log(dp[n].toString());

const n = Number(
    require("fs").readFileSync("/dev/stdin").toString().split(" ")
);
const dp = Array(n + 1);
dp[1] = 0;

for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
    if (i % 3 == 0) {
        dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
}
console.log(dp[n]);
