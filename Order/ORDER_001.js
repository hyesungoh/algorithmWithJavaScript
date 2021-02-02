// You are not permitted to change this in any way
function Student(name, major, yearInSchool, club) {
    this.name = name; // string, (e.g. "Jim", "Pam", "Michael")
    this.major = major; // string, (e.g. "Computer Science", "Art", "Business")
    this.yearInSchool = yearInSchool; // int, (e.g. 1, 2, 3, 4)
    this.club = club; // string, (e.g. "Improv", "Art")
}

var students = [
    new Student("Pam", "Art", 2, "Art"),
    new Student("Michael", "Business", 4, "Improv"),
    new Student("Dwight", "Horticulture", 1, "Karate"),
    new Student("Jim", "Sports Science", 2, "Guitar"),
    new Student("Angela", "Accounting", 4, "Cat"),
    new Student("Toby", "Human Resources", 3, "Photography"),
    new Student("Test", "Human Resources", 4, "Photography"),
];

/*이 함수는 임의의 comparator를 사용해 배열을 정렬합니다. 당신은 comparator와 그 comparator에 적절한 배열을 받고, 가장 큰 객체의 인덱스는 0이고 가작 작은 것은 마지막 인덱스를 가진 새 배열을 리턴합니다.*/
function sortArr(comparator, array) {
    // ! array.slice()를 사용하여 Call By Reference 형식으로 array의 값이 변환되지 않게 새로운 배열을 만든 것 입니다.
    const sortedArray = array.slice();
    // ! for 수행시에 length를 매번 계산하는 것보다 먼저 계산한 값을 저장하는 것이 시간복잡도 상에서도 좋으며, 코드의 가독성측면에서도 좋습니다.
    const lengthOfArray = array.length;

    // ! bubble sorting 방법을 이용하여 정렬하였습니다. 버블 정렬은 해당 게시물 (https://velog.io/@760kry/JS-Sorting-Algorithms)을 참고하시면 좋을 것 같습니다.
    for (let i = 0; i < lengthOfArray - 1; i++) {
        for (let j = 0; j < lengthOfArray - 1; j++) {
            // ! 현재 값과 다음 값을 인자로 매개변수로 받아온 comparator을 호출합니다.
            if (comparator(sortedArray[j], sortedArray[j + 1])) {
                // ! array의 값이 복사된 sortedArray의 값을 정렬 결과에 따라 변경합니다.
                tempElement = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = tempElement;
            }
        }
    }

    // ! 동아리를 기준으로 정렬하였는 지 true, flase 값을 저장합니다.
    const isClubComparator = comparator === clubComparator;

    // ! 삼항연산자를 이중으로 사용하여 정렬 기준에 따른 메세지를 변수에 저장합니다.

    // ! JS의 삼항연산자를 설명드리자면 condition ? "True Value" : "False Value" 와 같습니다.
    // ! 삼항연산자를 이중으로 사용하였기 때문에 condition ? "True Value" : condition ? "False and True Value" : "False and False Value"의 형태입니다.

    const logMsg = isClubComparator
        ? "The students sorted by club affiliation are:"
        : comparator === yearComparator
        ? "The students sorted by year in school are:"
        : "The students sorted by major are:";

    // ! 정렬 시작 시 출력되는 별 입니다.
    console.log("**********");
    // ! 위에 삼항연산자를 사용하여 저장한 메세지를 출력합니다.
    console.log(logMsg);

    // ! for of를 사용하여 배열에 접근하지 않고 해당 인자값이 배열의 값이 되도록 반복문을 수행합니다.
    for (let student of sortedArray) {
        // ! 함수의 prototype으로 정의된 logMe를 동아리 기준 정렬인지 boolean으로 저장된 변수를 인자로 호출합니다.
        console.log(student.logMe(isClubComparator));
    }

    // ! 반환 부분을 말씀하셔서 작성하였으나 코드상 쓰인 곳은 없습니다.
    return sortedArray;
}

/*Comparator은 두개의 인자를 가지고 그것들을 비교하기 위해 어떤 알고리즘을 씁니다. 만약 첫번째 인자가 두번째 인자보다 더 크거나 많다면 true를 리턴하고, 아니면 false를 리턴합니다. 이것은 정수의 경우 작동하는 예시입니다*/
function exComparator(int1, int2) {
    if (int1 > int2) {
        return true;
    } else {
        return false;
    }
}
/*모든 comparator에 대하여 만약 학생들이 비교 기준에 따라 동일한 조건을 가지고 있다면 굳이 구분될 필요 없고 그 어떤 것이 먼저 와도 괜찮습니다*/

/*이 함수는 두 학생의 학년을 기준으로 비교합니다. 내림차순으로 정렬하세요.*/
function yearComparator(student1, student2) {
    // ! 인자로 받는 두 학생의 학년을 변수로 빼두어 가독성과 확장성을 높였습니다.
    const yearOfStu1 = student1.yearInSchool,
        yearOfStu2 = student2.yearInSchool;

    // ! 비교연산의 값을 반환하였습니다.
    return yearOfStu1 < yearOfStu2;
}

/*이 함수는 두 학생의 전공을 기준으로 비교합니다. 대문자 소문자에 구별이 없어야하며, A-Z로 정렬되어야합니다.*/
function majorComparator(student1, student2) {
    // ! 인자로 받는 두 학생의 전공을 소문자화하여 변수로 빼두었습니다.
    const majorOfStu1 = student1.major.toLowerCase(),
        majorOfStu2 = student2.major.toLowerCase();

    // ! 비교연산의 값을 반환하였습니다.
    return majorOfStu1 > majorOfStu2;
}

