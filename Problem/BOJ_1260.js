// const fs = require("fs");
// const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
// const stdin = `4 5 1
// 1 2
// 1 3
// 1 4
// 2 4
// 3 4`.split("\n");

// const input = (() => {
//     let line = 0;
//     return () => stdin[line++];
// })();

// const solve = (isDfs) => {
//     const q = [v];
//     const visit = Array(n + 1).fill(false);
//     const ans = [];

//     while (q.length) {
//         const node = isDfs ? q.pop() : q.shift();

//         if (!visit[node]) {
//             visit[node] = true;
//             ans.push(node);

//             if (graph[node].length) {
//                 const appendList = isDfs
//                     ? graph[node].sort().reverse()
//                     : graph[node].sort();
//                 q.push(...appendList);
//             }
//         }
//     }
//     return ans;
// };

// let s = input().split(" ");
// const n = parseInt(s[0]);
// const m = parseInt(s[1]);
// const v = parseInt(s[2]);

// const graph = Array.from(Array(n + 1), () => Array());

// for (let i = 0; i < m; i++) {
//     let s = input().split(" ");
//     const n1 = parseInt(s[0]);
//     const n2 = parseInt(s[1]);

//     graph[n1].push(n2);
//     graph[n2].push(n1);
// }

// const bfs = solve(false);
// const dfs = solve(true);
// console.log(dfs.join(" "));
// console.log(bfs.join(" "));

const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
// const input = `5 5 3
// 5 4
// 5 2
// 1 2
// 3 4
// 3 1`.split("\n");

const solve = (isBfs) => {
    const q = [v];
    const visit = Array(n + 1).fill(false);
    const ans = [];

    while (q.length) {
        const node = isBfs ? q.shift() : q.pop();

        if (visit[node] === false) {
            visit[node] = true;
            ans.push(node);

            if (graph[node].length) {
                const appendList = isBfs
                    ? graph[node].sort((a, b) => a - b)
                    : graph[node].sort((a, b) => b - a);

                q.push(...appendList);
            }
        }
    }
    return ans;
};

const [n, m, v] = input[0].split(" ").map(Number);

const graph = Array.from(Array(n + 1), () => Array());

for (let i = 1; i <= m; i++) {
    const [n1, n2] = input[i].split(" ").map(Number);

    graph[n1].push(n2);
    graph[n2].push(n1);
}

console.log(solve(false).join(" "));
console.log(solve(true).join(" "));
