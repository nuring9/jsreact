@@@ 데이터 타입 data type
Number 
String
Boolean
null
undefined
Symbol : 유일한 값을 만들 때  / es6부터 추가
BigInt : 엄청 큰 숫자를 다룰 때  / es6부터 추가

@@@ Boolean 불린
* Falsy 값
false null undefined NaN 0 ''
* Truthy 값
[] {} //falsy값을 제외한 값들은 모두 truthy값

*falsy와 truthy값을 명확하게 확인하고 싶다면 Boolean 함수를 사용해서 직접 boolean 타입으로 형 변환 해볼 수도 있습니다.

=================================
const flowers = ['장미', '수국', '백합', '튤립', '진달래'];

for (let i = 4; i; i = i - 2) {  
  console.log(flowers[i]);
}
변수 i가 초깃값으로 숫자 4를 가지고 선언. 숫자 4를 가지고 조건을 평가하겠죠? 숫자 4는 truthy 값
flowers의 i번 index, 즉 4번 index에 있는 값을 콘솔에 출력
i - 2를 i에 할당. i는 숫자 2가 되고, 숫자 2는 truthy 값 flowers의 2번 index의 값인 백합
그리고 나면 또 한 번 i - 2가 i에 할당.  이제 i는 숫자 0을 가지게 됨.  숫자 0은 falsy 값이기 때문에 for 문의 반복은 여기서 종료

문자열은 숫자로 형 변환했을 때 NaN 값이 되는데. NaN 값은 falsy 값
=================================

@@@ and와 or의 연산방식
&&는 true 값이 왼쪽일때 오른쪽 값을, false가 왼쪽일때 왼쪽값을 리턴
||은 true 값이 왼쪽일때 왼쪽 값을, false가 왼쪽일땐 오른쪽 값을 리턴 (&&랑 반대)

================================================
console.log(null && undefined); //null
console.log(0 || true); // true
console.log('0' && NaN); // NaN
console.log({} || 123); // {}


function print(value) {
  const message = value || 'Codeit';
  
  console.log(message);
}

print(); //아무런 값을 전달하지 않으면 파라미터에 undefined가(Falsy) 전달하여 오른쪽 Codeit을 리턴
print('JavaScript'); //전달한 값이 있으면 true, 왼쪽 값 JavaScript가 리턴
================================================

* AND 연산자의 우선순위가 OR보다 높다. 하지만 소괄호 안에 있을때는 소괄호부터! 
console.log(true || false && false); // true
console.log((true || false) && false); // false

console.log('Codeit' || NaN && false); // Codeit
console.log(('Codeit' || NaN) && false); // false

* null 병합 연산자 = ?? / 물음표 두 개(??)를 사용해서 null 혹은 undefined 값을 가려내는 연산자
const example1 = null ?? 'I'; // I
const example2 = undefined ?? 'love'; // love
const example3 = 'Codeit' ?? 'JavaScript'; // Codeit

console.log(example1, example2, example3); // I love Codeit
연산자 왼편의 값이 null 이나 undefined라면 연산자 오른편의 값이 리턴
연산자 왼편의 값이 null 이나 undefined가 아니라면 연산자 왼편의 값이 리턴

* OR 연산자(||) 와 비교
null 병합 연산자(??)는 왼편의 값이 null이나 undefined인지 확인
OR 연산자(||)는 왼편의 값이 falsy인지를 확인하기 때문에 null이나 undefined가 아닌 falsy 값을 활용 
const title1 = false || 'codeit';
const title2 = false ?? 'codeit';

console.log(title1); // codeit
console.log(title2); // false ,&&값 활용

const width1 = 0 || 150;
const width2 = 0 ?? 150; //왼쪽이 Falsy니까 왼쪽 

console.log(width1); // 150
console.log(width2); // 0


@@@ 자바스크립트의 다양한 변수 선언 방식
*var 변수
1.변수 이름 중복선언 가능,
2.변수 선언 전에 사용 가능(호이스팅),
3.함수 스코프

* let과 const
1.변수 이름 중복선언 불가 (SyntaxError 발생)
2.변수 선언 전에 사용 불가 (ReferenceError 발생)
3.블록 스코프
const 키워드는 let 키워드와 다르게 값을 재할당할 수 없다는 특징

*함수 스코프(function scope)와 블록 스코프(block scope)
var 키워드로 선언한 변수는 함수 스코프 / let과 const 키워드로 선언한 변수는 블록 스코프를 가짐
==========================================
function sayHi() {
  var userName = 'codeit';
  console.log(`Hi ${userName}!`);
}

console.log(userName); // ReferenceError

함수 안에서 선언한 변수는 함수 안에서만 유효
===========================================
for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); // 5

함수를 제외한 for, if, while 등과 같은 문법 안에서 선언한 변수는 그 문법 밖에서도 계속 유효했었기 때문에 때로는 중복선언등의 문제
===========================================
function sayHi() {
  const userName = 'codeit';
  console.log(`Hi ${userName}!`);
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

{
  let language = 'JavaScript';
}

console.log(userName); // ReferenceError
console.log(i); // ReferenceError
console.log(language); // ReferenceError

블록 스코프는 중괄호로 감싸진 코드 블록에 따라 유효 범위를 구분
함수와 다른 문법들 뿐만아니라, 그냥 중괄호로 감싸진 코드 블록으로도 유효 범위가 구분되는 모습
===========================================