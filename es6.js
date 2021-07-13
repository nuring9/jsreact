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




@@@@@  Arrow Function @@@@@ 2015년 이후 에로우
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



@@@@@ 함수와 Destructuring @@@@@ 구조분해
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
};   /변동없음

function  printSummary(object) {
  console.log(`선택한 상품은 '${object.title}'입니다.`);
  console.log(`색상은 ${object.color}이며,`);
  console.log(`가격은 ${object.price}원 입니다.`);
};

printSummary(macbook);

================================= Destructuring 사용법

function  printSummary(object) {
  const { title, color, price } = object;
  console.log(`선택한 상품은 '${object.title}'입니다.`);
  console.log(`색상은 ${object.color}이며,`);
  console.log(`가격은 ${object.price}원 입니다.`);
};

printSummary(macbook);
================================= 함수내에서 정해진 파라미터만 사용할 경우 더 단축할 수 있음.

function  printSummary({ title, color, price }) {
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
btn.addEventListener('click', ({ target: {classList} }) => {
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

@@@@@@@@@@ 헷갈리는 용어 @@@@@@@@@

*콜백 함수란? 다른 함수가 실행을 끝낸 뒤, 실행되는 함수.
자바스크립트에서 함수는 객체(Object)로, 함수는 다른 함수의 인자로 쓰일 수도 있고, 어떤 함수에 의해 리턴될 수도 있음.
이러한 함수를 고차함수(higher-order functions)라 부르고 인자로 넘겨지는 함수를 콜백 함수(callback function)


//함수 정의
fun max(a: Int, b: Int): Int { //a, b는 매개변수
  return if (a > b) a else b
}

fun main() {
  val x = 3
  val y = 5

  //함수 호출
  val result = max(x, y) //x, y는 인자(인수)

  println(result)
}

//인자의 값이 매개변수에 복사되어 사용된다고 이해하면 된다.

*${ } 사이에 변수나 연산 등을 삽입할 수 있게 되었다. 달러표시

var name = `사과`
var price = 100
var num = 5;

console.log(`${name}의 구매가는 ${price * num}원 입니다.`)
//${}의 결과는 문자열로 자동 변환.

==========================================================




@@@@@ 배열 메소드 I: forEach와 map @@@@@ 
배열에는 for of 문으로 반복문을 사용하였는데 비슷하게 배열만의 반복문인 forEach와 map 가 있다.

********forEach문*********

const members = ['영훈', '윤수', '동욱', '태호'];

for ( let member of members) {
  console.log(`${member}님이 입장하셨습니다.`);
}  //기본 for of문

memebers.forEach(funtion (member) {
  console.log(`${member}님이 입장하셨습니다.`);
});  // forEach문 , 파라미터가 하나가 반드시 작성 해야 함. forof문에 변수와 비슷하다고 보면 됨.(member)

memebers.forEach((member) => {
  console.log(`${member}님이 입장하셨습니다.`);
}); // Arrow Function으로 대체 가능

============================forEach문 파라미터 

*1. forEach문은 두번째 파라미터 idex(i 간결하게 주로 많이씀)를 가지고 있음.
memebers.forEach((member, i) => {
  console.log(`${i} ${member}님이 입장하셨습니다.`);
}); 

->0 영훈님이 입장하셨습니다.
  1 윤수님이 입장하셨습니다.
  2 윤수님이 입장하셨습니다.
  3 윤수님이 입장하셨습니다.

*다른 배열과 함께 할때 같은 인덱스에 매칭할때도 사용 할 수 있음.
const firstNames = ['영훈', '윤수', '동욱', '태호'];
const lastNames = ['강', '이', '손', '성'];

firstNames.forEach((firstName, i) => {
  console.log(`${lastName[i]}${firstName}님이 입장하셨습니다.`);
}); 

->강영훈님이 입장하셨습니다.
  이윤수님이 입장하셨습니다.
  손윤수님이 입장하셨습니다.
  성윤수님이 입장하셨습니다.


*2. forEach문은 세번째 파라미터 arr (array)
memebers.forEach((member, i) => {
 console.log(arr);
}); 
->forEach를 호출한 변수의 배열을 나타냄. 일반적으로 잘 사용하지 않음.
['영훈', '윤수', '동욱', '태호'];

==================================

********forEach문*********

const firstNames = ['영훈', '윤수', '동욱', '태호'];
const lastNames = ['강', '이', '손', '성'];

const fullNames = firstNames.map((firstName, i) => {
  return lastName [i] + firstName;
}); 

const fullNames = firstNames.map((firstName, i) => lastNames[i] + firstName);
// Arrow Function으로 대체 가능

console.log(fullNames);

-> (4) ["강영훈", "이윤수", "손동욱", "성태호"]
map메소드를 호출할때 작성한 콜백 함수에 리턴값들로 구성된 배열이 출력.

*단순히 반복 작업을 할 경우 forEch 를, 반복작업을 통해서 새로운 배열을 필요한 경우에는 map메소드를 활용!!!!!

*반복 최대 횟수는 메소드를 처음 호출할 때 그당시 요소의 갯수!!!!!!!
반복중에 새로운 요소를 추가할경우(push) 무한 루프가 빠지지 않고, 실제로 코드를 실행해보면, 요소갯수만큼 반복 후 요소갯수만큼 추가됨.
배열의 길이가 줄어들 경우는 반복 횟수도 줄어듬.


============== 간결하게 표현하기
const answer = quiz.map((word, i) => {
  return word[i];
}); 

const answer = quiz.map((word, i) => word[i]);
//콜백 함수 내부에 단순히 return 문 하나만 있기 때문에 다음과 같이 간결하게 작성할 수도 있습니다.


@@@@@ 배열 메소드 II: filter와 find @@@@@ 
우리가 원하는 조건의 요소들만 추려내서 새로운 배열을 만들어 낼 수 있음
map메소드와 비슷하게 구성, 차이점은 리턴문으로 어떤 값을 전달하는게 아니라 true 혹은 false로 평가되는 조건식을 리턴 해줌

const devices = [
  { name: 'GalaxyNote', brand: 'Samsung' },
  { name: 'MacbookPro', brand: 'Apple' },
  { name: 'iPad', brand: 'Apple' },
  { name: 'GalaxyWatch', brand: 'Samsung' },
  { name: 'Gram', brand: 'LG' },
];


*[ filter 메소드 ] 리턴값이 배열, 조건의 모든 요소 배열
const apples = devices.filter((el) => el.brand === 'Apple');

console.log(apples);
->(2) [{...}, {...}]  /brand가 Apple 인 요소의 배열 출력


*[ find 메소드 ] 하나의 조건의 값, 찾는순간 반복이 종료. 인덱스 중 앞에있는 요소만 출력 후 종료
/참고로, 없는 값을 find 할경우 undefined가 출력

const apples = devices.filter((el) => el.brand === 'Apple');

console.log(apples);
->{name: "Gram", brand: "LG"}   /name이 Gram 인 요소를 그대로 출력




============문제!!! filter 메소드를 활용해서 김씨 성을 갖지 않은 사람들을 추려낸 다음 notKims 변수에 담아주세요.========

const seoul = ['김영훈', '김윤수', '김동욱', '강대위', '김영준',
  '김규식', '김태호', '김효신', '손효준', '김현승', '김재하', '김유나',
  '김재훈', '김혜선', '김민환', '김규리', '김소원', '김우재', '최영준',
  '김태순', '김종훈', '김성환', '김승용', '김지혜', '이승욱', '김도현',
  '김승규', '윤하은', '김유진', '김정민', '김혜정', '김예진', '김여진',
  '김성희', '김혜수', '김인선', '김상필', '김혜진', '서상원', '김상혜',
  '김민기', '김그루', '김희지'];


const notKims = seoul.filter((name) => {
  return name[0] !== '김';
});

// const notKims = seoul.filter((name) => name[0] !== '김'); //
// Arrow Function을 좀 더 간결하게 작성 방법

console.log(notKims);

->[ '강대위', '손효준', '최영준', '이승욱', '윤하은', '서상원' ]


@@@@@ 배열 메소드 III: some과 every @@@@@ 
const Number = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((el) => el > 5);    /7,9가 있어서 만족

// every: 모든 요소가 조건을 만족하는지 or 조건을 만족하지 않는 요소가 1개 이상 있는지     
const everyReturn = numbers.every((el) => el > 5);  /1,3,5가 있어서 만족하지 않음

console.log('some:', someReturn);     -> some: true
console.log('every:', everyReturn);   -> every: false

*some 조건을 만족하는 횟수만큼 반복 후 종료 / every메소드는 만족하지 않는 요소를 찾는순간 false 후 종료
*만약 메소드를 호출해야할 배열이 빈 배열이면, some: false / every: true 임


===========간결하게 표현하는 방식 예시문=========
//기본 선언문
function checkSpy(team) {

  const result = team.members.some((member) => member !== '스파이');
let message = '';

if (result) {
  message = `[주의!] 팀 ${team.codeName} 에 이중 스파이가 있습니다!`;
} else {
  message = `팀 ${team.codeName} 에는 이중 스파이가 없습니다.`;
}

console.log(message);
}


//조건 연산자를 활용 , 변수를 선언함과 동시에 조건에 맞는 값을 바로 할당할 수 있어서 let 키워드로 미리 변수를 선언하고 값을 재할당하는 번거로움도 해소할 수 있습니다.
function checkSpy(team) {

  const result = team.members.some((member) => member !== '스파이');
  const message = result
    ? `[주의!] 팀 ${team.codeName} 에 이중 스파이가 있습니다!`
    : `팀 ${team.codeName} 에는 이중 스파이가 없습니다.`;

  console.log(message);
  }

  //Destructuring 활용, 코드가 한 줄 더 추가되긴 했지만 members와 codeName을 사용할 때 조금 더 간결하게 작성 장점
  function checkSpy(team) {
   
    const { codeName, members } = team;
    const result = members.some((member) => member !== '스파이');
    const message = result
      ? `[주의!] 팀 ${codeName} 에 이중 스파이가 있습니다!`
      : `팀 ${codeName} 에는 이중 스파이가 없습니다.`;
  
    console.log(message);
  }

  =================================

@@@@@ 배열 메소드 IV: reduce @@@@@ 누적값
  initialValue = 초기값

reduce 함수는 네 개의 인자를 가집니다.

1. 누산기accumulator (acc)
2. 현재 값 (cur)
3. 현재 인덱스 (idx)
4. 원본 배열 (arr) or (src)


*callback
배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 받습니다.

1. accumulator
누산기 accumlator는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue(초깃값)를 제공한 경우에는 initialValue의 값입니다.

2. currentValue
처리할 현재 요소.

3.currentIndex (Optional:선택적인)
처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.

4.array (Optional:선택적인)
reduce()를 호출한 배열.

5.initialValu (Optional:선택적인)
callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫번째 요소를 사용합니다. 
빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다. 

*반환 값 = 누적 계산의 결과 값.

* 설명
reduce()는 빈 요소를 제외하고 배열 내에 배열 내에 존재한는 각 요소에 대해 callback 함수를 한 번씩 실행하는데, 콜백 함수는 다음의 네 인수를 받습니다. 
1. accumulator     /누산기 acc
2. currentValue    /현재 값 cur
3. currentIndex    /현재 인덱스 idx
4. array           /원본 배열 arr
콜백의 최초 호출 때 accumulator와 currentValue는 다음 두 가지 값 중 하나를 가질 수 있습니다. 만약 reduce() 함수 호출에서 initialValue(초깃값)를 제공한 경우, acc는 초깃값과 같고, cur(현재값)은 배열의 첫 번째 값과 같습니다.
초깃값을 제공하지 않았다면, acc는 배열의 첫번째 값과 같고 cur은 두번째와 같습니다.
//참고: 초깃값을 제공하지 않으면, reduce()는 인덱스 1부터 시작해 콜백 함수를 실행하고 첫 번째 인덱스는 건너 뜁니다. 초깃값을 제공하면 인덱스 0에서 시작합니다.
배열이 비어있는데 initialValue도 제공하지 않으면 TypeError가 발생합니다. 
배열의 요소가(위치와 관계없이) 하나 뿐이면서 initialValue를 제공되지 않은 경우, 또는 initialValue는 주어 졌으나 배열이 빈 경우엔 그 단독 값을 callback 호출 없이 반환합니다.

*reduce()작동 방식
[0, 1, 2, 3, 4].reduce(function(acc,cur,idx,arr)
   return acc + cur;
});


------다른 사이트 설명------

* 배열.reduce((누적값, 현잿값, 인덱스, 배열&요소) => { return 결과 }, 초깃값);

acc = 누적값
cur = 현잿값 (el 라고도 쓰임)
i = 인덱스
arr = 요소 (사용하는 일이 드뭄, 생략가능)


*
const oneTwoThree = [1, 2, 3];

result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
}, 0);
// 0 1 0
// 1 2 1
// 3 3 2
result; // 6
//acc(누적값)이 초깃값인 0부터 시작해서 return하는대로 누적

