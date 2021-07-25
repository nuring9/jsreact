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
    console.log(beginnerLevelTopics); //초급 토픽들로 이루어진 배열을 출력
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


================= text 메소드 말고 json 메소드도 있어요. =================
fetch('https://jsonplaceholder.typicode.com/users')
 .then((response) => response.text())    // 리스폰스의 내용을 추출하기 위해 response.text()를 호출
 .then((result) => { const users = JSON.parseFloat(result); });   //리턴값인 JSON 데이터를 Deserialize해서 생성한 객체를 users에 할당


 fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())  // text 메소드 대신 json이라는 메소드를 사용
  .then((result) => { const users = result; });  //콜백 안에 있던 JSON.parse 코드를 삭제
  response 객체의 text 메소드 대신 json이라는 메소드를 호출하면, 리스폰스의 내용이 JSON 데이터에 해당하는 경우, 바로 Deserialization까지 수행
  이렇게 json 메소드를 사용하면, 두 번째 콜백의 result 파라미터로는 Deserialization 결과로 생성된 자바스크립트 객체가 넘어가게 됨.
  참고로, 리스폰스의 내용이 JSON 데이터에 해당하지 않을 경우에는 에러가 발생

  리스폰스의 내용이 JSON 데이터로 미리 약속된 경우에는 response 객체의 text 메소드 대신 json 메소드를 사용해서 Deserialization까지 한 번에 수행하기도 합니다. 앞으로 코드에서 text 메소드 대신 json 메소드가 등장
  =========================================================================

@@@@@ Response(응답)의 Status Code (상태코드) @@@@@
Head: Response에 대한 부가 정보 / 상태코드 Status
Body: 실제 데이터를 담는 부분 / 주로 JOSN 데이터

* Status Code (상태 코드)
200: 요청 내용을 서버가 정상 처리함
X404 : 해당 url에 해당하는 데이터를 찾을 수 없음

1. 각각의 상태 코드에는 대응되는 상태 메세지가 있음.
모든 상태 코드(Status Code)는 각각 그에 대응되는 상태 메시지(Status Message)를 갖고 있습니다.
예를 들어, 우리가 배운 200번은 OK, 404번은 Not Found라는 상태 메시지를 갖고 있습니다.

2. 상태 코드는 100번대~500번대까지 있다.
각 상태 코드는 상태 코드 옆에 바로 상태 메시지를 쓰는 형식(예: 200 OK)으로 표시함

(1) 100번대 : 서버가 클라이언트에게 정보성 응답(Informational response)을 줄 때 사용되는 상태 코드
- 100 Continue : 클라이언트가 서버에서 계쏙 리퀫트를 보내도 괜찮은지 물어봤을 때, 계속 리퀘스트를 보내도 괜챃다고 알려주는 상태 코드.
예를 들어, 클라이언트가 용량이 좀 큰 파일을 리퀘스트에 바디에 담아 업로드하려고 할 때 서버에게 미리 괜찮은지를 물어보는 경우가 있따고 할 때, 서버가 이 100번 상태 코드의 리폰스를 주면 그제서야 본격적인 파일 업로드를 시작함.
- 101 Switching Protocols : 클라이언트가 프로토콜을 바꾸자는 리퀘스트를 보냈을 때, 서버가 '그래요, 그 프로토콜로 전환하겠습니다'라는 뜻을 나타낼 때 쓰이는 상태 코드

(2) 200번대 : 클라이언트의 리퀘스트가 성공 처리되었음을 의미하는 상태 코드.
- 200 OK : 리퀘스트가 성공적으로 처리되었음을 포괄적으로 의미하는 상태코드. 이때 성공의 의미는 리퀘스트에 있던 메소드의 종류에 따라 다름.
GET 리퀘스트의 경우 리소스가 잘 조회되었다는 뜻이고, POST 리퀘스트의 경우 새 리소스가 잘 생성되었다, PUT 리퀘스트의 경우 기존 리소스가 잘 수정 되었다, DELETE 리퀘스트의 경우 기존 리소스가 잘 삭제되었다는 뜻.
- 201 Created : 리퀘스트의 내용대로 리소스가 잘 생성되었다는 뜻. POST 리퀘스트가 성공한 경우에 200번 대신 201번이 올 수도 있음.
- 202 Accepted : 리퀘스트의 내용이 일단 잘 접수되었다는 뜻. 즉, 당장 리퀘스트의 내용이 처리된 것은 아니지만 언젠가 처리할 것이라는 뜻.
리퀘스트를 어느 정도 모아서 한번에 실행하는 서버인 경우 등에 이런 응답을 줄 수도 있음.

(3) 300번대 : 클라이언트 리퀘스트가 아직 처리되지 않았고, 리퀘스트 처리를 원하는 클라이언트 측의 추가적인 작업이 필요함을 의미하는 상태코드.
- 301 Moved Permanently: 리소스의 위치가 바뀌었음을 나타냄. 보통 이런 상태 코드가 있는 리스폰스의 헤드에는 Location이라는 헤더도 일반적으로 함께 포함되어 있다.
그 헤더의 값으로 리소스에 저급할 수 있는 새 URL이 담겨 있는데, 대부분의 브라우저는 만약 GET 리퀘스트를 보냈는데 이런 상태 코드가 담긴 리스폰스를 받게 되면,
헤드에 포함된 Location 헤더의 값을 읽고, 자동으로 그 새 URL에 다시 리퀘스트를 보내는 동작(리다이렉션, redirection)을 수행 함.
- 302 Found : 리소스의 위치가 일시적으로 바뀌었음을 나타냄. 지금 당장은 아니지만 나중에는 현재 요청한 URL이 정상적으로 인식될 것이라는 뜻.
이 상태 코드의 경우에도 보통 그 리스폰스의 헤드에 Location 헤더가 있고, 여기에 해당 리소스의 임시 URL 값이 있음. 대부분의 브라우저들은 임시 URL로 리다이렉션함.
- 304 Not Modified : 브라우저들은 보통 한번 리스폰스로 받았던 이미지 같은 리소스들을 그대로 내부에 저장하고 있다. 그리고 서버는 해당 리소스가 바뀌지 않았다면, 리스폰스에 그 리소스를 보내지 않고 304번 상태 코드만 헤드에 담아서 보냄으로써
'네트워크 비용'을 절약하고 브라우저가 저장된 리소스를 재활용하도록 하는데, 사실 이 상태 코드는 웹에서 '캐시(cache)'라는 주제에 대해서 공부해야 정확하게 이해할 수 있음.

(4) 400번대 : 리퀘스트를 보내는 클라이언트 쪽에 문제가 있음을 의미하는 상태 코드.
- 400 Bad Request : 말 그대로 리퀘스트에 문제가 있음을 나타냄. 리퀘스트 내부 내용의 문법에 오류가 존재하는 등의 이유로 발생.
- 401 Unauthorized : 아직 신원이 확인되지 않은(unauthenticated) 사용자로부터 온 리퀘스트를 처리할 수 없다는 뜻.
- 403 Forbidden : 사용자의 신원은 확인되었지만 해당 리소스에 대한 접근 권한이 없는 사용자라서 리퀘스트를 처리할 수 없다는 뜻.
- 404 Not Found : 해당 URL이 나타내는 리소스를 찾을 수 없다는 뜻. 보통 이런 상태 코드가 담긴 리스폰스는 그 바디에 관련 웹 페이지를 이루는 코드를 포함하고 있는 경우가 많다.
예를 들어, 'https://www.google.com/abc'와 같이 존재하지 않는 URL에 접속하려고 하면 이런 페이지가 보이는 것을 알 수 있습니다.
- 405 Method Not Allowed : 해당 리소스에 대해서 요구한 처리는 허용되지 않는다는 뜻. 만약 어떤 서버의 이미지 파일을 누구나 조회할 수는 있지만 아무나 삭제할 수 는 없다고 해봅시다. GET 리퀘스트는 허용되지만, DELETE 메소드는 허용되지 않는 상황.
만약 그 이미지에 대한 DELETE 리퀘스트를 보낸다면 이런 상태 코드를 보게 됨.
- 413 Payload Too Lage : 현재 리퀘스트의 바디에 들어있는 데이터의 용량이 지나치게 커서 서버가 거부한다는 뜻.
- 429 Too Many Requests : 일정 시간 동안 클라이언트가 지나치게 많은 리퀘스트를 보냈다는 뜻. 서버는 수많은 클라이언트들의 리퀘스트를 정상적으로 처리해야 하기 때문에 특정 클라이언트에게만 특혜를 줄 수 없음.
따라서 지나치게 리퀘스트를 많이 보낸ㄴ 클라이언트에게는 이런 상태 코드를 담은 리스폰스를 보낼 수 있음.