/*이 함수는 두 학생이 들어가있는 동아리를 기준으로 정렬합니다. 큰 값부터 작은 값까지 improv, cat, art, guitar, (리스트에 없는 다른 종류들) 로 정렬되어야 합니다. 대소문자에 영향을 받지 말아야하고 만약 같은 동아리에 있는 학생이 있을 경우 높은 학년의 학생이 먼저 오도록 정렬되어야합니다.*/
function clubComparator(student1, student2) {
    // ! 기존 if 문을 이용하여 동아리를 정렬하는 방법에서 Object 자료형을 활용하여 가독성과 시간복잡도를 줄였습니다.
    const clubOrder = {
        improv: 4,
        cat: 3,
        art: 2,
        guitar: 1,
    };

    // ! 같은 동아리일 시 학년으로 비교하기 때문에 각 학생들의 학년을 변수로 빼 두었습니다.
    const yearOfStu1 = student1.yearInSchool,
        yearOfStu2 = student2.yearInSchool;

    // ! 두 학생의 동아리 정보를 소문자화하여 변수에 저장합니다.
    const clubOfStu1 = student1.club.toLowerCase(),
        clubOfStu2 = student2.club.toLowerCase();

    // ! 삼항연산자를 이용하여 Object에 있을 시는 해당 값을, 없을 시 0을 할당하였습니다.
    const clubToIntStu1 = clubOrder[clubOfStu1] ? clubOrder[clubOfStu1] : 0,
        clubToIntStu2 = clubOrder[clubOfStu2] ? clubOrder[clubOfStu2] : 0;

    // ! 위 변수 선언문들은 동일하게 사용되는 것들을 const로 묶어 선언하여 가독성을 높였습니다.
    // ! var을 사용하지 않은 이유는 var은 전역 메모리로 할당되며 값의 수정이 가능하여 const를 이용하여 지역변수, 값이 변하지 않는 상수로 변수를 선언한 것 입니다.

    // ! 두 학생의 동아리가 같을 시 비교연산의 값을 반환합니다.
    if (clubOfStu1 == clubOfStu2) {
        return yearOfStu1 < yearOfStu2;
    }

    // ! 함수는 return 후 아래 코드들은 실행되지 않습니다. 그렇기 때문에 else를 작성안하고 예외처리를 할 수 있어  이 방법을 사용하였습니다.
    // ! Object를 이용하여 할당받은 동아리 번호입니다.
    return clubToIntStu1 < clubToIntStu2;
}

// ! logMe prototype 부분입니다.
Student.prototype.logMe = function (isPrintClub) {
    // ! club을 기준으로 정렬하였는 지 boolean을 매개변수로 받아와 다음과 같이 if문을 작성하였습니다.
    if (isPrintClub) {
        // ! 해당 문자열 작성 방법은 ``(백틱)을 이용한 방법입니다.
        // ! 문자열 작성 시 따옴표 대신 백틱을 사용하면 아래와 같은 방법으로 문자열을 작성할 수 있습니다.
        return `${this.name} - ${this.major} - ${this.yearInSchool} - ${this.club}`;
    }

    // ! 위에서 말씀드린 것과 같이 반환 후에는 다른 코드는 실행되지 않는 특성을 이용하여 else를 작성하지 않았습니다.
    // ! 해당 방법은 취향차이이며 else {} 부분을 추가하셔도 작동에는 무방합니다.
    return `${this.name} - ${this.major} - ${this.yearInSchool}`;
};

// ! function init을 만든 후 JS파일에서는 init만 호출하는 방향으로 조금 더 함수형 프로그래밍적으로 구현하였습니다.
function init() {
    // ! 작성해주신 부분과 동일하게 COmparator, students를 매개변수로 sortArr을 호출하였습니다.
    sortArr(yearComparator, students);
    sortArr(majorComparator, students);
    sortArr(clubComparator, students);

    // ! 종료되었을 시 별을 출력합니다.
    console.log("**********");
}

// ! init 함수를 호출합니다.
init();

/*

당신의 프로그램은 오프닝과 클로징 별이 있는 console.log에 따라 아웃풋이 생겨야합니다. 괄호 안에 있는 모든 값들은 적절한 값으로 대체되어야합니다. 이것을 달성하기 위해,
당신은 학생들의 배열을 각각의 comparator를 이용하여 정렬하고, 그 배열을 루프시키고, 그리고 각각의 학생들의 새로 정렬된 배열마다 logMe 불러야합니다.
 만약 인자가 true라면 학생들의 이름과 전공 학년 그리고 동아리 소속을 프린트하고 false라면 동아리 소속은 빠지고 학생의 이름과 전공 그리고 학년만 나와야합니다.
 어떤 소트 결과가가 동아리를 디스플레이하고 또 하지 않는지 주의깊게 보십시오.

**********
The students sorted by year in school are:
(Name - Major - Year) // of the "greatest" student
...
(Name - Major - Year) // of the "least" student

**********
The students sorted by major are:
(Name - Major - Year) // of the "greatest" student
...
(Name - Major - Year) // of the "least" student

**********
The students sorted by club affiliation are:
(Name - Major - Year - Club) // of the "greatest" student
...
(Name - Major - Year - Club) // of the "least" student

**********

As an example of what is expected to be printed to the console with logMe being sent True for a single student:
Jim - Sports Science - 2 - Guitar

*/
