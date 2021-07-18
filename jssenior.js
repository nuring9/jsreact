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

**[코드잇] 토픽 데이터 처리하기 문제**
fetch('https://learn.codeit.kr/api/topics')
  .then((response) => response.text())
  .then((result) => {
    const topics = JSON.parse(result); // JSON이라는 객체의 parse 메소드를 사용하여 변환 Deserialization, 우리말로는 역직렬화
    const beginnerLevelTopics = topics.filter((topic) => topic.difficulty === '초급'); //topics 배열의 filter 메소드를 사용해서 각 요소의 difficulty 프로퍼티(토픽의 난이도) 값이 '초급'에 해당하는 것들만 추출해서 만든 새로운 배열을 리턴
    console.log(beginnerLevelTopics); //초급 토픽들로 이루어진 배열을 출력하
  });




  @메소드의 의미
  요청(Request)        /         메소드(Method)
  기존 데이터를 조회하는 리퀘스트 - GET
  새 데이터를 추가하는 리퀘스트   - POST
  기존 데이터를 수정하는 리퀘스트 - PUT
  기존 데이터를 삭제하는 리퀘스트 - DELETE

  Request
  Head / Request에 대한 부가정보 = 메소드(method)
  Body / 실제 데이터를 담는 부분
  
  POST, PUT = request Head,Body
  GET, DELETE = request Head




  *****학습용 URL : https://learn.codeit.kr/api/members****
(1) 전체 직원 정보 조회 - GET 
(2) 특정 직원 정보 조회 - GET 
(3) 새 직원 정보 추가 - POST
(4) 기존 직원 정보 수정 - PUT
(5) 기존 직원 정보 삭제 - DELETE

위의 5가지 작업 중
(2) 특정 직원 정보 조회 - GET
(4) 기존 직원 정보 수정 - PUT
(5) 기존 직원 정보 삭제 - DELETE
이 작업들을 수행할 때는 작업의 대상이 되는 직원 정보를 특정할 수 있도록 URL 끝에 아래와 같은 고유 식별자를 붙여줘야 합니다. (직원의 id 값입니다.)
https://learn.codeit.kr/api/members/3  //3번 직원 정보에 대한 작업을 수행하겠다는 뜻.

나머지 작업인
(1) 전체 직원 정보 조회 - GET 
(3) 새 직원 정보 추가 - POST
특정 직원 정보를 대상으로 수행하는 작업이 아니라 아니라 전체 직원 정보에 대해서 수행하는 작업이기 때문에
https://learn.codeit.kr/api/members  ///members로 끝나는 원래의 URL을 그대로 사용



(1) 전체 직원 정보 조회 - GET 
fetch('https://learn.codeit.kr/api/members') 
 .then((response) => response.text())
 .then((result) => {console.log(result); });



(2) 특정 직원 정보 조회 - GET 
 fetch('https://learn.codeit.kr/api/members/3')   //url의 끝에 3(특정직원의 id값)
  .then((response) => response.text())
  .then((result) => {console.log(result); });
 


(3) 새 직원 정보 추가  - POST
 const newMember = {
   name: 'Jerry',
   email: 'jerry@codeitmall.kr',
   department: 'engineering',
 };

 fetch('https://learn.codeit.kr/api/members', {
   method: 'POST',                      //추가 POST
   body: JSON.stringify(newMember),     //자바스크립트객체를 string타입의 JSON데이터로 변환
 })
   .then((response) => response.text())
   .then((result) => { console.log(result); });



(4) 기존 직원 정보 수정 - PUT
const member = {
  name: 'Alice',
  email: 'alice@codeitmall.kr',
  department: 'marketing',   //수정할 부분만 수정
};

fetch('https://learn.codeit.kr/api/members/2', {   //수정할 ID값 입력
  method: 'PUT',                      //수정 PUT
  body: JSON.stringify(member),    //자바스크립트 객체의 데이터를 바디에 담아서 외부로 전송하려면, 반드시 자바스크립트객체를 string타입의 JSON데이터로 변환
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });



(5) 기존 직원 정보 삭제 - DELETE  
fetch('https://learn.codeit.kr/api/members/2', {  //ID 2번 삭제
  method: 'DELETE',      //삭제
}) 
  .then((response) => response.text())
  .then((result) => {console.log(result); });



1.자바스크립트 객체를 string 타입의 JSON 데이터로 변환하는 작업(리퀘스트 보낼 때) Serialization(직렬화)
2.string 타입의 JSON 데이터를 자바스크립트 객체로 변환하는 작업(리스폰스를 받았을 때) Deserialization(역직렬화)


@@@@@ 모범적인 Web API, REST API @@@@@
1. Web API
사용자가 직접 서비스 화면을 보는 웹 페이지나 앱 등을 만드는 프론트엔드(Front-end) 개발자, 웹 브라우저나 앱이 보내는 리퀘스트를 받아서 적절한 처리를 한 후 리스폰스를 주는 서버의 프로그램을 만드는 백엔드(Back-end) 개발자
API = API란 Application Programming Interface의 약자로, 원래는 '개발할 때 사용할 수 있도록 특정 라이브러리나 플랫폼 등이 제공하는 데이터나 함수 등'을 의미
Web API = 웹 개발에서는 어느 URL로 어떤 리퀘스트를 보냈을 때, 무슨 처리가 수행되고 어떤 리스폰스가 오는지에 관해 미리 정해진 규격

2. REST API 이야기
REST API = 오늘날 많은 웹 개발자들이 Web API 설계를 할 때, 준수하기 위해 노력하는 일종의 가이드라인
REST architecture = 웹이 갖추어야 할 이상적인 아키텍처(구조)로 REST architecture라는 개념을 제시
REST = Representational State Transfer(표현적인 상태 이전)의 줄임말로, 해석하면 '표현적인, 상태 이전'이라는 뜻

*** REST architecture가 되기 위한 조건 6가지
1.Client-Server
2.Stateless
3.Cache
4.Uniform Interface
5.Layered System
6.Code on Demand

* 조건 4. Uniform Interface의 하위 조건인 (4-1) identificaton of resources 에 관해서 특히 개발자들이 강조하는 규칙, 2가지
1. URL은 리소스를 나타내기 위해서만 사용하고, 리소스에 대한 처리는 메소드로 표현해야 합니다.
(01) 'https://learn.codeit.kr/api/members' URL로   
(02) 리퀘스트의 헤드에 POST 메소드를 설정하고,
(03) 리퀘스트의 바디에 새 직원 정보를 넣어서 보내면 된다.

2. 도큐먼트는 단수 명사로, 컬렉션은 복수 명사로 표시합니다.
https://www.soccer.com/europe/teams/manchester-united/players/pogba
URL의 path 부분을 보면 '유럽의', '축구팀들 중에서', '맨체스터 유나이티드 팀의', '선수들 중에서', '포그바'라는 선수의 정보를 의미하는 리소스
도큐먼트는 하나의 '파일', 컬렉션은 여러 '파일'들을 담을 수 있는 하나의 '디렉토리'에 해당하는 개념
europe, manchester-united, pogba가 '도큐먼트'에 해당하고, teams, players가 '컬렉션'에 해당