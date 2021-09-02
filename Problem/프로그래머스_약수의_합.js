function solution(n, i=1) {
    if (n === i || n === 0) return n
    return n % i === 0 ? i + solution(n, i+1) : 0 + solution(n, i+1);
}