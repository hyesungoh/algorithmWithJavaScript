function solution(arr) {
    const answer = arr.filter(num => num !== Math.min(...arr));
    return answer.length === 0 ? [-1] : answer
}