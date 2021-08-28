function parsingTable(table) {
    const parsedObj = {};
    const jobObj = {};

    table.forEach((row) => {
        const arrRow = row.split(" ");
        const job = arrRow.shift();
        jobObj[job] = 0;
        parsedObj[job] = {};
        arrRow.forEach((item, index) => {
            parsedObj[job][item] = 5 - index;
        });
    });

    return { parsedObj, jobObj };
}

function solution(table, languages, preference) {
    const { parsedObj, jobObj } = parsingTable(table);
    let jobList = [];
    let maxValue = 0;

    Object.keys(jobObj).map((job) => {
        languages.map((language, index) => {
            // const jobLangRank = parsedObj[job][language] ?? 0;
            const jobLangRank = parsedObj[job][language]
                ? parsedObj[job][language]
                : 0;
            const langPreference = preference[index];
            jobObj[job] += jobLangRank * langPreference;
        });

        if (jobObj[job] > maxValue) {
            maxValue = jobObj[job];
            jobList = [job];
        } else if (jobObj[job] === maxValue) jobList.push(job);
    });

    return jobList.sort()[0];
}