*
const oneTwoThree = [1, 2, 3];

result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
});
// 1 2 1
// 3 3 2
result; // 6 
//초깃값을 적어주지 않으면 자동으로 초깃값이 0번째 인덱스의 값이 됩니다.
//초깃값을 제공하지 않았다면, acc는 배열의 첫번째 값과 같고 cur은 두번째와 같습니다.

*reduce는 덧셈 곱셈만을 위한 것이 아닙니다. map과 filter와 같은 함수형 메서드를 모두 reduce로 모두 구현할 수 있습니다.



*****초깃값을 배열로 만들고, 배열에 값들을 push하면 map과 같아집니다.
const oneTwoThree = [1, 2, 3];
result = oneTwoThree.reduce((acc, cur) => {
  acc.push(cur % 2 ? '홀수' : '짝수');
  return acc;
}, []);
result; // ['홀수', '짝수', '홀수']



***** 조건부로 push를 하면 filter와 같아집니다. 다음은 홀수만 필터링하는 코드입니다.
result = oneTwoThree.reduce((acc, cur) => {
  if (cur % 2) acc.push(cur);
  return acc;
}, []);
result; // [1, 3]



*****reduce를 이용한 경력 문제*****
reduce 메소드를 일한 경력(개월 수)을 합산한 값을 totalCareer 변수에 담아주세요.

