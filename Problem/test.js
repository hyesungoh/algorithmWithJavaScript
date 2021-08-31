const solution = (s) => {
    const { length } = s;
    const half = length / 2;
    return length % 2 === 0
        ? s.slice(half - 1, half + 1)
        : s.slice(half, half + 1);
};

console.log(solution("abcde"));
console.log(solution("abcd"));