(5) 500번대 : 서버 쪽의 문제로 인해 리퀘스트를 정상적으로 처리할 수 없음을 의미하는 상태 코드.
- 500 Internal Server Error : 현재 알 수 없는 서버 내의 에러로 인해 리퀘스트를 처리할 수 없다는 뜻.
- 503 Service Unavailable : 현재 서버 점검 중이거나, 트래픽 폭주 등으로 인해 서비스를 제공할 수 없다는 뜻.


*리스폰스의 상태 코드(status code)를 출력하는 코드
fetch('https://www.google.com')
  .then((response) => {
    console.log(response.status);   // 상태 코드 200번이 출력
  });   

fetch('https://www.codeit.kr/abc')
  .then((response) => {
    console.log(response.status);  // 상태 코드 404번이 출력
  });


  @@@@@ Content-Type 헤더 @@@@@

  1. Content-Type 헤더 : 현재 리퀘스트 또는 리스폰스의 바디에 들어 있는 데이터가 어떤 타입인지를 나타냄.
실무 개발에서는 리퀘스트 또는 리스폰스의 바디에 다양한 종류의 데이터들을 넣게 될 텐데,텍스트부터 시작해서 이미지, 영상까지 정말 많은 것들이 들어갈 수 있음.

* Content-Type 헤더의 값은 '주 타입(main type)/서브 타입(sub type)'의 형식으로 나타냄.

(1) 주 타입이 text인 경우(텍스트) *
일반 텍스트 : text/plain
CSS 코드 : text/css
HTML 코드 : text/html
JavaScript 코드 : text/javascript ...

(2) 주 타입이 image인 경우(이미지)
image/bmp : bmp 이미지
image/gif : gif 이미지
image/png : png 이미지 ...