const data = [ 
  { company: 'Naber', month: 3 },
	{ company: 'Amajohn', month: 12 },
	{ company: 'Coogle', month: 10 },
  { company: 'Ittel', month: 6 },
  { company: 'Sasung', month: 4 },
  { company: 'CaCao', month: 3 },
	{ company: 'Microhard', month: 17 },
];


const totalCareer = data.reduce((acc, el) => {
  return acc + el.month;
}, 0);
//경력을 누적으로 계산해야 되니깐, 초기값은 0으로 두고 매번 실행하는 콜백함수는 첫 번째 파라미터에 각 요소의 month 프로퍼티 값을 더해서 리턴

console.log(`상원이의 경력은 총 ${totalCareer}개월입니다.`);

실행결과-> 상원이의 경력은 총 55개월입니다.
// 첫 번째 반복 때는 콜백 함수의 첫 번째 파라미터(acc)에 초기값 0이 전달되면서 0 + 3 이 리턴되고, 두 번째 반복 때는 이전 콜백 함수가 리턴한 3 이 첫 번째 파라미터(acc)에 전달되니깐, 3 + 12 가 리턴되겠죠? 최종적으로는 모든 요소들의 month 프로퍼티를 더한 값이 리턴되니깐 totalCareer 변수에는 55 가 할당



