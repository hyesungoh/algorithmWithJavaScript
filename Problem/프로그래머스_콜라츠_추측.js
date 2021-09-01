const solution = (n, cnt = 0) => {
    if (cnt > 500) return -1;
    if (n === 1) return cnt;
    return solution(n % 2 === 0 ? n / 2 : n * 3 + 1, cnt + 1);
};
