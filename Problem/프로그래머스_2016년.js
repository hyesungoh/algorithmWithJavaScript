const solution = (m, d) => {
    const words = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const curDay = days.filter((_, idx) => idx < m).reduce((a, c) => a + c) + d;
    const curDow = (curDay % words.length) - 1;
    return curDow === -1 ? "THU" : words[curDow];
};
