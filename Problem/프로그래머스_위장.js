function solution(clothes) {
  const graph = {};
  for (let cloth of clothes) {
    const [_, category] = cloth;
    if (category in graph) graph[category] += 1;
    else graph[category] = 1;
  }

  let answer = 1;
  for (let key in graph) {
    answer *= graph[key] + 1;
  }
  return answer - 1;
}
