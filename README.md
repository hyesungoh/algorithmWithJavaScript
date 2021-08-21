## Algorithm with JavaScript

---

## Know How

-   #### How to Input with BOJ

```js
const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()s
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

-   #### sort without compareFunction
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

-   #### BigInt
    -   2(53) - 1보다 큰 정수를 표현할 수 있는 내장 객체
    -   정수 뒤에 n을 붙이거나 BigInt를 호출하여 생성 가능

```js
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
```

-   #### For loop

```js
// basic for
for (let i = 0; i < 5; i++) {}

let arr = [3, 5, 7];
arr.foo = "hello"; // it become [1, 2, 3, foo: "hello"]

// for ... in (속성 이름을 통해)
for (let i in arr) {
    console.log(i);
} // logs 0, 1, 2, "foo"

// for ... of (속성 값을 통해)
for (let i of arr) {
    console.log(i);
} // logs 3, 5, 7
```

-   #### Array to String

```js
const elements = ["hi", "cat", "dog"];

// 요소를 나타내는 문자열
console.log(elements.toString()); // "hi,cat,dog"

// 모든 요소를 연결
console.log(elements.join()); // "hi,cat,dog"

console.log(elements.join("")); // "hicatdog"

console.log(elements.join("-")); // "hi-cat-dog"
```

-   #### Insert, Delete by Index

```js
const arr = [1, 3, 4, 5];
// splice(index, deleteCount, items...)
arr.splice(1, 0, 2);
console.log(arr); // [1, 2, 3, 4, 5]

arr.splice(3, 1);
console.log(arr); // [1, 2, 3, 5]
```

-   #### Array containing 0..N

```js
Array.from(Array(5).keys());
// [0, 1, 2, 3, 4]