(3) 주 타입이 audio인 경우(오디오)
audio/mp4 : mp4 오디오
audio/ogg : ogg 오디오 ...
주 타입이 video인 경우(비디오

(4) 주 타입이 video인 경우(비디오)
video/mp4 : mp4 비디오
video/H264 : H264 비디오 ...

(5) 주 타입이 application인 경우
application/json : JSON 데이터
application/octet-stream : 확인되지 않은 바이너리 파일 ...

* Content-Type 헤더는 왜 필요한 걸까요? Content-Type 헤더가 존재하면, 바디의 데이터를 직접 확인해서 그 타입을 추론하지 않아도 되기 때문.
* Content-Type을 써주지 않으면 어떻게 될까요? 서버에서 바디의 데이터가 어떤 타입인지를 확인하는 절차가 추가적으로 필요함.


2. Content-Type 설정해보기 (Content-Type 헤더를 추가하는 법)
const newMember = {
  name: 'Jerry',
  email: 'jerry@codeit.kr',
  department: 'engineering',
};

fetch('http://learn.codeit.kr/api/members', {
  method: 'POST'
  headers: {   //추가된 부분
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newMember),
})
 .then((reponse) => reponse.text())
 .then((result) => {console.log(result); });




@@@@@ 알아두면 좋은 Content-type들(심화) @@@@@

1.JSON 말고 XML (XML(Extensible Markup Language)이라고 하는 데이터 포맷도 있다.)
*XML : 태그를 사용해서 데이터를 나타내는 것 

{
  "name":"Michael Kim",
  "height":180,
  "weight":70,
  "hobbies":[
     "Basketball",
     "Listening to music"
  ]
}  // JSON 데이터

<?xml version="1.0" encoding="URF-8" ?>
<person>
  <name>Michael Kim</name>
  <height>180</height>
  <weight>70</weight>
  <bobiies>
    <value>Basketball</value>
    <balue>Listening to music</value>
  </hobbies>
</person>  // XML 데이터

"name": "Michael Kim" 를 <name>Michael Kim</name> 이런 식으로 시작태그와 끝태그, 그리고 사이의 값으로 나타냄.

*XML은 같은 양의 데이터를 표현하더라도 JSON에 비해 더 많은 용량을 차지하고, JSON에 비해 가독성이 떨어지며, 배우기가 어렵다는 문제 등으로 인해, 오늘날 XML의 입지는 다소 좁아진 것이 사실

* XML을 나타내는 Content-Type 헤더의 값은 'application/xml'
'application/xml'뿐만 아니라 XML의 문법을 따르되 거기에 특수한 규칙을 더해 만든 데이터 타입들도 존재,  이름 끝에 +xml을 붙여서 사용 


2. form 태그에서 사용되는 타입들

(1) application/x-www-form-urlencoded 타입
form 태그는 회원가입 화면이나 게시물 업로드 화면 등을 만들 때 주로 활용되는 HTML 태그,
form 태그를 사용하면 자바스크립트 코드 없이 오로지 HTML만으로도 리퀘스트를 보내는 것이 가능.
(오늘날에는 form 태그를 사용하지 않고 자바스크립트 코드로 직접 사용자의 입력값을 취합해서 리퀘스트를 보내는 방법이 많이 사용되고 있지만 여전히 form 태그만으로 리퀘스트를 보내는 방식도 쓰이고는 있기 때문에 알아두는 게 좋다.)

{
  "id": 6,
  "name": "Jason",
  "age": 34,
  "department": "engineering"
} // JSON 데이터 


id=6&name=Jason&age=34&department=engineering  // pplication/x-www-form-urlencoded 타입
* 프로퍼티의 이름과 값을 "이름=값" 형식으로 나타내고 각각의 프로퍼티를 "&" 기호로 연결하는 방식으로 데이터를 표현 (URL의 query 부분에서 사용하는 방식과 똑같)


* 특수 문자들이 각자 자신의 원래 용도가 아닌 다른 용도로 사용되는 경우 Percent Encoding을 해줘야 함
:	     /	   ?	  #	    [	     ]	   @    !	     $	  &	   '	  ...	  ''(공백)
%3A	  %2F	  %3F	 %23  	%5B	  %5D	  %40  	%21  	%24	 %26	%27	  ...	  %20 또는 +

'https://codeitBooks.com/books?title=Tom&Jerry&publishedData=20210115'
'https://codeitBooks.com/books?title=Tom%26Jerry&publishedData=20210105' //으로 변경



*** URL에서
'https://www.google.com/코딩'
'https://www.google.com/%EC%BD%94%EB%94%A9'  // 코딩이라는 한글이 변환됨.

(1) 'URL 안에서 미리 정해진 용도를 가진 특수 문자를 다른 용도로 사용'하거나 
(2) '영어와 숫자'를 제외한 다른 나라 문자를 나타낼 때는
Percent encoding을 해주는 것이 정해진 규칙입니다.


(2) multipart/form-data 타입 (실무적으로 굉장히 중요한 타입)
multipart(여러 개의 파트)라는 단어에서도 유추할 수 있듯이 이 값은 여러 종류의 데이터를 하나로 합친 데이터를 의미하는 타입.


글의 제목과 내용을 적고, 이미지 파일이나 영상 파일을 첨부할때 '게시글 업로드' 버튼을 누르면 파일들의 내용도 리퀘스트에 함께 담겨서 가야할텐데, 바로 이럴 때 사용되는 것이 multipart/form-data입니다.
(1) form 태그만으로도 그리고,
(2) 자바스크립트 코드만으로도 리퀘스트의 바디에 담아 전송할 수 있습니다.

multipart/form-data 타입은 여러 데이터를 하나로 묶어서 리퀘스트의 바디에 담아보내려고 할 때 사용되는 아주 중요한 타입입니다. 실제 웹 서비스를 떠올려보면, 우리가 회원가입을 하든, 게시글을 업로드하든 다양한 데이터를 한번에 묶어서 보내는 경우가 많죠? 실제로 개발을 할 때도 자주 사용하게 되는 타입이니까 꼭 기억!!!





@@@@@ 그 밖에 알아야 할 내용들 @@@@@

1. Ajax (Asynchronous JavaScript And XML)
웹 브라우저가 현재 페이지를 그대로 유지한 채로 서버에 리퀘스트를 보내고 리스폰스를 받아서, 새로운 페이지를 로드하지 않고도 변화를 줄 수 있게 해주는 기술
(구글 맵(Google Map) 같은 웹 서비스를 생각해보면 이해하기 쉽다.)
사용자가 보고 있는 현재 페이지를 방해하지 않고 별도로 서버로 리퀘스트를 보내고, 리스폰스를 받아왔기 때문


const xhr = new XMLHttpRequest();  // XMLHttpRequest라고 하는 생성자 함수로 객체를 생성 (XMLHttpRequest라고 하는 객체를 통해 Ajax 통신)
xhr.open('GET', 'https://learn.codeit.kr/api/members');
xhr.onload = function () {
  console.log(xhr.response);
};
xhr.onerror = function () {
  alert('Error!');
};
xhr.send();

*** 예전엔 XMLHttpRequest를 이렇게 직접 사용할 일이 많았지만 요즘에는 굳이 그렇게 하지 않아도 됩니다.(2020년 1월 기준) ***
1. XMLHttpRequest 객체 이후에 등장한 함수, 바로 이때까지 우리가 배운 fetch 함수를 사용해서 Ajax 통신을 할 수 있기 때문
2. XMLHttpRequest을 기반으로 더 쓰기 편하게 만들어진 axios라는 패키지가 존재 (자바스크립트에서는 라이브러리보다는 '패키지'라는 단어)

즉, 개발 실무에서는 fetch 함수 또는 axios 패키지를 사용
-보통 axios 패키지에 좀더 다양한 기능들이 있어서 주로 axios를 쓰는 편이지만, 외부의 패키지를 설치하고 싶지 않은 경우에는 fetch 함수를 사용하기도 함.

<a href="https://learn.codeit.kr/api/main">메인 화면으로 가기</a> // 새 페이지를 로드하는 하는방식 (전통적인 방식)

// (위 예시를 단순화한 코드입니다)
function getLocationInfo(latitude, longitude) {
  fetch('https://map.google.com/location/info?lat=latitude&lng=longitude')
    .then((response) => response.text())
    .then((result) => {  /* 사용자 화면에 해당 위치 관련 정보 띄워주기 */ });
}  // Ajax 통신
(1) 언제 아예 새로운 페이지를 로드하고
(2) 언제 Ajax 통신을 해서 현재 페이지 내에서 부드러운 변화를 줄 건지를



2. GET, POST, PUT, DELETE 이외의 메소드들
(1) PATCH : 기존의 데이터를 수정할 때 사용하는 메소드
PUT은 기존 데이터를 아예 새로운 데이터로 덮어씀으로써 수정하려고 할 때 쓰는 메소드이고, PATCH는 새 데이터로 기존 데이터의 일부를 수정하려고 할 때
PUT은 덮어쓰기, PATCH는 일부 수정
{
  "id": 3,
  "name": "Michael",
  "age": 25
}
--------------------------
{
  "age": 30
}
--------------------------
{
  "id": 3,
  "name": "Michael",
  "age": 30
}
// PATCH 으로 일부 변경
PATCH의 경우에는 보통, 리퀘스트의 바디에 있는 내용을 기존 데이터의 각 속성과 대조 및 병합(merge-patch)하면서 데이터를 수정하기 때문에 때문에, 바디에 수정할 프로퍼티의 데이터만 넣어줘도 되는 것.WebKitCSSMatrix


(2) HEAD : GET 메소드와 동일
GET 리퀘스트를 보냈을 때 받았을 리스폰스에서 바디 부분은 제외하고, 딱 헤드 부분만 받는다는 점이 다름.
만약 파일의 용량이 너무 큰 경우에는 파일을 받지 않으려고 하는데, 이때 파일의 용량만 조사하기 위해서 HEAD 메소드가 담긴 리퀘스트를 보내볼 수 있다.
Content-length와 같이 컨텐츠 용량을 나타내는 헤더가 있어서 파일의 용량 정보는 알게 될 수도 있는데
*실제 데이터가 아니라 데이터에 관한 정보만 얻으려고 하는 상황 등에 HEAD 메소드가 활용.


3. 웹 통신 말고 다른 통신
HTTP, HTTPS 이외에도, FTP, SSH, TCP, UDP, IP, Ethernet 등 정말 다양한 종류의 프로토콜들이 있다.
이런 프로토콜들은 각각 네트워크 통신의 특정 계층에 속한다는 점.

1. HTTP(HyperText Transmission Protocol)
2. TCP(Transmission Control Protocol)
3. IP(Internet Protocol)
4. Ethernet
의 순서대로 프로토콜 기반으로 동작하고 있음. 위로 갈수록 고수준 프로토콜, 아래로 갈수록 저수준 프로토콜.
('웹 개발자'라고 하면 당장은 HTTP 프로토콜 상에서 이루어지는 일만 공부한다고 해도 큰 어려움이 없을 수도 있습니다. 하지만 특히 서버 쪽을 담당하는 '백엔드 개발자'의 경우에는 서비스의 사용자 수가 늘어나서 리퀘스트의 수가 늘어날수록 HTTP 아래에 있는 프로토콜에 대해서도 어느 정도 알고 있어야 각종 성능 문제 등을 해결할 수 있습니다.)



@@@@@ fetch 함수와 비동기 실행 @@@@@
패치함수의 영역이 실행될때, 리퀘스트를 보내고 리스폰스가 왔을때 실행할 콜백을 덴 메소드로 등록만하고 바로 그다음줄의 코드가 실행. 정작 콜백은 나중에 리스폰스가 도착했을때 실행.
한번 시작된 작업이 완료되기전에 바로 다음 코드로 실행이 넘어가고 나중에 콜백이 실행됨으로써 작업이 마무리 되는것을 비동기실행이라고 함.
promise 객체

console.log('Start!');

fetch('https://www.google.com')
 .then((response) => response.text())
 .then((result) => {console.log(result); });

 console.log('End');

 fetch 함수가 리퀘스트를 보내고, 서버의 리스폰스를 받게 되면 그때서야 이 콜백들이 순서대로 실행
1. console.log('Start');
2. fetch 함수(리퀘스트 보내기 및 콜백 등록)
3. console.log('End');
4. 리스폰스가 오면 2. 에서 then 메소드로 등록해뒀던 콜백 실행

특정 작업을 시작(리퀘스트 보내기)하고 완벽하게 다 처리(리스폰스를 받아서 처리)하기 전에, 실행 흐름이 바로 다음 코드로 넘어가고, 나중에 콜백이 실행되는 것을 '비동기 실행'이라고 합니다.

@@@@@ 알아야하는 비동기 실행 함수들 @@@@@

1. setTimeout 함수
특정 함수의 실행을 원하는 시간만큼 뒤로 미루기 위해 사용하는 함수
console.log('a');
setTimeout(() => { console.log('b'); }, 2000); // 이 콜백의 실행을, 두 번째 파라미터에 적힌 2000 밀리세컨즈(=2초) 뒤로 미룸
console.log('c'); 
= a c b 순으로 실행,  약 2초가 지난 후에 b가 출력
setTimeout에서 콜백이 실행되는 조건은, '설정한 밀리세컨즈만큼의 시간이 경과했을 때'

2. setInterval 함수
특정 콜백을 일정한 시간 간격으로 실행하도록 등록하는 함수 (Interval는 '간격')
console.log('a');
setInterval(( => { console.log('b'); }, 2000);) //약 2초 뒤에 b가 출력된 후 그 뒤로 계속 2초 간격으로 b가 반복 출력
console.log('c');
= a c (5)b

3. addEventListener 메소드
파라미터로 전달된 콜백이 당장 실행되는 것이 아니라, 나중에 특정 조건(클릭 이벤트 발생)이 만족될 때(마다) 실행되기 때문

DOM 객체의 메소드로, 만약 사용자가 웹 페이지에서 어떤 버튼 등을 클릭했을 때, 실행하고 싶은 함수가 있다면,
(1) 해당 DOM 객체의 onclick 속성에 그 함수를 설정하거나, 
(2) 해당 DOM 객체의 addEventListener 메소드의 파라미터로 전달하면 됩니다.

* onclick 속성
btn.onclick = function (e) { // 해당 이벤트 객체가 파라미터 e로 넘어옵니다.
  console.log('Hello Codeit!');
};
// 또는 arrow function 형식으로 
btn.onclick = (e) => {
  console.log('Hello Codeit!');
};

(2) addEventListener 메소드
btn.addEventListener('click', funtion (e) {
  console.log('Hello Codeit!');
});
// 또는 arrow function 형식으로 
btn.addEventListener('clikc', (e) => {
  console.log('Hello Codeit!');
});

* setTimeout(콜백, 시간) 
* setInterval(콜백, 시간)
* addEventListener(이벤트 이름, 콜백)

@@@@@ Promise 객체 @@@@@
*fetch 함수는 promise 객체를 리턴 함.
* promise : 작업에 관한 '상태정보'

*** poromise 의 3가지 상태 ****
1. pending - 진행중
2. fulfilled - 성공 (작업 성공 결과) response가 작업의 성공결과에 해당.
3. rejected - 실패 (작업 실패 정보)

*then메소드는 promise객체가 pending 상태에서 fulfilled 상태가 될때 실행할 콜백을 등록하는 메소드.
*fetch 함수가 리퀘스트를 보내고 리스폰스를 정상적으로 받았을때 fulfilled가 됨. 그때 콜백이 실행 됨.

* fetch함수는 promise 객체를 리턴함. promise의 then 메소드를 사용하면, 나중에 해당 promise가 pending에서 fulfilled가 됬을때, 실행할 콜백을 등록할 수 있음.
그리고 response가 와서 promise가 실제로 pending상태에서 fulfilled가 되면, 등록해둔 콜백이 실행되는 거고, 그 작업 성공 결과가 콜백의 파라미터로 넘어오게 됨.

* promise객체에 then 메소드를 연속적으로 붙이는것을 Promise Chaining 이라고 함. Chaining이란 이어붙이기, 연결하기 뜻
* then 메소드가 새로운 promise객체를 리턴함. 각각 별개의 promise를 리턴함. 


***** promise의 then 메소드는 또 다른 promise객체를 리턴함. promise 객체는 처음에는 pending 상태이지만,  then 메소드 안의 콜백이 실행되고, 어떤 값을 리턴하는지 따라서 그 상태가 달라짐.
만약 콜백에서 promise 객체를 리턴하면, 앞으로 promise가 갖게될 상태와 결과를 그대로 따라서 갖게 됨.
(콜백이 리턴한 promise객체가 fulfilled상태가 되면 then메소드가 리턴했던 promise객체도 fulfilled가 됨. 만약 콜백이 리턴한 promise객체가 rejected면, then메소드가 리턴한 promise객체도 똑같이 rejected 가 됨)
하지만 promise 객체의 이외의 값(숫자, 문자열, 일반 객체 등)이라면 fulfilled 상태가 되고 해당 리턴값을 작업 성공 결과로 갖게됨.




@@@@@ text, json 메소드도 Promise 객체를 리턴 @@@@@@

1. text 메소드
fetch 함수로 리스폰스를 잘 받으면, response 객체의 text 메소드는, fulfilled 상태이면서 리스폰스의 바디에 있는 내용을 string 타입으로 변환한 값을 '작업 성공 결과'로 가진 Promise 객체를 리턴.
이때 그 작업 성공 결과는 string 타입, 그 값이 만약 JSON 데이터라면 JSON 객체의 parse 메소드로 Deserialize(역직렬화)를 해줘야합니다. (JSON.parse(result);)

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())  // response 객체의 text 메소드로 리스폰스의 내용을 추출(response.text();)하고 이것을 Deserialize(JSON.parse(result);)
  .then((result) => {
    const users = JSON.parse(result);
    // ...
  });


  2. json 메소드
  fetch 함수로 리스폰스를 잘 받으면, response 객체의 json 메소드는, fulfilled 상태이면서, 리스폰스의 바디에 있는 JSON 데이터를 자바스크립트 객체로 Deserialize해서 생겨난 객체를 '작업 성공 결과'로 가진 Promise 객체를 리턴.
  리스폰스의 바디에 있는 내용이 JSON 타입이 아니라면 에러가 발생하고 Promise 객체는 rejected 상태가 되면서 그 '작업 실패 정보'를 갖게 됨.

  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json()) //response 객체의 json 메소드로 리스폰스의 내용 추출과 Deserialize를 한 번에 수행(response.json())
  .then((users) => {
    // ...
  });