@@@@@ sort @@@@@ 배열을 정렬 메소드
// sort 메소드에 아무런 아규먼트도 전달하지 않을 때는 기본적으로 유니코드에 정의된 문자열 순서에 따라 정렬
const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4]


**sort 메소드에 콜백함수를 아규먼트로 작성해주면 숫자 정렬할 수 있음**
const numbers = [1, 10, 4, 21, 36000];

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]

*sort 메소드를 사용할 때 한 가지 주의해야될 부분은 메소드를 실행하는 원본 배열의 요소들을 정렬
한 번 정렬하고 나면 정렬하기 전의 순서로 다시 되돌릴 수 없음



@@@@@ reverse @@@@@ 배열의 순서를 뒤집어 주는 메소드
const letters = ['a', 'c', 'b'];
const numbers = [421, 721, 353];

letters.reverse();
numbers.reverse();

console.log(letters); // (3) ["b", "c", "a"]
console.log(numbers); // (3) [353, 721, 421]
*sort 메소드와 마찬가지로 원본 배열의 요소들을 뒤집어 버린다는 점은 꼭 주의


@@@@@ Map @@@@@ 객체와 비슷한 메소드, 객체: property name을 통해 이름이 있는 여러 값들을 묶을 때 활용

* 할당연산자를 통해 값을 추가하고 점 표기법이나 대괄호 표기법으로 접근하는 일반 객체와 다르게 
Map은 메소드를 통해서 값을 추가하거나 접근

