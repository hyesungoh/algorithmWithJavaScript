const input = `10`.split("\n");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = BigInt(input[0]);

const solve = (tn) => {
    const l = [0, 1, 1, 1];

    for (let i = 4; i <= tn; i++) {
        l.push(BigInt(l[i - 1]) + BigInt(l[i - 3]));
    }

    return l[tn];
};

console.log(solve(n).toString());

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const n = BigInt(input[0]);
// const l = [0, 1, 1, 1];

// for (let i = 4; i < n; i++) {
//     l.push(l[i - 3] + l[i - 1]);
// }

// console.log(l[n].toString().trim());
