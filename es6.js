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


@@@@@ 자바스크립트의 다양한 변수 선언 방식 @@@@@

**함수 선언(Function  Declaration)**
funstion 함수이름(파라미터) {
  동작
  return 리턴값
}



**함수 표현식(Function  Expression) / 함수를 값처럼 사용 (변수에 선언하는게 아니라)
1.
const printCodeit = function () {
  conole.log('Codeit');
}

printCodeit();

2.
const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', function () {
 console.log('button is clicked!') ; 
});  / 함수 선언을 값처럼 활용 함수 표현식

함수선언식은 함수선언보다 먼저 호출해도 문제없이 동작함.(선언문이 위쪽으로 끌어 올려지는 현상을 호이스팅)
함수 표현식은 선언 이전에 접근할 수 없음

함수선언은 함수스코프를 갖고 있어서 함수안에서 선언된 함수는 밖에서 호출할수 없지만
함수가 아닌 다른 코드 블록에선 모두 전역적으로 호출 가능
함수표현식은 할당된 변수에 따라 스코프가 결정됨.



**Named Function Expression (기명 함수 표현식) 이름이 있는 함수 표현식, 기명 함수 표현식이라고 함.
 함수 표선식으로 함수가 할당된 변수에는 자동으로 name이라는 프로퍼티를 가지게 됨.

const sayHi = function printHiInConsole() {
  console.log('Hi');
};

console.log(sayHi.name); // printHiInConsole
/이 함수 이름은 함수 내부에서 함수 자체를 가리킬 때 사용할 수 있고 함수를 외부에서 함수를 호출할 때 사용할 수는 없습니다.


** 즉시 실행 함수 (IIFE) **  Immediately Invoked Function Expression
(function () {
  console.log('Hi!');
})();
소괄호로 감싼 다음에 바로 뒤에 함수를 실행하는 소괄호를 한 번 더 붙여주는 방식인데요.
이렇게 하면 함수가 선언된 순간 바로 실행이 되는 겁니다.
(function (x, y) {
  consoel.log(x + y);
})(3, 5);  /파라미터를 작성하고, 함수를 호출할 때 아규먼트를 전달할 수도 있음

(function sayHi() {
  console.log('Hi!');
})();

sayHi(); // ReferenceError 한 가지 주의할 점은 즉시 실행 함수는 함수에 이름을 지어주더라도 외부에서 재사용할 수 없다




@@@@@ parameter 파라미터 @@@@@
*파라미터 / 함수 선언식에 소괄호 안에 작성
*아규먼트 / 함수를 호출하는 부분에서 파라미터를 전달하는 값
*아규먼트 순서대로 파라미터 값을 적용.

function introduce(name = '홍길동', birth = 1443) {
  console.log(`안녕하세요 저는 ${name}입니다.`);
  console.log(`${birth}년에 태어났습니다.`);
}

introduce('장동건'); / 아규먼트 첫번째 값은, 파라미터 첫번째에 적용, birth 는 기본값으로 전달
introduce('Joy', null); / Joy는 name, null은 birth
introduce(undefined, 2090); / undefined는 파라미터 첫번째 값을 그대로 적용, 2090은 birth 로 전달

안녕하세요 저는 장동건 입니다.
1443년에 태어났습니다.
안녕하세요 저는 Joy입니다.
null년에 태어났습니다.
안녕하세요 저는 홍길동입니다.
2090년에 태어났습니다.



@@@@@ Arguments 아규먼트 객체 @@@@@
변수나 함수이름이 같은 Arguments로 지으면 않됨
함수선언 할때 여러번 호출 할때 아규먼트의 갯수가 적거나, 많으면 undefined 나 무시될 경우가 있음 (갯수에 맞춰야함) 그래서 arguments를 사용
console.log(argyments[0])
console.log(arguments.length);
Arguments는 유사배열로 배열 메소드는 적용할 수 없지만. length 나 인덱싱을 통해서 호출 가능

function  printArguments(a,b,) {
 for (const arg of argyments) {
   console.log(arg);
 } 
}  / 이런식으로 for of문 도 사용가능



@@@@@ Rest Parameter 레스트 파라미터 @@@@@ 2015년 이후
아규먼트 객체(유사배열)을 보완한 레스트 파라미터는 배열로, 유연하게 사용할 수 있음. 가급적으로 rest parameter를 사용함.BigInt
==============================
console.log(args.splice(0, 2));
console.log(arguments.splice(0, 2)); / Uncaught TypeError!!!
==============================