@@@@@ Promise Chaining @@@@@@
- 콜백에서 리턴한 Promise 객체로부터 새로운 Chain이 시작됨.
- 비동기 작업을 순차적으로 수행해야할때 전체코드를 좀 더 깔끔하게 나타내기위해서 사용 (then 메소드를 붙여가면서)


@@@@@ rejected 상태가 되면 실행할 콜백 @@@@@@

fetch('https://jsonplaceholder.typicode.com/users')
 .then((response => response.text(), (error) => {console.log(error); })) 
 // 2개의 콜백이 들어가 있음, 첫번째는 fulfilled일때 두번째는 rejected일때 리턴. rejected 상태의 콜백을 설정하고 싶다면 then메소드의 두번째 파라미터로 원하는 콜백을 넣어주면 됨.
 .then((result) => { console.log(result); });


fetch('https://jsonplaceholder.typicode.com/users')
 .then((response => response.text(), (error) => {console.log(error); }))
 // 첫번째 콜백은 promise 객체가 fulfilled 상태일때 실행되기 때문에 그 파라미터로 작업성공 결과가 넘어오지만, 두번째 콜백은 promise 객체가 rejected 일때 실행되기 때문에 그 파라미터로 작업실패 정보가 넘어옴.(그래서 error라고 이름을 씀.)
 //  promise 객체가 rejected 상태가 되면, 작업실패정보가 파라미터로 넘어옴
 .then((result) => { console.log(result); }); 

 *자바스크립트에서는 함수가 아무것도 리턴하지 않으면, undefined를 리턴한 것으로 봅니다. 따라서 콜백에서 아무것도 리턴하지 않아도 undefined를 리턴한 것으로 보아서, A는 fulfilled 상태가 되고, 작업 성공 결과로 undefined를 갖게 됩니다.