new 키워드를 통해서 Map을 생성 후 map 안에 메소드를 통해 값들을 다룰 수 있음.

1. map.set(key, value): key를 이용해 value를 추가하는 메소드.
2. map.get(key): key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
3. map.has(key): key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.
4. map.delete(key): key에 해당하는 값을 삭제하는 메소드.
5. map.clear(): Map 안의 모든 요소를 제거하는 메소드.
6. map.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)

// set 메소드
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0


@@@@@ Set @@@@@ 배열과 비슷한 메소드, 배열: index를 통해 순서가 있는 여러 값들을 묶을 때 유용하게 활용
new 키워드로 Set을 만들 수 있고, 아래와 같은 메소드를 통해 Set 안의 여러 값들을 다룰 수 있습니다.

1. set.add(value): 값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)
2. set.has(value): Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드.
3. set.delete(value): 값을 제거하는 메소드. (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)
4. set.clear(): Set 안의 모든 요소를 제거하는 메소드.
5. set.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)

// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// has 메소드
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// clear 메소드
members.clear();
console.log(members.size); // 0

*특이한 점은 Set에는 개별 값에 바로 접근하는 방법이 없다는 점
*Set은 중복되는 값을 허용하지 않는 독특한 특징

*배열 내에서 중복을 제거한 값들의 묶음을 만들 때 Set을 활용
const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}


@@@@@ 모듈 module @@@@@ 

*모듈화: 관리하기 편하도록 목적에 따라 코드를 파일로 분리하는 것
*모듈: 모듈화한 파일

*모듈 스코프 (Module Scope) = 모듈파일은 이 파일 안에서만 사용할 수 있어야 함 (독립적인 스코프)
모듈 파일 안에서 선언한 변수는 외부에서 자유롭게 접근할 수 없도록 막아야 함.
index.html 파일의 script 태그에 type 속성을 module으로 지정 해줘야 함.
 <script type="module" src="printer.js"></script>
 <script type="module" src="index.js"></script>

 모듈은 브라우저에서 바로 실행이 되지 않고, 서버로 연동 시켜야하는데, vs에 있는 확장 기능으로 오류 해결이 가능함.
 vs 프로그램의 extensions(왼쪽 탭) --> live server 검색 후 설치 --> go live 클릭 (서버를 통해 실행된 html이 자동으로 열림)

 * export =내보내다. 다른 모듈에 값이나 함수가 적용되도록 내보내기
 //선언문 앞에 export을 붙여주면 다른 파일로 내보낼 수 있음.
 // 배열 내보내기
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 상수 내보내기
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// 함수 내보내기
export function sayHi(user) {
    alert('Hello, ${user}');
  }
  
// 클래스 내보내기
export class User {
  constructor(name) {
    this.name = name;
  }
}





*import = 가져오다. exort로 내보낸 모듈은 import 지시자를 활용해 가져올 수 있음.
//import 와 from 을 사용하여 객체 형태로 가져옴.
import { months, year, sayHi,User } from './printer.js';

*사실상 내보내고 가져오기 때문에 index.html 파일에서는 진입점 역할을 하는 js파일 하나만 설정. 





*모듈파일에서 import 이름 바꾸기 as 키워드 = 모듈파일에서 이미 사용하고 있는 이름을 상황에 따라서 사용 하고 싶을때 변경
//가져온 이름을 왼쪽 기준으로 as 키워드 작성 후 오른쪽에 변경할 이름
import {title as printerTitle, print} from './printer.js';

//as를 활용해 exprt에서도 이름을 바꿔 내보낼 수도 있습니다.
export {title as printerTitle, print};



*한꺼번에 다루기
1. Named Export
//만약 내보내는 값이 많다면 export{값, 값}로 선택할 수 있다.
import {title as printerTitle, print} from './printer.js';
->
import {print} from './printer.js'; // 값만 작성