function  printRank(first, second, ...others) {     /...으로 표현함
 console.log(`코드잇 레이스 최종 결과`);
 console.log(`우승: ${first}`);
 console.log(`준우승: ${second}`);
 for (const arg of others) {
   console.log(`참가자: &{arg}`);
 }
}
printRank('Phil', 'Won', 'Emma', 'Min', 'Luke');

=> 
코드잇 레이스 최종 결과
우승: Phil
준우승: Won
참가자: Emma
참가자: Min
참가자: Luke
==============================




@@@@@  Arrow Function @@@@@ 2015년 이후
기존 함수를 간결하게 변경, 익명 함수, 아규먼트객체를 사용할 수 없음

============= 일반 함수선언 문
const getTwice = function (number){
 return nuber * 2;  
};

console.log(getTwice(5));
=> 10
============= Arrow Function으로 변경
const getTwice = (number) => {    /function 키워드를 지워주고 소괄호 오른편에 => 를 입력
  return nuber * 2;  
 };
 
 console.log(getTwice(5));
 => 10
 =============Arrow Function으로 더 간결하게 변경
 const getTwice = number => number * 2; / 리턴문이 하나라면 중괄호 생략 할수있음, 하지만 함수내부에서 조건문이나 반복문, 변수의 값을 할당할때는 생략할 수 없음. + 객체도 사용할 수 없음.

 console.log(getTwice(5));
 => 10
 /하지만 파라미터가 2개 이상이거나, 파라미터가 없을경우는 사용 할수없음.
 =============



 @@@@@  this 디스 객체 @@@@@ 2015년 이후
 함수내부에서 주로 사용, 특히 객체에 매소드를 만들때 사용
 함수를 호출한 객체를 가르키는 키워드. 함수가 호출할때 어떤 객체가 그 함수를 호출했는지에 따라 상대적으로 값이 변하는게 특징.

 Arrow function 을 사용하면 this값은 선언되기 직전에 그때 유효한 this값을 선언되기 때문에 사용 할 수없음.
 그래서 일반 함수를 선언할때 this를 사용할 수 있음. 

 console.log(getTwice(this);  /window 객체 출력

 function printThis(){
   conole.log(this);
 }

 const myObj = {
   content: 'myObj',
   printTis: printThis,
 };

 const otherObj = {
  content: 'otherObj',
  printTis: printThis,
};

myObj.printThis();       /content: 'myObj' 객체 출력
otherObj.printThis();    /content: 'otherObj' 객체 출력


@@@@@ 문장과 표현식 @@@@@ 
*문장 (statements)
자바스크립트에서 문장은 어떤 동작이 일어나도록 작성된 최소한의 코드 덩어리

*표현식 (expressions)
표현식은 결과적으로 하나의 값이 되는 모든 코드
5 + 7 // 12

'I' + ' Love ' + 'Codeit' // I Love Codeit

true && null // null

*표현식은 보통 문장의 일부로 쓰이지만, 그 자체로 문장일 수도 있습니다. 

title = 'JavaScript';
/ 할당 연산자는 값을 할당하는 동작도 하지만, 할당한 값을 그대로 가지는 표현식이다.

sayHi(); // sayHi 함수의 리턴 값
/ 함수 호출은 함수를 실행하는 동작도 하지만, 실행한 함수의 리턴 값을 가지는 표현식이다.

console.log('hi'); // undefined
/ console.log 메소드는 콘솔에 아규먼트를 출력하는 동작도 하지만, undefined 값을 가지는 표현식이다.


*표현식이 아닌 문장
조건문이나 반복문은 값으로 평가되지 않고 오로지 문장으로만 평가

*자바스크립트에서 특별한 경우를 제외하면 일반적으로 표현식인 문장은 세미콜론으로, 표현식이 아닌 문장은 문장 자체의 코드 블록(중괄호)로 그 문장의 범위가 구분
(3 + 4) * 2;
console.log('Hi!');

while(true) {
  x++;
}


@@@@@ 조건을 다루는 표현식 @@@@@ 
조건문은 if문과 switch 2가지 뿐이였음. 이후 조건 연산자(Conditional operator) 출시

*조건 연산자 (Conditional operator)    /if문과 비슷
조건 ? truthy 할 때 표현식 : falsy 할 때 표현식     / ? : 로 구분
삼항 연산자(Ternary operator)라고도 함.
표현식이기 때문에 변수를 선언하거나, 반복문을 실행할 수 없음.
===============================================
const CUT_OFF = 80;

function passChecker(score) {
 return score > CUT_OFF ? '합격!' : '불합격!';

 // if문으로 했을 경우
 if (score > CUT_OFF) {
  return '합격!';
 }else{
  return '불합격!';
 }
 //
}

console.log(passChecker(90));
=> 합격!
===============================================

@@@@@ Spread 구문, 스프레드 @@@@@ 펼치다는 뜻으로 이해하기

배열 앞에 마침표 3개 ... 으로 표현으로 배열을 복사 함.
객체를 변수에 값이 직접 할당되지 않고 주소값이 할당됨. 배열 복사 시에 slice();메소드를 사용하여 복사 하였음.
하지만, ...으로 스프레드 구문을 사용하면 복사 slice를 사용하지 않아도 됨.

const latte = {
  esspresso: '30ml',
  milk: '150ml'
};

const cafeMocha = {
  ...latte,
  chocolate: '20ml',
}

console.log(latte); // {esspresso: "30ml", milk: "150ml"}
console.log(cafeMocha); // {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}

*Spread 구문을 사용해서 새로운 배열을 만든다거나 함수의 아규먼트로 사용할 수는 없습니다.



============배열은 객체로 펼칠 수 있지만 객체는 배열로 펼칠 수 없다
const members = ['태호', '종훈', '우재'];
const newObject = { ...members };

console.log(newObject); // {0: "태호", 1: "종훈", 2: "우재"}

const topic = {
  name: '모던 자바스크립트',
  language: 'JavaScript', 
}
const newArray = [...topic]; // TypeError!

==============================




@@@@@ 모던한 프로퍼티 표기법 @@@@@ 
변수에 할당된 값으로 프로퍼티를 만든 객체에 프로퍼티와 값이 같다면 생략하는 방법

const title = 'Codeit';
const birth = 2017;
const job = '프로그래밍 강사';

const user = {
  title: title,
  birth: birth,
  job: job,
};
======= 변경한 방법 =======
const user = {
  title,
  birth,
  job,
};
==========================
함수를 메소드로 만들때도 사용가능
function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}
const user = {
  firstName: 'Tess',
  lsesName: 'Jang',
  getFullName: getFullName,     /getFullName, 으로 변경
};
console.log(user.getFullName()); 