@@@@@ then 메소드 완벽하게 이해 하기 @@@@@

1. 실행된 콜백이 어떤 값을 리턴하는 경우

(1) Promise 객체를 리턴하는 경우 ( response 객체의 json 메소드가 Promise 객체를 리턴한다는 사실)
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((result) => { console.log(result) }); 
  // 콜백에서 리턴한 Promise 객체로부터 다시 Promise Chain이 쭉 이어져 나간다
  
(2) Promise 객체 이외의 값을 리턴하는 경우
// Internet Disconnected (인터넷이 안되는 상황)

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json(), (error) => 'Try again!') // 작업이 실패해서 두 번째 콜백인 (error) ⇒ 'Try again! 이 실행
  .then((result) => { console.log(result) }); //콜백을 등록한 then 메소드가 리턴했던 Promise가 fulfilled 상태가 되고, 그 작업 성공 결과로 'Try again' 문자열을 갖게 됨.



2. 실행된 콜백이 아무 값도 리턴하지 않는 경우
  // Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json(), (error) => { alert('Try again!'); }) // 콜백이 무언가를 리턴하는 게 아니라 이 코드에서처럼 단순히 alert 함수만 실행하고 끝남.
.then((result) => { console.log(result) }); //아무것도 리턴하지 않으면 undefined를 리턴
// 1. (2) 규칙에 따라 then 메소드가 리턴했던 Promise 객체는 fulfilled 상태가 되고, 그 작업 성공 결과로 undefined



3. 실행된 콜백 내부에서 에러가 발생했을 때

(1) 에러발생 첫번째 조건
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { 
        ...
        add(1, 2); // ReferenceError 발생
        ... 
  });

(2) 에러발생 두번째 조건
 fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => { 
      ...
      throw new Error('failed'); //인위적으로 throw 문을 써서 에러를 발생
      ... 
}); 

(3) 예시
const promise = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { throw new Error('test'); });
/* Promise 객체가 rejected 상태 , 발생한 Error 객체를 그 작업 실패 정보로 갖고 있다.
이렇게 콜백 실행 중에 에러가 발생하면, then 메소드가 리턴한 Promise 객체는 rejected 상태가 되고, 작업 실패 정보로 해당 Error 객체를 갖게 된다 
-[PromiseState]]는 Promise 객체의 상태를, [[PromiseResult]]는 Promise 객체의 결과(작업 성공 결과 또는 작업 실패 정보)를 나타내는 내부 슬롯 */


4. 아무런 콜백도 실행되지 않을 때
// Internet Disconnected

fetch('https://www.google.com') // Promise-1  rejected 상태
  .then((response) => response.text()) // Promise-2 첫 번째 then 메소드의 두 번재 콜백이 실행되여야 하는데, 두번째 콜백이 없음. 이전 Promise 객체와 동일한 상태와 결과를 갖게 됨.
  .then((result) => { console.log(result) }, (error) => { alert(error) }); 
/* Promise-2 객체는 Promise-1 객체처럼 rejected 상태가 되고, 똑같은 작업 실패 정보를 갖게 됨.
rejected 상태가 된 Promise-2의 then 메소드에는 이제 두 번째 콜백이 존재하기 때문에 그 두 번째 콜백이 실행.
!! 아무런 콜백도 실행되지 않는 경우에는 그 이전 Promise 객체의 상태와 결과가 그대로 이어진다는 사실!! */

@@@@@ catch 메소드 @@@@@
promise객체가 rejected 상태가 될때 실행할 콜백은 then 메소드의 두번째 파라미터를 넣었었는데, 또 다른 방법이 catch 메소드임.
(1)
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .catch((error) => { console.log(error); })  //.then(undefined, (error) => { console.log(error); }) 와 동일하게 보면 되는데, 보통 실무에선 catch로 많이 씀
  .then((result) => { console.log(result); });

(2)
// Internet Disconnected
fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
  .then((response) => response.text()) // Promise-B
  .then(undefined, (error) => { console.log(error); }) // Promise-C
  .then((result) => { console.log(`Quiz: ${result}`); }); // Promise-D 
 /*catch 메소드는 사실 then 메소드라고 했으니까, catch 메소드 안의 콜백이 실행되었을 때 아무 값도 리턴하지 않았는데, 아무 값도 리턴하지 않은 경우에는 undefined를 리턴한 것으로 간주
 catch 메소드가 리턴한 Promise 객체는 fulfilled 상태가 되면서, undefined를 작업 성공 결과로 가지게 되는 것, 그래서 그 뒤의 then 메소드의 콜백의 파라미터로 undefined가 넘어가서 undefined가 출력*/



@@@@@ catch 메소드는 마지막에 쓰임 : cath 함수 뒤에 then메소드에 인위적인 에러를 주게 되면 fetch 함수는 정상실행이 되지만 그 뒤에 발생한 에러는 처리하지 못함. @@@@@
 1. Promise Chain 중에서 단 하나의 작업이라도 실패하면 전체 작업이 실패했다고 봐도 되는 경우에는 그냥 Promise Chain 마지막에만 catch 메소드를 쓰임.
 2. 비록 에러가 발생했다고 해도 만약 실패한 작업 대신 다른 방법을 통해서 작업을 정상적으로 끝마칠 수 있는 상황이라면 catch 메소드를 중간에 사용하기도 함.  (미리 저장해둔 일반 뉴스 데이터를 구해오는 getStoredGeneralNews 함수를 실행하는 것처럼)


@@@@@ finally 메소드 @@@@@
* promise 객체가 fulfilled 상태던지, rejected 상태던지 상관없이 항상 실행하고 싶은 콜백이 있을 때 사용.
* promise chain 에서 catch 보다 더 아래에 쓰임 (마지막)
* 에러를 처리하는 chtch메소드 안에서 에러가 발생하더라도, 실행함. 정상적인 경우든, 최악의 경우든 항상 실행됨.
  예를들어, promise chaining에서 작업을 수행하기 위해서 사용했던 자원을 정리하거나, 어떤 로그 기록을 남겨야 하거나, 어떠한 경우든 항상 특정 변수의 값을 변경 해줘야 할때 사용

fetch('https://jsonplaceholder.typicode.com/users') 
  .then((response) => response.text())
  .then((result) => { console.log(error); }) 
  .catch((error) => { console.log(error); })
  .finally(() => {console.log('exit'); }); // 작업성공결과나 작업실패정보가 필요하지 않기 때문에, 콜백에 파라미터가 없는게 특징


@@@@@ 직접 만들어보는 Promise 객체 @@@@@
*** resolve 파라미터는 생성될 promise 객체를 fulfilled 상태로 만들 수 있는 함수가 연결
***reject 파라미터는 생성될 promise객체를 rejected 상태로 만들 수 있는 함수로 연결.

(1) fulfilled 상태
const p = new Promise((resolve, reject) => {  // new Promise 의 파라미터에 들어간 함수를 'execuor' 함수라고 함.
 setTimeout(() => { resolve('success'); }, 2000); // p라는 Promise객체가 2초후에 fulfilled가 된다는 뜻
}); //resolve 함수 안에 넣은 success 문자열이 작업 성공 결과가 됨.

p.then((result) => { console.log(result); }); //success가 작업성공결과가 되어서 result 리턴