2. 와일드카드 문자 ( Wildcard Character ) '*' // 모든 값을 가져오기때문에 권장하지 않음
//만약 들여오는 값이 많다면 *로 모두 선택할 수 있다.
import * as printerJS from './printer.js';  //printer.js 모듈 파일에서 모든 값을 객체형식으로 들여온다.
//중갈호 부분을 모두 삭제하고, *를 쓴다음에 as 키워드를 이용해서 새로 이름을 붙여주면, printer 모든 값이 printerJS로 전달. 
print(printerJS.name); //// 객체를 호출하는 방식으로 접근할 수 있다.



* export 에서도 한꺼번에 내보낼 방법 / //선언문마다 매번 export 키워드를 붙여주지 않아도 됨. 마지막 묶은 곳만 작성

const title = 'CodeitPrinter';

function print(value) {
    console.log(value);
}
// 중괄호를 사용하여 객체로 묶어서 내보낼 수 있다.
export default { title, print };


* default export = 하나의 대상만 내보는 방식, 변수나 함수 이름으로 export 뿐만 아니라 값 하나로만으로도 내보낼 수 있음
-파일 안에서 딱 한번만 사용할 수 있음.
//Codeit 이라는 값을 내보냄. export 오른쪽에 default 작성
export default 'Codeit'

//import 에서는 default 값만 사용할 수 없고, 반듯이 as 키워드를 사용해서 이름을 붙여줘야함.
import {
 default as codeit,
 tilte as membersTitle,
 data as memberData
} from './members.js';

//default는 import 할때 특별한 문법을 사용할 수도 있음.
import codeit, {   //default의 이름을 중괄호 앞으로 빼줌
  tilte as membersTitle,
  data as memberData
 } from './members.js';

 *export default는 named export, 와일드카드 문자와 비슷하게 값들을 하나로 묶어 객체로 공유할 때도 사용할 수 있다.

* Named export = 변수나 함수 이름으로 여러 대상을 내보내는 방식

* default 키워드를 함께 활용하면, 축약형 문법으로 import를 할 수 있어서, 일반적으로 모듈 파일에서 export 대상이 하나라면, default export를 하는 것이 조금 더 간결한 코드를 구성하는 데 도움
export default addMenu; // './add.js'에서 내보냄
export default deleteMenu; // './delete.js'에서 내보냄
export default rollMenu; //'./roll.js'에서 내보냄
->
import addMenu from './add.js';
import deleteMenu from './delete.js';
import rollMenu from './roll.js';

//default export된 대상을 import할 때 축약 비교하기
import { defult as modules } from './modules.js';
import modules from './modules.js'; //만들어준 이름으로만 사용하여 가져올 수 있음


===모듈 한번 더 정리===

* export와 import 문법 정리
// printer.js
export const title = 'CodeitPrinter';

export function print(value) {
  console.log(value);
};

// index.js
import { title, print } from './printer.js'; //객체형태

print(title); //객체를 출력할 때
->CodeitPrinter


* 한꺼번에 import 하기
import할 때 와일드카드 문자(*)와 as를 활용하면 모듈 파일에서 export하는 모든 대상을 하나의 객체로 불러올 수 있습니다.

// printer.js
export const title = 'CodeitPrinter';

export function print(value) {
  console.log(value);
};

// index.js
import * as printerJS from './printer.js';

console.log(printerJS.title); // CodeitPrinter
console.log(printerJS.print); // ƒ print(value) { console.log(value); }

*한꺼번에 export 하기
변수나 함수 앞에 매번 export 키워드를 붙일 수도 있지만, 선언된 변수나 함수를 하나의 객체로 모아 한꺼번에 내보낼 수도 있습니다.
이때 as 키워드를 활용하면 이름을 변경해서 export할 수도 있습니다.
const title = 'CodeitPrinter';

function print(value) {
  console.log(value);
}

function printArr(arr) {
  arr.forEach((el, i) => {
    console.log(`${i + 1}. ${el}`);
  });
}

export { title as printerTitle, print, printArr }; 


*rototype이나 class, closure나 Execution Context와 같이 조금 더 복잡하거나 추상적인 영역의 개념은
따로 검색하여 공부하기(코드잇 강의중에 내용이 없음) 



@@@@@ 객체 지향 프로그래밍이란? @@@@@

*객체 : 객체의 상태를 나타내는 '변수' / 객체의 행동을 나타내는 '함수'
*객체안에 있는 변수들을 '프로퍼티'(콜론 뒤에 값) 함수들은 '메소드'
*객체 지향 프로그래밍: 프로퍼티와 메소드로 이루어진 각 객체들의 상호 작용을 중심으로 코드를 작성하는 것.

