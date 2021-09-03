const solution = (s) => {
    return !s
        .toUpperCase()
        .split("")
        .reduce((acc, cur) => {
            return acc + (cur === "P" ? 1 : cur === "Y" ? -1 : 0);
        }, 0);
};