= 2초후에 success 출력

(2) rejected 상태
const p = new Promise((resolve, reject) => {  // new Promise 의 파라미터에 들어간 함수를 'execuor' 함수라고 함.
  setTimeout(() => { reject( new Error('fail')); }, 2000); // p라는 Promise객체가 2초후에 fulfilled가 된다는 뜻
 }); //resolve 함수 안에 넣은 success 문자열이 작업 성공 결과가 됨.
 
 p.catch((error) => { console.log(error); }); 

 = 2초후에 Error: fail 출력

 *사실 실무에서는 Promise 객체를 직접 생성할 일이 없음.  Promisify 작업을 할때 주로 사용

 전통적인 형식의 비동기 실행 함수를 사용하는 코드를, promise 기반의 코드로 변환하기 위해 





 @@@@@ Promisify @@@@@


1. setTimeout 함수 예시
function wait(text, milliseconds) {
  const p = new promise((resolve, reject) => {
    setTimeout(() => { resolve(text); }, 2000);
  });
  return p;
}

fetch('https://jsonplaceholder.typicode.com/users')
 .then((response) => response.text())
 .then((result) => wait(`${result} by Codeit`, 2000)) // 2초 후에 리스폰스의 내용 뒤에 'by Codeit' 추가하고 리턴
 .then((result) => { console.log(result); });
 
* 전통적인 형식(setTimeout)의 비동기 실행 함수를 Promise 객체로 감싸서 그 Promise 객체를 리턴하는 형식으로 만드는 작업을 Promisify(프로미스화하다)라고 한다.


 2. 콜백 헬(callback hell)과 Promise
 
 *  Node.js에서 fs는 [readFile] 메소드를 가진 객체
 fs.readFile('file1.txt', 'utf8', (error, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}); // 콜백 헬(콜백 지옥, callback hell) 현상을 초래하게 됨.

---------- [readFile] 메소드를 [Promisify] 화 ----------
* readFile_promisified라는 이름의 함수를 정의
function readFile_promisified(filename) {
  const p = new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (error, date) => {
      if (error) {
        reject(error); // 에러 발생 시 -> rejected 
      } else {
        resolve(date); // 파일 내용 읽기 완료 -> fulfilled 
      }
    });
  });
  return p;
} 
/*
함수 안에서는 Promise 객체를 직접 생성
Promise 객체가 생성될 때 실행되는 executor 함수 안에서는 fs 객체의 readFile 메소를 호출
작업을 수행하다가 에러가 나면 readFile 함수의 콜백에서 reject 함수를 호출하고, 파일의 내용을 정상적으로 다 읽었을 때는 resolve 함수를 호출한다는 사실
reject 함수의 파라미터에는 error 객체를, resolve 함수의 파라미터에는 파일의 내용인 data를 전달, 생성된 Promise 객체의 작업 실패 정보 또는 작업 성공 결과 */

* readFile 메소드를 Promisify해서 만든 readFile_promisified [함수를 사용]
readFile_promiseified('file1.txt')
 .then((data) => { console.log(data); return readFile_promisified('file2.txt'); })
 .then((data) => { console.log(data); return readFile_promisified('file3.txt'); })
 .then((data) => { console.log(data); })
 .catch((error) => { console.log(error); });

 /* readFile_promisified 함수는 Promise 객체를 리턴하기 때문에 이렇게 자유롭게 Promise Chain 안에서 사용할 수 있음.
 전통적인 형식의 비동기 실행 함수를 Promisify해서 콜백 헬을 방지하고, 가독성 높은 코드를 작성 */
 ------------------------------------------------------------

 3. Promisify를 하면 안 되는 함수들도 있다.
 전통적인 형식의 비동기 실행 함수라고 해서 모두 Promisify해서 사용해도 되는 것은 아니다.
 콜백을 한번만 실행하는 것들(setTimeout, readFile 등)만 Promisify해서 사용해도 되는데, 콜백을 여러 번 실행하는 함수들(setInterval, addEventListener 등)인 경우에는 이렇게 Promisify하면 안됨.
 Promise 객체는 한번 pending 상태에서 fulfilled 또는 rejected 상태가 되고나면 그 뒤로는 그 상태와 결과가 바뀌지 않기 때문이다.





 @@@@@ 이미 상태가 결정된 Promise 객체 @@@@@

 * new 생성자와 executor 함수 * //기존방식
 const p = new Promise((resolve, reject) => {
 
 });  
 

(1) fulfilled 상태의 Promise 객체 만들기
const p = Promise.resolve('success');
//fulfilled 상태이면서, 작업 성공 결과로 문자열 'success'를 가진 Promise 객체

* 적용 
const p = Promise.resolve('success');
p.then((result) => {console.log(result); }, (error) => {console.log(error); });
// 첫번째 콜백이 실행되어서 작업 성공 결과인 문자열 success가 출력

(2) rejected 상태의 Promise 객체 만들기
const p = Promise.reject(new Error('fail'));
//rejected 상태이면서, 작업 실패 정보로, fail이라는 메시지를 가진 Error 객체를 가진 Promise 객체

* 적용
const p = Promise.reject(new Error('fail'));
p.then((result) => { console.log(result); }, (error) => {console.log(error); });
//두 번째 콜백이 실행되어서 작업 실패 정보인 Error 객체의 내용이 출력되


*** 사용 목적
예시) 아래는 문제(problem이 falsy인 경우)가 없는 경우에만 fetch 함수를 호출해서 Promise 객체를 리턴하는 함수임.
function doSomething(a, b) {
  //~~
if (problem) {
  throw new Error('Failed due to..'));
} else {
  return fetch('https://~');
}
} 

위의 함수가 만약 문제가 존재하는 경우에도 Promise 객체를 리턴하고 싶다면 reject 메소드 적용
function doSomethig(a, b) {
  //~~ 중간코드 생략
  if (problem) {
    return Promise.reject(new Error('Failed due to.'));
  } else {
    return fetch('https://~');
  }
}
//문제가 있는 경우에도 에러를 바로 throw하는 게 아니라, 생성한 에러를 Promise 객체의 작업 실패 정보로 설정해서, 그 Promise 객체를 리턴하는 것으로 바뀜
어떤 함수가 어떤 상황이든 항상 Promise 객체를 리턴하는 것으로 통일하고 싶은 경우에는 resolve나 reject 메소드를 유용하게 사용.




*** 어느 시점이든, 몇 번의 then 메소드를 붙이든 상관없이, pending 상태만 아니라면 항상 then 메소드로 Promise 객체의 결과를 추출할 수 있다.***
[ Promise 객체는 항상 결과를 줄 수 있는 공급자(Provider)이고 그것의 then 메소드는 그 결과를 소비하는 콜백인 소비자(Consumer)를 설정하는 메소드라는 사실을 잘 기억!!!]

const p = new Promise((resolve, reject) => {
  setTimeout(() => { resolve('success'); }, 2000); // 2초 후에 fulfilled 상태가 됨
});

p.then((result) => { console.log(result); }); // Promise 객체가 pending 상태일 때 콜백 등록
setTimeout(() => { p.then((result) => { console.log(result); }); }, 5000); // Promise 객체가 fulfilled 상태가 되고 나서 콜백 등록 


@@@@@ 여러 Promise 객체를 다루는 방법(심화) @@@@@

1. all 메소드
all 메소드는 여러 Promise 객체의 작업 성공 결과를 기다렸다가 모두 한 번에 취합하기 위해서 사용 
all 메소드도 then 메소드처럼 새로운 Promise 객체를 리턴
all 메소드는 하나의 Promise 객체라도 rejected 상태가 되면, 전체 작업이 실패한 것으로 간주해야 할 때 사용

