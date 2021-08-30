// function solution(arr) {
//     const answer = [];
//     arr.forEach((elem) => {
//         if (answer[answer.length - 1] === elem) return;
//         answer.push(elem);
//     });
//     return answer;
// }

const solution = (arr) => arr.filter((cur, idx) => cur !== arr[idx - 1]);
