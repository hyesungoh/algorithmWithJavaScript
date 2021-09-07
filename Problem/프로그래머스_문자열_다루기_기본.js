// const solution = (s) => {
//     if (s.length !== 4 && s.length !== 6) return false;
//     for (let w of s.split("")) if (isNaN(w)) return false;
//     return true;
// };

const solution = (s) => {
    if (s.length !== 4 && s.length !== 6) return false;
    if (s == parseInt(s)) return true;
    return false;
}