*계산된 속성명(computed property name)
const user = {
  [표현식]: 값,
};
==========================
const user = {
  ['Code' + 'it']: 'value',
}

console.log(user);

=>{Codeit: "value"}
=========================
변수에 담긴 값을 사용하거나 함수의 리턴 값으로도 사용가능
const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'Name']: 'Modern JavaScript',
  [propertyName]: 2017,    /변수에 담긴 값
  [getJob()]: '프로그래밍 강사',   /함수의 리턴 값
};

console.log(codeit);



@@@@@ 옵셔널 체이닝??? @@@@@ 


@@@@@ Destructuring (구조 분해) @@@@@ 배열(Array) 적용  [] 사용
const rank = ['유나', '효준', '민환', '재하'];

*// const macbook = rank[0];  /기존 방식
*// const ipad = rank[1];
*// cosnt airpods = rank[2];
*// const coupon = rank[3];

const [macbook, ipad, airpods, coupon] = rank;   /구조분해로 표현 할 경우


*// const [macbook, ipad, airpods, ...coupon] = rank;  /... 사용가능, 마지막 사람이 배열로 할당 ["민환", "재하"]

*// const rank = ['유나', '효준', '민환' ];   /기존 방식
*// const [macbook, ipad, airpods, coupon] = rank;   / 남은 변수에는 undefined 가 할당
*// const [macbook, ipad, airpods, coupon = '없음'] = rank;   /이름값을 설정할 수 있음.


console.log(macbook);   /유나
console.log(ipad);      /효준
console.log(airpods);   /민환
console.log(coupon);    /재하
=========================================
let macbook = '효준';
let ipad = '유나';

// let temp = macbook; /기존 방식
// macbook = ipad;
// ipad = temp;

[macbook, ipad] = [ipad, macbook];  
/구조분해로 적용 가능  
/오른쪽값을 왼쪽 할당, ipad의 유나가 macbook으로 할당, macbook에 있는 효준이 ipad에 할당

console.log('MacBook 당첨자:', macbook);
console.log('iPad 당첨자:', ipad);
=>
MacBook 당첨자: 효준
iPad 당첨자: 유나
==========================================



