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

-   [프로그래머스 자릿수 더하기](../master/Problem/프로그래머스_자릿수_더하기.js)

    정수를 입력받은 후, 해당 정수의 자릿수를 모두 더해 반환하는 문제. 정수를 문자열, 배열화한 후 reduce를 이용하여 모든 자릿수를 더하여 풀었다.

#### 21.8.17

-   [프로그래머스 짝수와 홀수](../master/Problem/프로그래머스_짝수와_홀수.js)

    정수를 입력받은 후, 해당 정수가 짝, 홀수인지 반환하는 문제. 화살표 함수로 바꾼 후, 삼항 연산자와 0이 false인 것을 이용하여 간단히 풀었다.

#### 21.8.18

-   [프로그래머스 평균 구하기](../master/Problem/프로그래머스_평균_구하기.js)

    reduce를 이용하여 sum 값을 구한 후, length를 이용하여 평균을 구한 후 반환하여 풀었다.

#### 21.8.19

-   [프로그래머스 핸드폰 번호 가리기](../master/Problem/프로그래머스_핸드폰_번호_가리기.js)

    문자열이 주어진 후, 마지막 4자리 수를 제외하고 \*로 바꾼 문자열을 반환하는 문제. 문자열을 spread한 후, map을 이용해 길이와 비교하여 조건에 맞는 배열을 구성하였다. 배열을 join한 값을 반환하여 풀었다.

#### 21.8.20

-   [프로그래머스 정수 내림차순으로 배치하기](../master/Problem/프로그래머스_정수_내림차순으로_배치하기.js)

    정수가 주어진 후, 해당 자릿수의 숫자들을 내림차순으로 배치하여 정수를 반환하는 문제. 주어진 정수를 배열화한 후, 내림차순으로 정렬, join한 값을 parseInt한 값을 반환하여 풀었다.

#### 21.8.21

-   [프로그래머스 직사각형 별찍기](../master/Problem/프로그래머스_직사각형_별찍기.js)

    두 개의 수가 주어지고 해당 수를 이용하여 직사각형을 출력하는 문제, 문자열의 repeat 메소드를 이용하여 풀었다.

#### 21.8.22

-   [프로그래머스 나누어 떨어지는 숫자 배열](../master/Problem/프로그래머스_나누어_떨어지는_숫자_배열.js)

    정수로 이루어진 배열과, 정수가 주어진다. 해당 배열에서 주어진 정수로 나누어떨어지는 수들을 오름차순 정렬하여 반환하는 문제.
    filter 메소드를 이용하여 나누어 떨어진 수로 이루어진 배열을 생성 후, 해당 배열의 크기를 기준으로 정렬한 배열, -1만 존재한 배열을 나누어 반환하여 풀었다.

#### 21.8.23

-   [프로그래머스 문자열 내림차순으로 배치하기](../master/Problem/프로그래머스_문자열_내림차순으로_배치하기.js)

    문자열이 주어진 후, 내림차 순으로 정렬된 문자열을 반환하는 문제. split, sort, reverse, join 메소드를 이용하여 풀었다.

#### 21.8.24

-   [프로그래머스 모의고사](../master/Problem/프로그래머스_모의고사.js)

    최대 10,000개의 문제의 정답들로 이루어진 배열이 주어진다. 1번, 2번, 3번 사람이 일정 규칙을 갖고 문제를 풀 때, 제일 많이 맞춘 사람의 번호를 배열에 담아 반환하는 문제. 규칙을 배열에 담아둔 후, 문제의 인덱스 값과 비교한 나머지를 이용하여 맞았는 지 판별, 맞은 횟수를 저장하였다. 맞은 횟수 중 제일 큰 수와 비교하여 맞은 사람들을 배열에 담아 반환하여 풀었다.
    자바스크립트를 이용해 완벽탐색 문제는 처음인 것 같은데, forEach, map, reduce, filter와 같은 메소드가 참 좋은 것 같다.

#### 21.8.25

-   [프로그래머스 제일 작은 수 제거하기](../master/Problem/프로그래머스_제일_작은_수_제거하기.js)

    정수로 이루어진 배열이 주어진 후, 해당 배열에서 제일 작은 수를 제거한 배열을 반환하는 문제. 이 때 제거된 배열의 길이가 0일 시 -1로 이루어진 배열을 반환하는 조건이 있다. filter, Math.min 메소드를 이용하여 풀었다.

