function solution(n) {
    const nArr = Array.from(n.toString());
    const answer = nArr.reduce((acc, cur) => acc + parseInt(cur), 0);
    return answer;
}
