// const input = `3 4`.split("\n");
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let temp = "";
let ans = "";

for (let i = 1; i <= n * m; i++) {
    temp += `${i} `;

    if (i % m === 0) {
        ans += temp.trim() + "\n";
        temp = "";
    }
}

console.log(ans.trim());

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const [n, m] = input[0].split(" ").map(Number);
// let ans = "";

// for (let i = 1; i <= n * m; i++) {
//     ans += `${i} `;
//     if (i % m === 0) {
//         console.log(`${ans.trim()}\n`);
//         ans = "";
//     }
// }