// 1번 직원 정보
const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
// 2번 직원 정보
const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
// 3번 직원 정보
const p3 = fetch('https://learn.codeit.kr/api/members/3').then((res) => res.json());

Promise
  .all([p1, p2, p3])  //all 메소드의 아규먼트로는 배열, 각 직원 정보를 요청하고 받아서 Deserialize까지 수행한 작업 성공 결과를 담고 있는 Promise 객체들인 p1, p2, p3 객체
  .then((results) => {
    console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
  });

= 결과 
(3) [{...}, {...}, {...}]
0: ~~ //id 1번 정보 생략
1: ~~ //id 2번 정보 생략
2: ~~ //id 3번 정보 생략

(1) 각 개별 Promise 객체의 작업 성공 결과로 이루어진 배열을 
(2) 자신의 작업 성공 결과로 갖는다는 것을 알 수 있습니다.

그런데 만약 p1~3 객체들 중 하나라도, rejected 상태가 되면,
// 1번 직원 정보
const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
// 2번 직원 정보
const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
// 3번 직원 정보
const p3 = fetch('https://learnnnnnn.codeit.kr/api/members/3').then((res) => res.json()); // 잘못된 URL

Promise
  .all([p1, p2, p3])
  .then((results) => {
    console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
  });
  
all 메소드가 리턴한 Promise 객체는 p3 객체처럼 rejected 상태가 되고 동일한 작업 실패 정보를 갖게됨.
* Promise 객체가 하나라도 rejected 상태가 되는 경우에 대비하려면, 

// 1번 직원 정보
const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
// 2번 직원 정보
const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
// 3번 직원 정보
const p3 = fetch('https://learnnnnnn.codeit.kr/api/members/3').then((res) => res.json());

Promise
  .all([p1, p2, p3])
  .then((results) => {
    console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
  })
  .catch((error) => {  //catch 메소드를 붙여주면 된다.
    console.log(error);
  });



2. race 메소드
race 메소드가 리턴한 Promise 객체는 아규먼트로 들어온 배열의 여러 Promise 객체들 중에서 
가장 먼저 fulfilled 상태 또는 rejected 상태가 된 Promise 객체와 동일한 상태와 결과를 갖게 된다.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success'), 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('fail')), 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('fail2')), 4000);
});

Promise
  .race([p1, p2, p3])
  .then((result) => {
    console.log(result); // hello 출력
  })
  .catch((value) => {
    console.log(value);
  });

 /* p1 객체는 1초 후에 fulfilled 상태가 되고, 그 작업 성공 결과로 문자열 Success를 가지게 되는데, 
 p2는 2초 후에, p3는 4초 후에 rejected 상태가 된다. 
 말그대로 race 메소드는 여러 Promise 객체들을 레이스(race, 경쟁)시켜서 가장 빨리 상태가 결정된 Promise 객체를 선택하는 메소드 */



3. allSettled 메소드 :  배열 내의 모든 Promise 객체가 fulfilled 또는 rejected 상태가 되기까지 기다리고, pending 상태의 Promise 객체가 하나도 없게 되면, A의 상태값은 fulfilled 상태가 되고 그 작업 성공 결과로, 하나의 배열을 갖게 됨.
[
  {status: "fulfilled", value: 1},
  {status: "fulfilled", value: 2},
  {status: "fulfilled", value: 3},
  {status: "rejected",  reason: Error: an error}
]
(1) 최종 상태를 status 프로퍼티, 
(2) 그 작업 성공 결과는 value 프로퍼티, 
(3) 그 작업 실패 정보는 reason 프로퍼티

fulfilled 상태와 rejected 상태를 묶어서 settled 상태라고 하는데, allSettled 메소드는 말 그대로 배열 속 Promise 객체들이 settled 상태가 되기만 하면 되는 것. 이에 반해 all 메소드는 모든 Promise 객체들이 fulfilled 상태가 되기를 기다리는 것.



4. any 메소드 : 여러 Promise 객체들 중에서 가장 먼저 fulfilled 상태가 된 Promise 객체의 상태와 결과가 A에도 똑같이 반영. 만약 모든 Promise 객체가 rejected 상태가 되어버리면 AggregateError라고 하는 에러를 작업 실패 정보로 갖고 rejected 상태가 됨.
any라는 단어의 뜻처럼 배열 속의 Promise 객체 중 단 하나라도 fulfilled 상태가 되면 되는 것.



@@@@@ axios 객체 @@@@@  fetch 함수 말고도 Ajax 통신을 할 수 있는 방법.
axios 객체에서 리퀘스트를 보내는 많은 메소드들이 fetch 함수처럼 Promise 객체를 리턴

axios 
 .get('https://jsonplaceholder.typicode.com/users')
 .then((response) => {
   console.log(response);
 })
 .catch((error) => {
   console.log(error);
 });

* axios 객체에는 fetch 함수에는 없는 다음과 같은 몇 가지 기능 및 장점
1) 모든 리퀘스트, 리스폰스에 대한 공통 설정 및 공통된 전처리 함수 삽입 가능
2) serialization, deserialization을 자동으로 수행
3) 특정 리퀘스트에 대해 얼마나 오랫동안 리스폰스가 오지 않으면 리퀘스트를 취소할지 설정 가능(request timeout)
4) 업로드 시 진행 상태 정보를 얻을 수 있음
5) 리퀘스트 취소 기능 지원
등등

* axios 의 단점은 별도의 다운로드가 필요한 패키지라는 점
axios에서 제공하는 추가 기능이 필요한 경우에는 axios를 쓰고, 
그런 기능이 필요하지 않고 별도의 패키지 다운로드를 원하지 않는 경우에는 fetch 함수를 사용한다.




@@@@@ async / await @@@@@ 2021년 기준으로 promise 객체를 좀 더 간단하고 보기좋게 다룰 수 있는 문법.

//
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.text())
.then((result) => {console.log(result); }); // fetch 문법
//

async function fetchAndPrint() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await response.text();
  console.log(result); 
}

fetchAndPrint();
// async 문법
------------------------------------------------------------


**** 실행 순서 ****
async function fetchAndPrint() {
  console.log(2);
  const response = await fetch('https://jsonplaceholder.typicode.com/users'); // await 를 만나면 바깥 코드를 먼저 실행 후 돌아옴.
  console.log(7);
  const result = await response.text(); // 바깥 코드에는 이미 실행 된 코드들만 있어서 await response.text();가 fulfilled 될때까지 기다렸다가 result에 할당 되고 끝.
  console.log(result);
}

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);

===> console 탭 출력
1
2
3
4
5
6
7
[리스폰스의 내용 (result) ]

*async 함수 안의 코드가 실행되다가 await을 만나면, 일단 await 뒤의 코드가 실행되고, 코드의 실행 흐름이 async 함수 바깥으로 나가서 나머지 코드를 다 실행합니다.
물론 함수 바깥에 더 이상 실행할 코드가 없을 수도 있습니다. 
어느 경우든 그 이후로는, await 뒤에 있던 Promise 객체가 fulfilled 상태가 되기를 기다립니다. 그리고 기다리던 Promise 객체가 fulfilled 상태가 되면 await이 Promise 객체의 작업 성공 결과를 리턴
------------------------------------------------------------


* 위의 async 문법을 Promise Chaining을 하는 코드로 바꿨을때.
function fetchAndPrint() {
  console.log(2);
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      console.log(7);
      return response.text();
    })
    .then((result) => { console.log(result); });
}

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);
------------------------------------------------------------

* async/await 구문 자체가 기존의 Promise 객체를 사용하는 코드(Promise Chaining)를
(1) 개발자가 더 편하게 작성할 수 있도록 하고
(2) 코드의 가독성을 높이기 위해서 사용.