*Object Literal '객체를 나타내는 문자열'
중괄호를 쓰고 그안에 프로퍼티와 메소드를 나열하는 것은 자바스크립트에서 정식 명칭으로 Object Literal라고함.

*** 1. Object literal과 Factory function 사용하기 ***
function createUser(email, birthdate) {
  const user = {
    email,
    birthdate,
    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    },
  };
  return user;
}

const user1 = createUser('chris123@google.com', '19920321');
const user2 = createUser('jerry99@google.com', '19950719');
const user3 = createUser('alice@google.com', '19931224');
//객체를 생성하는 Factory function을 만들고, 그 안에서 Object literal로 객체를 생성하여 리턴하는 방법입니다.



*** 2. Constructor function 사용하기 ***
fonction User(email, birthdate) {
  this.email = email;
  this.brithdate = birthdate;
  this.buy = function (item) {
    console.localStorage(`&{this.email} buys ${item.name}`);
  };
}

const user1 = new User('chris123@google.com', '1992-03-21');
const user2 = new User('jerry99@google.com', '1995-07-19');
const user3 = new User('alice@google.com', '1993-12-24');
//객체를 생성하는 용도로 사용하는 Constructor function을 정의하고,그 안에서 this 키워드를 사용하여 생성될 객체의 프로퍼티와 메소드를 설정하는 방법입니다.
//Constructor function으로 객체를 생성하려면 그 앞에 new를 붙여서 실행해야 한다는 사실, 반드시 기억!!!



*** 3. class 키워드 사용하기 ***
class User {
  contructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }
  buy(item) {
    console.localStorage(`&{this.email} buys ${item.name}`);
  }
}

const user1 = new User('chris123@google.com', '1992-03-21');
const user2 = new User('jerry99@google.com', '1995-07-19');
const user3 = new User('alice@google.com', '1993-12-24');
//class 키워드를 사용해서 객체의 틀을 정의하고, 마찬가지로 그 앞에 new를 붙여서 객체를 생성하는 방법입니다. class를 사용할 때는 보통 프로퍼티의 경우 constructor 안에 정의하고, 메소드의 경우 constructor 밖에 정의합니다.


*!! 객체 지향 프로그래밍이 가능한 언어들은 크게 2가지 종류로 나눌 수 있는데요.
첫 번째는 클래스 기반의 객체 지향 언어, 두 번째는 프로토타입 기반의 객체 지향 언어입니다.
대표적인, 클래스 기반의 객체 지향 언어로는 Java가 있고, 대표적인 프로토타입 기반의 객체 지향 언어로는 지금 우리가 배우고 있는 JavaScript가 있는데
코드잇에서는 클래스타입으로 진도를 나가고 나중에 심화과정에서는 프로토타입(Prototype) 따로 공부해야함!!!





@@@ 기타 궁금증 @@@=======================================================
* 객체 리터럴에 의한 객체 생성
객체 리터럴은 중괄호({...}) 내에 0개 이상의 프로퍼티를 정의함
자바스크립트 엔진은 객체 리터럴을 해석해 객체를 생성

var person {
name: 'Lee',
sayHello: function() {
console.log(`Hello! My name is ${this.name}.`);
}

};

console.log(typeof person); // object
console.log(person); // {name: "Lee", sayHello: f}

중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체가 생성
var empty = {}; // 빈 객체
console.log(typeof empty); // object


*프로퍼티 접근
1.점 표기법 = console.log(person.firstName);		
2.대괄호 표기법 = console.log(person['firstName']); ////대괄호 표기법을 사용할 경우 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다.

=======================================================================


*객체 지향 프로그래밍 핵심 개념 4가지 기둥
1.추상화
2.캡슐화
3.상속
4.다형성

@@@@@ 추상화 @@@@@
*어떤 구체적인 존재를 원하는 방향으로 간략화해서 나타내는 것 
*클래스, 프로퍼티, 메소드 이름을 잘 이해할 수 있도록 정하는게 중요, 이것만으로 부족하다고 느껴질 때, 주석을 달거나 별도의 설명 문서를 남겨야 함.

@@@@@ 캡슐화 @@@@@
*객체의 특정 프로퍼티에 직접 접근하지 못하도록 막는 것