function solution(people, limit) {
    let answer = 0;
  
    people.sort((a, b) => a - b);
    let start = 0;
    let end = people.length - 1;
  
    while (start <= end) {
      ++answer;
      if (people[start] + people[end] <= limit) ++start;
      --end;
    }
  
    return answer;
  }
  