## Algorithm with JavaScript

---

## Know How

-   #### How to Input with BOJ

```js
const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const [n, m, v] = input[0].split(" ").map(Number);
const mulitpleInput = input[1].split(" ").map(Number);
```

-   #### How to Test

```js
// const input = require("fs")
//     .readFileSync("/dev/stdin")
//     .toString()
//     .trim()
//     .split("\n");
const input = `5 5 3
5 4
5 2
1 2
3 4
3 1`.split("\n");

const [n, m, v] = input[0].split(" ").map(Number);
```

-   #### How to Make Array with size

```js
const oneDimension = Array(size).fill(false);

const twoDimension = Array.from(Array(size), () => Array(size).fill(false));
```

-   #### sort withouth compareFunction
    -   compareFunction이 제공되지 않으면 요소를 문자열로 변환하고 유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬된다.

```js
const l = [1, 3, 2];

// it became string
l.sort();

// it became number
l.sort((a, b) => a - b);

var items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
];

items.sort((a, b) => {
    if (a.value > b.value) {
        return 1;
    }
    if (a.value < b.value) {
        return -1;
    }
    // a must be equal to b
    return 0;
});
```

---

## Log

-   #### [BOJ 18883](../master/BOJ/BOJ_18883.js)

    정수 n, m을 입력받은 후 n개의 줄을 출력한다. 각 줄에는 1부터 n*m까지 출력하며 각 줄에는 m개의 수가 있어야한다. 매우 간단한 문제지만 출력 부분 각 줄마다 좌우 공백이 없어야하는 조건 때문에 여러번 WA 결과를 받게 되었다. 결국 각 줄을 담당하는 문자열과 전체 정답을 담당하는 문자열형 배열을 만들어 trim한 값을 추가, 출력시에도 trim하여 CA를 받게 되었다. 두 번째 풀이는 각 줄 마다 출력하여 풀었다. console.log도 파이썬의 print와 마찬가지로 자동적으로 개행을 포함하는 것을 알았다.

- #### [BOJ 10867](../master/BOJ/BOJ_10867.js)

    n개의 정수로 이루어진 수열을 입력받은 후 중복된 수를 제외하고 오름차순으로 정렬하여 출력하는 문제. Set을 이용하여 중복되는 수들을 지운 후 Array.from을 이용하여 다시 Array로 만든 후 compareFunction을 이용하여 오름차순으로 출력하여 풀었다.