function solution(tickets) {
  const answer = [];

  function DFS(from, remainTickets, path) {
    const updatedPath = [...path, from];
    if (remainTickets.length === 0) {
      answer.push(updatedPath);
    } else {
      remainTickets.map((ticket, index) => {
        if (ticket[0] !== from) return;

        const to = ticket[1];
        const nextRemainTickets = [...remainTickets];
        nextRemainTickets.splice(index, 1);
        DFS(to, nextRemainTickets, updatedPath);
      });
    }
  }

  DFS("ICN", tickets, []);
  return answer.sort()[0];
}
