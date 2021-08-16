const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// const input = `4
// mislav
// stanko
// mislav
// ana
// stanko
// ana
// mislav`.split("\n");

const solve = (participant) => {
    for (temp in participant) {
        if (participant[temp] == 1) {
            return temp;
        }
    }
};

const n = parseInt(input[0]);
const participant = {};

for (let i = 1; i < 1 + n; i++) {
    let temp_people = input[i];
    if (temp_people in participant) {
        participant[temp_people] += 1;
    } else {
        participant[temp_people] = 1;
    }
}

for (let i = 1 + n; i < 1 + n + n - 1; i++) {
    let finished = input[i];
    participant[finished] -= 1;
}

console.log(solve(participant));