@@@@@ Destructuring (구조 분해) @@@@@ 객체(Object) 적용 {}사용
const macvook = {
  title: '맥북 프로 16형',
  price: 3690000,
  memory: '16GB',
  storage: '1TV SSD 저장 장치',
  display: '16형 Retina 디스플레이',
};

*// const title = macbook.title;    /기존 방식
*// const price = macbook.price;

const{ title, color } = macbook;   /구조분해로 적용 ,기본값, ...사용가능

console.log(title);
console.log(color);
=>
맥북 프로 16형
undefined
=========================== 새로운 이름으로 선언할 경우
const{ title: product, color} = macbook;     / title: product 
console.log(product);      / console.log(title);의 title 변경
==============================



@@@@@ 함수와 Destructuring @@@@@ 
===============================================
function  printWinners(...arg) {
  const [macbook, ipad, airpods, ...coupon] = arg;

  console.log(`이벤트 결과를 알려드립니다!`);
  console.log(`맥북의 주인공은 '${macbook}'님 입니다.`);
  console.log(`아이패드의 주인공은 '${ipad}'님 입니다.`);
  console.log(`에어팟 주인공은 '${airpods}'님 입니다.`);
  console.log(`코드잇 3개월 수강권 주인공은`);
 
  for (let user of coupon) {
    console.log(`' '${user}'님`)
  }
  console.log(`이상 총 ${coupon.length}명 입니다.`);
};

printWinners('효준', '효신', '재훈', '소원', '현승', '종훈');



====================↑ Destructuring 디스트럭처링 변환
function  printWinners([macbook, ipad, airpods, ...coupon]) {
    
  console.log(`이벤트 결과를 알려드립니다!`);
  console.log(`맥북의 주인공은 '${macbook}'님 입니다.`);
  console.log(`아이패드의 주인공은 '${ipad}'님 입니다.`);
  console.log(`에어팟 주인공은 '${airpods}'님 입니다.`);
  console.log(`코드잇 3개월 수강권 주인공은`);
 
  for (let user of coupon) {
    console.log(`' '${user}'님`)
  }
  console.log(`이상 총 ${coupon.length}명 입니다.`);
};

const ranks = ['효준', '효신', '재훈', '소원', '현승', '종훈'];
printWinners(ranks);

->
이벤트 결과를 알려드립니다!
맥북의 주인공은 '효준'님 입니다.
아이패드의 주인공은 '효신'님 입니다.
에어팟 주인공은 '재훈'님 입니다.
코드잇 3개월 수강권 주인공은
'소원'님
'현승'님
'종훈'님
이상 총 3명 입니다.

===========================================
const macbook = {
  titleL '맥북 프로 16형',
  price: 3690000,
  color: 'silver',
  memory: '16GB',
  storage: '1TB SSD 저장 장치',
  display: '16형 Retina 디스플레이',
};

function  printSummary(object) {
  console.log(`선택한 상품은 '${object.title}'입니다.`);
  console.log(`색상은 ${object.color}이며,`);
  console.log(`가격은 ${object.price}원 입니다.`);
};

printSummary(macbook);

================================= Destructuring 사용법

function  printSummary(object) {
  const { title, colr, price } = object;
  console.log(`선택한 상품은 '${object.title}'입니다.`);
  console.log(`색상은 ${object.color}이며,`);
  console.log(`가격은 ${object.price}원 입니다.`);
};

printSummary(macbook);
================================= 함수내에서 정해진 파라미터만 사용할 경우 더 단축할 수 있음.

function  printSummary({ title, colr, price }) {
  console.log(`선택한 상품은 '${object.title}'입니다.`);
  console.log(`색상은 ${object.color}이며,`);
  console.log(`가격은 ${object.price}원 입니다.`);
};

printSummary(macbook);

==============================dom 이벤트에 구조분해 적용 방법
const btn = document.querySelector('#btn');

btn.addEventListener('click', (event) => {
  event.target.classList.toggle('checked');
});


1. 구조분해 변경
btn.addEventListener('click', ({ target }) => {
  target.classList.toggle('checked');
});  / 구조 분해로 변경 target 프로퍼티로 간결하게 사용 할수있음.

2. target이 객체로 또 다시 분해 하여 변경할 수 있음. 가독성이 떨어져 추천하지 않음.
btn.addEventListener('click', ({ target: { classList} }) => {
  classList.toggle('checked');
});  / 구조 분해로 변경 target 프로퍼티로 간결하게 사용 할수있음.

====================================

