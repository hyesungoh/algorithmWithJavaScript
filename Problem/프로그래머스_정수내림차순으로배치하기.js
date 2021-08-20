
// function solution(n) {
//     const nArr = Array.from(String(n));
//     const sortedArr = nArr.sort((a, b) => b - a);
//     return Number(sortedArr.join(""));
// }

const solution = (n) =>
    parseInt(
        Array.from(n + "")
            .sort((a, b) => b - a)
            .join("")
    );
