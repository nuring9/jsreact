@@@@@ Web 웹이란? @@@@@
World Wide Web: 전세계적인 연결망
* 웹브라우저가 서버로 보내는 요청은 리퀘스트, 서버가 다시 보내지는 응답은 리스폰스 , 요청 = request / 응답 = response
나중에 어떤 조건이 만족되었을때 실행되는 함수를 콜백 callback



@@@@@ fetch 함수 @@@@@
fetch 이용해서 request를 보내고 그 response를 받아서 처리할 수 있음.

fetch('https://www.google.com')
 .then((response) => response.text()) //resopnse 를 다른이름으로 지정 가능
 .then((result) => {console.log(result); }); //result 를 다른이름으로 지정 가능
 
1. fetch 함수는 어떤 객체를 리턴하는데(Promise 객체)
2. 이 객체의 then 메소드로, '리스폰스가 왔을 때 실행할 콜백'을 등록할 수 있다.
3. 이렇게 등록된 콜백들은 then 메소드로 등록한 순서대로 실행되고, 이때 이전 콜백의 리턴값을 이후 콜백이 넘겨받아서 사용할 수 있다.

 arrow function 사용가능.
 then 메소드 = 콜백을 등록해주는 메소드. fetch 함수가 리턴하는 promise 객체의 메소드 임. 
 이전 콜백의 리턴값을 다음 콜백이 넘겨 받을 수 있음. (response값을 result로)

 
 ======================================  arrow function 복습
 arrow function 기존의 함수 방식을 간결하게 만드는 문법.
 이름이 없는 익명 함수이기때문에 이름을 가진 변수에 할당하거나 다른함수의 아규먼트로 함수로 선언될때 주로 사용
function을 지우고 소괄호 오른편에서 등호와 부등호를 사용해서 화살표 기호를 사용

const getTwice = function(number) { //이름을 가진 변수에 할당
  return number * 2;
};

const getTwice = (number) => { //function 키워드를 삭제 후 소괄호 오른편에 화살표
  return number * 2;
};

myBtn.addEvetnListener('click', function() { //다른함수의 아규먼트로 함수로 선언
  console.log('button is clicked!');
});

myBtn.addEvetnListener('click', () => { //function 키워드 삭제 후 소괄호 오른편에 화살표
  console.log('button is clicked!');
});
======================================



@@@@@ URL 이란? @@@@@

https://www.codeitshopping.com/men/shirt?color=blue&size=m
*url(uiform resource locator) 웹에 존재하는 특정 데이터를 나타내는 문자열


*리소스(Resource)웹에서 우리가 찾고자 하는 데이터를 전문 용어로는 '리소스(Resource)'라고 표현


www.codeitshopping.com  = 도메인 네임(Domain Name) 이라고 함
*호스트(Host) 전 세게 서버 중 하나의 서버를 특정


/men/shirt
*경로(Path) 서버에 있는 데이터 중 원하는 데이터를 특정
전적으로 해당서비스를 설계하고 만든 개발자들이 정하는 부분


color=blue&size=m (물음표 뒤에 있음)
*쿼리(Query)
데이터에 관한 세부적인 요구사항

1.보통 설정하는 요구사항
특정 필터링 조건(남성용 셔츠 중에서도 '흰색' 계통의 것들만)
특정 범위(50번째부터 100번째까지)
특정 키워드(특정 키워드가 이름에 포함된 상품)
특정 정렬 기준('인기순', '가격순', '댓글 많은 순' 등)


<a href="/codeitCommunity/threads/731" >...</a> 
*같은 서버 안에 존재하는 데이터의 경우 이렇게 path 이후의 부분만 표시해서 나타낼 수도 있다.



@@@@@ HTTP란? @@@@@
* https = 스킴(Scheme): 웹브라우저와 서버가 통신할 때 사용하는 프로토콜의 이름 
*프로토콜(Protocol) 통신을 하는 두 주체가 지켜야 하는 통신 규약
*http = HyperText Transfer Protocol 하이퍼텍스트를 전송하는 프로토콜
*HyperText = 다른 텍스트에 대한 참조를 갖고 있는 텍스트
*s = secure 보안(안전한) / https = 안전한 http라고 이해 



@@@@@ JSON 이란? @@@@@ JavaScript Object Notation
어떤정보를 교환할때 사용하기 위해서 만들어진 데이터 포멧으로, 자바스크립트 언어의 문법을 빌려서 만들어진 데이터포멧

*하나의 객체로 중괄호를 사용하고 프로퍼티이름과 값을 적는 방식이 객체와 동일 
그 객체를 대괄호를 둘러 싸서 배열에 담았음. = 자바스크립트 문법와 동일.

**자바스크립트 객체 표기법과 JSON 문법의 차이**

1. JSON에는 프로퍼티의 이름과 값을 표현하는 방식에 제한
(1). JSON에서는 각 프로퍼티의 이름을 반드시 큰따옴표(")로 감싸줘야 합니다.
{
  "name":"Michael Kim",
  "height":180,
  "weight":70,
  "hobbies":["Basketball", "Listening to music"]
}

(2). JSON에서는 값이 문자열인 경우 큰따옴표(")를 사용해야 합니다.
{
  "name":"Michael Kim",
  "height":180,
  "weight":70,
  "hobbies":["Basketball", "Listening to music"]
}

2. JSON에서는 표현할 수 없는 값들이 있다.
자바스크립트에서 프로퍼티의 값으로 사용할 수 있는 undefined, NaN, Infinity 등을 사용할 수 없다.


3. JSON에는 주석을 추가할 수 없다.
JSON은 코드가 아니라 데이터 포맷이기 때문에 그 안에 주석을 포함시킬 수 없다.




@@@@@ JSON 데이터를 객체로 변환하기 @@@@@

*JSON 의 typeof 는 string
string타입의 JSON은 그대로 자바스크립트로 변환할 수 있다
JOSN을 자바스크립트 객체로 변환해야 해당 객체 안의 데이터를 간편하게 사용하고 처리할 수 있음.

fetch('https://jsonplaceholder.typicode.com/users')
 .then((response) => response.text()) 
 .then((result) => { const users = JSON.parse(result) });  //객체이름과 데이터포멧의 이름이 똑같으니 헷깔리지 않도록, (JSON 이라는 객체임)

JSON.parse
*JSON객체의 parse메소드를 사용하면 스트링 타입의 JSON 데이터를 자바스크립트로 변환할 수 있음.

