const solution = (n) => {
    const isPrime = Array(n + 1).fill(true);
    const primeArr = [];

    for (let i = 2; i < n + 1; i++) {
        if (!isPrime[i]) continue;
        primeArr.push(i);

        for (let j = i + i; j < n + 1; j += i) {
            isPrime[j] = false;
        }
    }
    return primeArr.length;
};
