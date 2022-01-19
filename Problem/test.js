function solution(n, computers) {
  let network = 0;
  const isVisit = Array(n).fill(false);
  const queue = [];

  for (let index = 0; index < n; index++) {
    if (isVisit[index]) continue;
    network += 1;

    queue.push(index);
    while (queue.length) {
      const currentNode = queue.shift();
      if (isVisit[currentNode]) continue;
      isVisit[currentNode] = true;

      for (let nextComputer in computers[currentNode]) {
        if (
          !isVisit[nextComputer] &&
          computers[currentNode][nextComputer] === 1
        ) {
          queue.push(nextComputer);
        }
      }
    }
  }
  return network;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