[...Array(5).keys()];
// [0, 1, 2, 3, 4]
```

---

## Log

#### 21.2.20

-   [BOJ 18883](../master/Problem/BOJ_18883.js)

    정수 n, m을 입력받은 후 n개의 줄을 출력한다. 각 줄에는 1부터 n\*m까지 출력하며 각 줄에는 m개의 수가 있어야한다. 매우 간단한 문제지만 출력 부분 각 줄마다 좌우 공백이 없어야하는 조건 때문에 여러번 WA 결과를 받게 되었다. 결국 각 줄을 담당하는 문자열과 전체 정답을 담당하는 문자열형 배열을 만들어 trim한 값을 추가, 출력시에도 trim하여 CA를 받게 되었다. 두 번째 풀이는 각 줄 마다 출력하여 풀었다. console.log도 파이썬의 print와 마찬가지로 자동적으로 개행을 포함하는 것을 알았다.

-   [BOJ 10867](../master/Problem/BOJ_10867.js)

    n개의 정수로 이루어진 수열을 입력받은 후 중복된 수를 제외하고 오름차순으로 정렬하여 출력하는 문제. Set을 이용하여 중복되는 수들을 지운 후 Array.from을 이용하여 다시 Array로 만든 후 compareFunction을 이용하여 오름차순으로 출력하여 풀었다.

-   [BOJ 9656](../master/Problem/BOJ_9656.js)

    n개의 돌을 1개 혹은 3개 가져가는 게임을 두 명이 한다. 모든 수를 완벽하게 할 시 이기는 사람의 이름을 출력하는 문제. 파이썬을 이용하여 풀었던 `돌 게임` 문제와 승패규칙만이 다른 문제. n이 홀수 짝수인지에 따라 정답이 달라져 나머지 값을 비교하여 풀었다.

-   [BOJ 14495](../master/Problem/BOJ_14495.js)

    점화식이 문제에 써있는 단순 dp 구현 문제. Array의 크기를 먼저 생성후 하는 방법, Push하는 방법으로 풀어봤으나 모두 WA 결과를 받게되었다. 다른 사람의 풀이를 보니 n이 커질 시 BigInt형으로 연산을 해야 풀리는 문제였다.

-   [BOJ 1463](../master/Problem/BOJ_1463.js)

    n을 3으로 나누고, 2로 나누고, 1로 뺄 수 있을 때 1로 만들 수 있는 최소 연산의 수를 출력하는 문제. 첫 번째 풀이는 i / t 값을 Number로 바꾼 후 연산하였으나 타입 에러를 받게 되었다. 두 번째 풀이는 평범하게 나누기 연산을 사용하여 풀었더니 CA 결과를 받았다.

#### 21.3.30

-   [BOJ 10546](../master/Problem/BOJ_10546.js)

    프로그래머스 완주하지 못한 선수와 같은 문제. 오브젝트 자료형을 이용하여 참가한 선수의 이름을 기준으로 정수형 값으로 저장한 후, 완주한 사람에 대해서 -1 하였다. 그 후 모든 오브젝트 요소에 대해서 값이 1인 요소를 출력하여 풀었다.

-   [BOJ 5397](../master/Problem/BOJ_5397.js)

    n개의 문자열이 주어진다. 모든 문자열에 대해서 "<", ">"가 입력될 시 커서를 움직이며, "-"가 입력될 시 커서에 해당하는 문자를 지우는 연산을 할 때, 문자열이 완성된 모습을 출력하는 문제. 첫 번째 풀이는 정수형 변수 index와 `splice`를 이용하여 stack에 값을 추가, 삭제하여 풀었으나 시간초과 결과를 받았다. 두 번째 풀이는 스택 배열을 두개 사용하여 커서 이동 시 pop과 push를 이용, 연산 종료 후 오른쪽 스택을 뒤집어서 `join`하여 풀었다.

#### 21.4.3

-   [BOJ 1966](../master/Problem/BOJ_1955.js)

    우선순위가 있는 프린터 문제. 파이썬은 deque를 사용해 popleft를 사용하여 풀었지만 JS는 shift를 사용하면 되어 추가적인 import없이 풀었다.

#### 21.8.16

-   [프로그래머스 자릿수더하기](../master/Problem/프로그래머스_자릿수더하기.js)

    정수를 입력받은 후, 해당 정수의 자릿수를 모두 더해 반환하는 문제. 정수를 문자열, 배열화한 후 reduce를 이용하여 모든 자릿수를 더하여 풀었다.

#### 21.8.17

-   [프로그래머스 짝수와 홀수](../master/Problem/프로그래머스_짝수와홀수.js)

    정수를 입력받은 후, 해당 정수가 짝, 홀수인지 반환하는 문제. 화살표 함수로 바꾼 후, 삼항 연산자와 0이 false인 것을 이용하여 간단히 풀었다.

#### 21.8.18

-   [프로그래머스 평균 구하기](../master/Problem/프로그래머스_평균구하기.js)

    reduce를 이용하여 sum 값을 구한 후, length를 이용하여 평균을 구한 후 반환하여 풀었다.

#### 21.8.19

-   [프로그래머스 핸드폰 번호 가리기](../master/Problem/프로그래머스_핸드폰번호가리기.js)

    문자열이 주어진 후, 마지막 4자리 수를 제외하고 \*로 바꾼 문자열을 반환하는 문제. 문자열을 spread한 후, map을 이용해 길이와 비교하여 조건에 맞는 배열을 구성하였다. 배열을 join한 값을 반환하여 풀었다.

#### 21.8.20

-   [프로그래머스 정수 내림차순으로 배치하기](../master/Problem/프로그래머스_정수내림차순으로배치하기.js)

    정수가 주어진 후, 해당 자릿수의 숫자들을 내림차순으로 배치하여 정수를 반환하는 문제. 주어진 정수를 배열화한 후, 내림차순으로 정렬, join한 값을 parseInt한 값을 반환하여 풀었다.

#### 21.8.21

-   [프로그래머스 정사각형 별찍기](../master/Problem/프로그래머스_직사각형별찍기.js)

    두 개의 수가 주어지고 해당 수를 이용하여 직사각형을 출력하는 문제, 문자열의 repeat 메소드를 이용하여 풀었다.
