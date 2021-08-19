// function solution(phone_number) {
//     const answer = [...phone_number].map((n, i) =>
//         i > phone_number.length - 5 ? n : "*"
//     );
//     return answer.join("");
// }

const solution = (pN) =>
    [...pN].map((n, i) => (i > pN.length - 5 ? n : "*")).join("");