* 코드에서 async/await이 보인다면 사실 비동기 실행되는 코드가 있다는 걸 반드시 기억

------------------------------------------------------------
*fetch 문법을 async 로 적용하여 변경 

[fetch]
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const lastUser = users[users.length - 1];
    return lastUser.id;
  })
  .then((id) => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`))
  .then((response) => response.json())
  .then((posts) => {
    const lastPost = posts[posts.length - 1];
    console.log(lastPost);
  });

[async]
async function getTheLastPostOfTheLastUser() {
  const usersJSON = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await usersJSON.json();
  const lastUser = users[users.length - 1];
  const { id } = lastUser;
  const postsJSON = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const posts = await postsJSON.json();
  const lastPost = posts[posts.length - 1];
  return lastPost;
}

getTheLastPostOfTheLastUser().then((lastPost) => {
  console.log(lastPost);
});

------------------------------------------------------------

@@@@@ async 함수의 catch문과 finally문 @@@@@ 

async function showQuiz() {
  try {  // try 로 catch 전 await을 감싸 줌.
    const response = await fetch('https://learn.codeit.kr/api/quiz');
    const test = await response.json();
    const yourAnswer = prompt(test.quiz);
    if (yourAnswer.toLowerCase() === test.answer) {
      alert(`Good Job, ${test.explanation} => Let\'s learn more with Codeit!`);
    } else {
      throw new Error('wrong');
    }
  } catch (error) { //error를 catch 로 감싸 줌.
    if (error.message === 'wrong') {
      alert('You need to learn JavaScript with Codeit!');
    } else {
      alert('Error');
    }
  } finally { // fulfilled 나 rejected 상관없이 출력 할때 마지막에 넣어줌.
    window.open('https://codeit.kr', '_blank');
  }
}

showQuiz();



*** async 함수가 리턴하는 Promise 객체 ***
(1) Promise 객체를 리턴하는 경우
async 함수 안에서 Promise 객체를 리턴하는 경우에는 해당 Promise 객체와 동일한 상태와 작업 성공 결과(또는 작업 실패 정보)를 가진 Promise 객체를 리턴(그냥 해당 Promise 객체를 리턴한다고 봐도 괜찮)
(이미 fulfilled 상태인 Promise 객체나 이미 rejected 상태인 Promise 객체를 리턴하는 경우 전부 다 해당)

(2) Promise 객체 이외의 값을 리턴하는 경우
async 함수 내부에서 Promise 객체 이외에 숫자나 문자열, 일반 객체 등을 리턴하는 경우에는, fulfilled 상태이면서, 리턴된 값을 작업 성공 결과로 가진 Promise 객체를 리턴

(3) 아무 값도 리턴하지 않는 경우
fulfilled 상태이면서, undefined를 작업 성공 결과로 가진 Promise 객체가 리턴 (return 없이 내부에 console만 있는 경우)

(4) async 함수 내부에서 에러가 발생했을 때
async 함수 안에서 에러가 발생하면, rejected 상태이면서, 해당 에러 객체를 작업 실패 정보로 가진 Promise 객체가 리턴

*** async 함수가 결국 Promise 객체를 리턴한다는 사실은 아주 중요. 이 말은 곧 async 함수 안에서 다른 async 함수를 가져다가 쓸 수 있다는 뜻이기 때문


@@@@@ 함수 표현 & async를 붙이는 위치 @@@@@

1. Function Declaration (함수 선언식)
// 1) Function Declaration
async function example1(a, b){
  return a + blur;
}

2. Function Expression (함수 표현식)
2-1 함수에 이름이 붙어있는 Named Function Expression
// 2-1) Function Expression(Named)
const example2_1 = async function addEventListener(a, b) {
  return a +b ;
};

2-2 함수에 이름이 없는 Anonymouse Function Expression
const example2_2 = async function(a, b) {
  return a + b;
};

3. Arrow Function (화살표 함수)
// 3-1) Arrow Function
const example3_1 = async (a, b) => {
  return a + b;
};

// 3-1) Arrow Function
const example3_2 = async (a, b) => a + b;



**** 즉시실행함수(Immediately-invoked function expression, IIFE) ***

1.
(function print(sentence) {
  console.log(sentence);
  return sentence;
}('I love JavaScriot!'));    // function 바깥에 소괄호 한번 더 감싸주기

//async 문
(async function print(sentence) {
  console.log(sentence);
  return sentence;
}('I love JavaScript!'));



2.
(function (a, b) {
  return a + b;
}(1, 2));  // function 바깥에 소괄호 한번 더 감싸주기

//async 문
(async function (a, b) {
  return a + b;
}(1, 2));



3.
((a, b) => {
  return a + b
})(1, 2);  // function 자리였던 부분 소괄호 한번 더 감싸주기

//async 문
(async (a, b) => {
  return a + b; 
})(1, 2);



4.
((a, b) => a + b)(1, 2); // function 자리였던 부분 소괄호 한번 더 감싸주기

//async 문
(async (a, b) => a + b)(1, 2);



@@@@@  async 함수를 작성할 때 주의해야할 성능 문제 @@@@@

async function getResponses(urls) {
  for(const url of urls){
    const response = await fetch(url);
    console.log(awailt response.text());
  }
}

getResponses 함수는 urls라는 파라미터로, 여러 개의 URL들이 있는 배열을 받아서, 순서대로 각 URL에 리퀘스트를 보내고, 그 리스폰스의 내용을 출력하는 함수
이전 URL에 리퀘스트를 보내고 리스폰스를 받아서 출력하고 나서야, 다음 URL에 대한 리퀘스트를 보낼 수 있다는 단점
순차적인 작업 처리를 한다는 점 (이전 URL에 대해서 await 문이 붙은 Promise 객체가 fulfilled 상태가 될 때까지는 그 다음 URL에 대한 작업들이 시작될 수 없기 때문)


async function fetchUrkls(urls) {
  for(const url of urls) {
    (async () => { // 추가된 부분
      cosnt response = await fetch(url);
      console.log(await response.text());
    })(); // 추가된 부분
  }
}

리스폰스의 내용의 순서가 중요하지 않은 경우, 각 url에 리퀘스트를 보내고 리스폰스를 받는 코드를, 별도의 즉시실행되는 async 함수로 감싸줘서 IIFE로 변환
리퀘스트를 보내는 것을 순서대로 바로 실행. 이전 코드처럼 이전 URL에 대한 리스폰스가 오기까지를 기다렸다가 다음 URL에 리퀘스트를 보내는 게 아니라
* 리스폰스의 순서를 보장하지 않아도 되는 경우에는 이 코드가 훨씬 성능이 좋음.


**동기 실행되는 콜백** (자바스크립트 배열의 메소드 중에서 filter라는 메소드 사용)
const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.filter(function is0dd(num) { //isOdd(홀수인가요?)라는 함수
  return (num % 2 === 1);
}); //filter 함수는 arr 배열에서 각 요소를 하나씩 순회하면서 매 요소마다 isOdd 함수를 실행

console.log(newArr); // [1, 3, 5]


**Arrow Function 형식**
const arr = [1, 2, 3, 4, 5, 6];
const newArr = arr.filter((num) => num % 2);
console.log(newArr); // [1, 3, 5]

= filter 메소드 안의 콜백은 앞서 말했듯이 '동기 실행되는 콜백' (아주 정직하게 순서대로 실행)

콜백이란 함수의 파라미터로 전달되는 함수를 의미하는 넓은 의미의 개념
1. 동기 실행되는지
2. 비동기 실행되는지  에 따라 두 종류로 나뉨.