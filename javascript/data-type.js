// String(문자 데이터)
// 다옴표를 사용합니다.

let myName = "HEROPY";
let emaill = 'blackdoc1020@gmail.com'; //큰 따옴표 작은 따옴표 구별 없음
let hello = `Hello ${myName}?!`//보간할 때 사용

console.log(myName); //HEROPY
console.log(myName); //blackdoc1020@gmail.com
console.log(myName); //Hello HEROPY?!


//nuber(숫자 데이터)
// 정수 및 보동소수점 수자를 나타냅니다.

let number = 123;
let opacity = 1.57;

console.log(number);
console.log(opacity); // 1.57


// boolean(불린 데이터)
// true, flase  두가지 값 밖에 없는 논리 데이터입니다.
let cheked = true;
let isShow = false;

console.log(cheked); // true
console.log(isShow); // false

// Undefined
// 값이 할당되지 않은 상태를 나타냅니다.
let undef; //undefined
let obj = { abc: 123}; //객체 데이터 {}: 객체란? : 데이터의 집합

console.log(undef); // undefined
console.log(obj.abc); //123
console.log(obj.xyz); //undefined

// Null
// 어떤 값이 의도적으로 비어있음을 의미합니다.
let empty = null;

console.log(empty); // null


//Object(객체 데이터)
//여러 데이터를 Key:Value 형태로 저장합니다. {}

let user = {
// Key:Value,
name: 'jinjin',
age: 85,
isValid: true
};

console.log(user.name); //jinjin
console.log(user.age);//85
console.log(user.isValid); //true

// Array(배열 데이터)
// 여러 데이터를 순차적으로 저장합니다. []

let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);