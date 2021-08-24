function solution(arr, divisor) {
    const answer = arr.filter((n) => n % divisor === 0);
    console.log(answer.length);
    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}