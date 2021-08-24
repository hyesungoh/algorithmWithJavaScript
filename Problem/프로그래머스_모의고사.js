function solution(answers) {
    const peopleAnswerList = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    const peopleAnswerNum = [0, 0, 0];

    answers.map((answer, index) => {
        for (let i = 0; i < peopleAnswerList.length; i++) {
            const currentCompareIndex = index % peopleAnswerList[i].length;
            peopleAnswerNum[i] +=
                answer === peopleAnswerList[i][currentCompareIndex] ? 1 : 0;
        }
    });

    const maxNum = Math.max(...peopleAnswerNum);
    const answer = [];

    peopleAnswerNum.forEach((num, index) => {
        if (num === maxNum) answer.push(index + 1);
    });
    return answer;
}
