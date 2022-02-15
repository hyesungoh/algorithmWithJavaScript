// function solution(participant, completion) {
//   for (let i = 0; i < participant.length; i++) {
//     participant.sort();
//     completion.sort();
//     if (participant[i] !== completion[i]) return participant[i];
//   }
// }

function solution(participant, completion) {
  const completionObj = {};

  for (let comp of completion) {
    if (completionObj[comp]) {
      completionObj[comp] += 1;
    } else {
      completionObj[comp] = 1;
    }
  }

  for (let participantPerson of participant) {
    if (
      typeof completionObj[participantPerson] === "undefined" ||
      completionObj[participantPerson] === 0
    )
      return participantPerson;

    completionObj[participantPerson] -= 1;
  }
}
