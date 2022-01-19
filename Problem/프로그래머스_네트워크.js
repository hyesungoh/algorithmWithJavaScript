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
        if (isVisit[nextComputer]) continue;
        if (computers[currentNode][nextComputer] === 0) continue;

        queue.push(nextComputer);
      }
    }
  }
  return network;
}
