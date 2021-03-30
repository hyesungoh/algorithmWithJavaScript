const input = require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split("\n");

// const input = `2
// ---abc--
// ab---cde<<<<ab`.split("\n");

// function edit(string) {
//     const stack = [];
//     let index = 0;

//     for (word of string) {
//         if (word === "<") {
//             if (index > 0) {
//                 index -= 1;
//             }
//         } else if (word === ">") {
//             if (index < stack.length) {
//                 index += 1;
//             }
//         } else if (word === "-") {
//             if (stack.length !== 0) {
//                 stack.splice(index - 1, 1);
//                 index -= 1;
//             }
//         } else {
//             stack.splice(index, 0, word);
//             index += 1;
//         }
//     }

//     return stack.join("");
// }


function edit(string) {
    const leftStack = [];
    const rightStack = [];

    for (word of string) {
        if (word === "<") {
            if (leftStack.length > 0) rightStack.push(leftStack.pop());
        } else if (word === ">") {
            if (rightStack.length > 0) leftStack.push(rightStack.pop());
        } else if (word === "-") {
            if (leftStack.length > 0) leftStack.pop();
        } else {
            leftStack.push(word);
        }
    }
    return leftStack.join("") + rightStack.reverse().join("");
}

const n = parseInt(input[0]);

for (let i = 1; i < n + 1; i++) {
    console.log(edit(input[i]));
}