const numbers = [5, undefined, null, 3, 1, 7, 0];
const [a, b = 4, c = 2, ...d] = numbers;

console.log(a);       /5
console.log(b);       /4          =변수에 할당될 값이 없거나 혹은 undefined값이 할당되면, 그 변수에는 undefined 대신 기본값이 할당
console.log(c);       /null       =기본값은 할당될 값이 없거나 undefined 값이 할당될 때 사용되기 때문에, 그대로 변수 c에는 null값을 갖게 됩니다.
console.log(d[2]);    /7          =...d 로 d에는 [3, 1, 7, 0]이 할당
console.log(d[4]);    /undefined  = [3, 1, 7, 0] 에 인덱스 4는 없음




@@@@@ 에러와 에러 객체 @@@@@ 
에러가 발생한 순간 프로그램이 멈춤. 이후에 코드는 동작 하지 않음.

*에러 객체 = name, message 프로퍼티를 가지고 있음.
크게 3가지로 요약
consloe.log('시작!') ;

const title = '코드잇';
console.log(title);
1. console.log(codeit); / ReferenceError: code it is not defind = 존재하지 않는 변수나 함수를 호출할 때 
2. console.log(title()); / Uncaught TypeError: = 변수를 함수처럼 사용해서 잘못된 방식으로 자료형을 다룰 때
3. const ti-tle = '코드잇'; / Uncaught SyntaxError: = 문법에 맞지 않는 코드

console.log('끝!');  /중간에 에러가 생겨서 실행되지 않음.

=========================에러 객체를 만드는 방법
consloe.log('시작!') ;

const error = new TypeError('타입 에러가 발생했습니다.');
console.log(error.name);     / TypeError
console.log(error.message);  / 타입 에러가 발생했습니다.

console.log('끝!'); 

->
시작!
TypeError
타입 에러가 발생했습니다.
끝!
========================

=========================에러를 발생시키는 방법 throw
consloe.log('시작!') ;

const error = new TypeError('타입 에러가 발생했습니다.');

throw error;    / 에러발생

console.log(error.name);     / TypeError
console.log(error.message);  / 타입 에러가 발생했습니다.

console.log('끝!'); 

->
시작!
(TypeError 발생)
========================


@@@@@ try catch 문 @@@@@ 에러가 발생 하고나서 catch 문이 출력
try {
  // 코드
} catch (error) {
  // 에러가 발생했을 때 동작할 코드
}
=========================================
try {
  console.log('에러 전');

  const codeit = '코드잇';
  console.log(codeit)

  codeit = 'codeit';  /에러발생

  const language = 'JavaScript';
  console.log(languge);
} catch (error) {    / 에러객체가 error 파라미터에 전달 , 파라미터는 원하는 이름으로 수정 가능
  console.log('에러 후');
}

->
에러 전
코드잇
에러 후
/ 만약 에러가 발생하지 않을 시에는 catch문 이전이 출력
에러 전
코드잇
JavaScript

=============================

*try catch 문은 블록스코프를 가지고 있어, 블록 안에서만 사용 가능


@@@@@ finally 문 @@@@@ finally문은 try catch문이 끝난 다음에 최종적으로 실행될 코드를 다룰 때 활용

try {
  // 실행할 코드
} catch (err) {
  // 에러가 발상했을 때 실행할 코드
} finally {
  // 항상 실행할 코드
}

try문에서 에러가 발생하지 않는다면 try문의 코드가 모두 실행된 다음에,
try문에서 에러가 발생한다면 catch문의 코드가 모두 실행된 다음 실행할 코드를 finally문에 작성하면 됩니다



=========================================

function printMembers(...members) {
  for (const member of members) {
    console.log(member);
  }
}

try {
  printMembers('영훈', '윤수', '동욱');
} catch (err) {
  alert('에러가 발생했습니다!');
  console.error(err);
} finally {
  const end = new Date();
  const msg = `코드 실행을 완료한 시각은 ${end.toLocaleString()}입니다.`;
  console.log(msg);
}
/ 에러 유무와 관계없이 코드 실행 시각을 알고 싶을 때 활용할

=========================================


*finally문에서의 에러 처리
try {
  try {
    // 실행할 코드
  } catch (err) {
    // 에러가 발상했을 때 실행할 코드
  } finally {
    // 항상 실행할 코드
  }
} catch (err) {
  // finall문에서 에러가 발생했을 때 실행할 코드
}

/ finally문에서도 에러 처리가 필요한 경우에는 아래 처럼 try catch문을 중첩해서 활용하는 방법