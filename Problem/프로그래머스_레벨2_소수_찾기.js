function solution(numbers) {
  const splitedNumbers = numbers.split("");
  const isVisted = new Array(splitedNumbers.length).fill(false);
  const setNumbers = new Set();
  const currentNumber = [];

  function backTracking(depth) {
    if (currentNumber.length !== 0)
      setNumbers.add(parseInt(currentNumber.join("")));
    if (depth === splitedNumbers.length) return;

    for (let i = 0; i < splitedNumbers.length; i++) {
      if (isVisted[i] === false) {
        currentNumber.push(splitedNumbers[i]);
        isVisted[i] = true;

        backTracking(depth + 1);

        currentNumber.pop();
        isVisted[i] = false;
      }
    }
  }
  backTracking(0);

  const maxNum = Math.max(...setNumbers);
  const isPrime = new Array(maxNum + 1).fill(true);

  function sieve() {
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i < maxNum ** 0.5; i++) {
      if (isPrime[i]) {
        for (let j = i + i; j < maxNum + 1; j += i) {
          isPrime[j] = false;
        }
      }
    }
  }

  sieve();

  let answer = 0;
  setNumbers.forEach((num) => {
    if (isPrime[num] === true) answer += 1;
  });

  return answer;
}