#### 21.8.26

-   [프로그래머스 부족한 금액 계산하기](../master/Problem/프로그래머스_부족한_금액_계산하기.js)

    놀이기구의 가격, 보유한 금액, 계산이 될 횟수가 주어지고 가격은 횟수만큼 올라갈 때, 놀이기구를 몇 번 탑승할 수 있는지 계산하는 문제. 사칙연산과 조건문을 이용하여 풀었다.

#### 21.8.27

-   [프로그래머스 수박수박수박](../master/Problem/프로그래머스_수박수박수박.js)

    정수 n이 주어졌을 때 "수", "박"을 순서와 n에 맞게 반환하는 문제. repeat을 이용하여 긴 문자열을 만든 후 slice를 이용해 처음부터 n까지 잘라서 반환하여 풀었다.

#### 21.8.28

-   [프로그래머스 직업군 추천하기](../master/Problem/프로그래머스_직업군_추천하기.js)

    각 직업군 언어 점수, 개발자가 사용하는 언어와 언어 선호도가 주어질 때, 그에 맞는 직업군을 추천해주는 문제. 문자열로 주어지는 각 직업군 언어 점수를 오브젝트로 Parsing한 후, 각 언어에 대해 점수를 계산, 저장하였다. 저장하는 과정에서 최댓값을 저장하여 배열에 저장하였다. 동일한 값은 알파벳순으로 빠른 값을 반환하는 조건이 있어 정렬한 값 중에서 0번 째 인덱스 값을 반환하여 풀었다. 각 직업군 언어에서 개발자가 사용하는 언어가 없을 때는 0으로 계산하는 조건이 있어 `Nullish coalescing`을 사용하였으나 프로그래머스 상에서 호환이 안되어 삼항연산자로 대체하여 풀었다.

#### 21.8.29

-   [프로그래머스 서울에서 김서방 찾기](../master/Problem/프로그래머스_서울에서_김서방_찾기.js)

    배열에서의 "Kim"의 인덱스 값을 이용한 문자열을 반환하는 문제. indexOf를 활용하여 풀었다.

#### 21.8.30

-   [프로그래머스 같은 숫자는 싫어](../master/Problem/프로그래머스_같은_숫자는_싫어.js)

    배열에서 연속된 숫자 중 중복되는 수를 제외한 배열을 반환하는 문제. 첫 풀이는 주어진 배열을 기준으로 반복을 수행하며, 새로운 배열의 마지막 값과 비교하여 풀었다. 두 번째 풀이는 filter를 이용하여 주어진 배열의 idx-1 값과 비교하여 풀었다.

#### 21.8.31

-   [프로그래머스 가운데 글자 가져오기](..master/Problem/프로그래머스_가운데_글자_가져오기.js)

    문자열이 주어진 후, 해당 문자열의 길이가 짝수이면 가운데 2글자를, 홀수이면 가운데 글자를 반환하는 문제. length를 기준으로 slice하여 풀었다.

#### 21.9.1

-   [프로그래머스 콜라츠 추측](../master/Problem/프로그래머스_콜라츠_추측.js);

    정수 n이 주어진 후 콜라츠 추측을 통해 몇 번만에 1이 되었는 지 반환하는 문제. 재귀적으로 풀었다.

#### 21.9.2

-   [프로그래머스 약수의 합](../master/Problem/프로그래머스_약수의_합.js)

    정수 n이 주어질 때, n의 모든 약수의 합을 반환하는 문제. 재귀적으로 i를 하나씩 키워 계산하는 방법으로 풀었다.

#### 21.9.3

-   [프로그래머스 문자열내 p와y의 개수](../master/Problem/프로그래머스_문자열내_p와y의_개수.js)

    문자열이 주어질 때, 'p', 'P'의 수와 'y', 'Y'의 수가 같을 때 true를, 같지 않을 때 false를 반환하는 문제.
    배열화하여 reducer를 통해 p일 때 +1, y일 때 -1을 계산한 값을 반대를 반환하여 풀었다.

#### 21.9.4

-   [프로그래머스 소수 찾기](../master/Problem/프로그래머스_소수_찾기.js)

    정수 n이 주어진 후, 1부터 n까지 소수의 개수를 반환하는 문제. `에라토스테네스 체` 방식을 이용하여 소수를 판별, 소수일 시 `primeArr`에 추가한 후 length 값을 반환하여 풀었다.
