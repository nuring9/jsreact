@@@@@@@@기본 문법
// 객체.메소드(파라미터);
// 객체[메소드](파라미터);

// *객체란 이름(name)과 값(value) 구성된 프로퍼티(propery)
// - name = value;
// *프로퍼티의 값으로 함수가 올때 이것을 메소드(method)



// * 프로퍼티를 참조하는 방법
// 객체이름.프로퍼티이름
// or
// 객체이름['프로퍼티이름']

// * 메소드를 참조하는 방법
// 객체이름.메소드이름()
// or
// 객체이름['메소드']();

// /// 5월 8일///

// *함수표시 (예시)
// function 함수이름(){
// console.log('값');
// }

// function 함수이름(){
// return x * x ;
// }

// * return 과 console.log 차이

// function printSquare(x) {
//  console.log(x * x);
// }

// printSquare(3);
// => 9 

// ---------------------------

// function getSquare(x) {
//  return x * x;
// }

// getSquare(3);
// =>값이 호출이 안됨.

// console.log(getSquare(3));
// => 9




// ****************5/19

// for문
// for(초기화부분; 조건부분; 추가동작부분) {
// 동작부분
// }

// for (let i = 1; i <= 10; i++){
// console.log('${i} 코드잇 최고!');
// }

// => 1  코드잇 최고!
//      2  코드잇 최고!
//      3  코드잇 최고!  
//      .
//      .
//      .
//     10  코드잇 최고!

// for in문 (객체의 프로퍼티 네임들을 나열할때 쓰임)
// for (변수 in 객체){
// 동작부분
// }


// let codeit = {
//  name: '코드잇',
//  bornYear: 2017,
//  isVerNice: true,
//  worstCourse: null,
//  bestCoures: '자바스크립트'
// }

// for (let key in codeit) {  //key라는 변수를 만들고, codeit객체의 프로퍼티 갯수만큼 반복 codeit의 네임들을 출력
// console.log(key);
// }
// =>
//  name
//  bornYear
//  isVerNice
//  worstCourse
//  bestCoures

// for(let key in codeit) {
//  console.log(codeit[key]);   // 대괄호 표기법으로 프로퍼티 밸류값 출력도 가능
// }

// =>
// 코드잇
// 2017
// true
// null 
// 자바스크립트




// ==========

// 반복문 for / while 문 예시 (배열문나열 문제)

// for (let i = 0; i < 6; i++) {
//   console.log(dataType[i]);
// }

// let i = 0;
// while (i < 6) {
//   console.log(dataType[i]);
//   i++;
// }



// * splice의 for문의 사용시 증감된 숫자가 영향을 받으므로
// i--; 로 줄여줘야함


// //splice(startIndex, deleteCount, item)
// //배열의 첫 요소를 삭제: shift()
// members.splice(0, 1);
// members.shift();

// console.log(members);

// //배열의 마지막 요소를 삭제: pop()
// members.splice(members.length - 1, 1);
// mambers.pop();

// //배열의 첫 요소로 값 추가: unshift(value)
// members.splice(0, 0, 'abcd');
// members.unshift('abcd');

// //배열의 마지막 요소로 값 추가: push(value)
// members.splice(members.length, 0, 'efgh');
// members.push('efgh');


// -----------
// for ... of 문 (배열의 길이만큼 반복문) 
// *forin문은 변수에 프로퍼티 네임이 할당 but,
//  forof문은 배열에 요소가 할당

// for (변수 of 배열) {
//  동작부분;
// }

// ex)
// let influencer = ['suwonlog', 'small.tiger', 'Minam.ludens', 'cu_convenience24']

// for (let element of influencer) {
// console.log(element);
// }

// //for문으로 같은 값을 구현할 때
// for (let i = 0; i < influencer.length; i++) {
//  console.log(influencer[i]);
// }
// //

// =>
// suwonlog
// small.tiger
// minam.ludens
// cu_convenience24


// ----------------
// 변수.toFixed(3)  -> (+붙이면 number)
// =>소수점자리수

// 변수.toString(2) -> 2진수 변환, (8)8진수, (16)16진수

// 소수점 더하기 (toFixed , math.round)
// console.log(+변수.toFixed(1));
// console.log(math.round(변수 * 10) / 10);

// *참조형 복사하기(forin문활용)-------------
// function cloneObject(object) {
// let temp = {};

// for (let key in object) {
//  temp[key] = object[key];
// }

// return temp;
// };

// let course1 = {
//  title: '파이썬 프로그래밍 기초',
//  language: 'Python'
// };

// let course2 = cloneObject(course1); 
=============================================-



//**태그 선택하기**/

//1. document.getElementById('id')	/  HTML id속성으로 태그 선택하기 /	id에 해당하는 태그 하나
const myTag = document.getElementById('btns');
console.log(myTag);
// 딱 그 태그만 보여주는게 아니라 해당태그 내부에 있는 모든 내용들이 표시
// <div id="btns"><div>...</div></div>
//없는 id를 불러오면 null값이 리턴


//2. document.getElementsByClassName('class') / HTML class속성으로 태그 선택하기 /	class에 해당하는 태그 모음(HTMLCollection) 
// 배열은 아니지만 유사배열 //요소의 순서는 위에서 차례대로
const mytags = doucument.getElementsByClassName('color-btn');

console.log(myTags);
console.log(myTags[1]); // 대괄호 표기법으로 1번 인덱스 배열 불러오기
console.log(myTags.length); // 8(배열처럼 갯수)

for (let tag of mytags){    // 배열처럼 각 요소 나열
  console.log(tag);
}

// .getElementsByClassName('*');모든 class 선택

getElementsByClassName // HTMLCollection로(유사배열)  
// 없는 클래스를 불러오면 undefined



//3. document.getElementsByTagName('tag')	/ HTML 태그 이름으로 태그 선택하기 /	tag에 해당하는 태그 모음(HTMLCollection)
const btns = document.getElementsByTagName('button');




//4. document.querySelector('css')	/ css 선택자로 태그 선택하기 /	css 선택자에 해당하는 태그 중 가장 첫번째 태그 하나
const myTag = document.querySelector('#myNunber');
console.log(myTag);
const myTag2 = ducument.getElementById('myNunber');
console.log(myTag2);
//querySelector 와 getElementById 는 같은 개념
//<div id ="myNunmber">0</div> 출력됨
//querySelector는 tag,class,id 다 받고 getElementById는 id만 받는다.




const myTag = document.querySelector('.color-btn');
console.log(myTag);
// <button class="color-btn red" date-color="#FF0000"></btuuon>
// 첫번째 선택됨
//없는 요소를 선택할 경우 null

//5. document.querySelectorAll('css')	css / 선택자로 태그 선택하기	/ css 선택자에 해당하는 태그 모음(NodeList)
const myTags = documnet.querySelectorAll('.color-btn');
console.log(myTags);
//NodeList 라는 유사배열이(color-btn을 css선택자를 가지고있는) 출력됨
//없는 요소를 선택할 경우 Nodeslist가 리턴



const myTag2 = documnet.getElementsByClassName('.color-btn');
console.log(myTag2);
//HTMLCollection 유사배열(color-btn을 가지고있는) 출력됨 
//querySelectorAll , getElementsByClassName 같은 개념
//querySelectorAll 짧아서 조금 더 활용도가 높음


//**이벤트와 버튼 클릭**/
const btn = document.querySelector('#myBtn'); //myBtn이라는 id를 선택
//이벤트 핸들링(Event Handling) 이벤트를 작동하는 기능
btn.onclick = function() {   //이벤트 핸들러(Event Handler) 자세한 함수부분
  console.log('Hello Codeit!');
}
//버튼을 클릭하면 console창에 Hello codeit!이 출력됨



//** DOM 트리 여행하기 **//
const myTag = document.querySelector('#list-1'); //css 선택자로 태그 먼저 선택
console.log(myTag);

// 형제 요소 노드
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

// 부모 요소 노드
console.log(myTag.parentElement);

// 자식 요소 노드
console.log(myTag.children[1]);
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);

// element.children [자식 요소 노드] element의 자식 요소 모음(HTMLCollection)
// element.firstElementChild [자식 요소 노드] element의 첫 번째 자식 요소 하나
// element.lastElementChild [자식 요소 노드] element의 마지막 자식 요소 하나
// element.parentElement [부모 요소 노드] element의 부모 요소 하나
// element.previousElementSibling [형제 요소 노드] element의 이전(previous) 혹은 좌측(left)에 있는 요소 하나
// element.nextElemnetSibling [형제 요소 노드] element의 다음(next) 혹은 우측(right)에 있는 요소 하나

//모든 노드에 대한 이동 프로퍼티
//node.childNodes [자식 노드] node의 자식 노드 모음(NodeList)
//node.firstChild [자식 노드] node의 첫 번째 자식 노드 하나
//node.lastChild [자식 노드] node의 마지막 자식 노드 하나
//node.parentNode [부모 노드] node의 부모 요소 하나
//node.previousSibling [형제 노드] node의 이전(previous) 혹은 좌측(left)에 있는 노드 하나
//node.nextSibling [형제 노드] node의 다음(next) 혹은 우측(right)에 있는 노드 하나



//** 요소 노드 주요 프로퍼티 **//
const myTag = doucument.querySelector('#list-1');

//1. innerHTML 요소 안에 있는 hmlt을 자체를 문자열로 리턴
console.log(myTag.innerHTML);

    <li>Ragdoll</li>
    <li>British Shorthair</li>
    <li>Scottish Fold</li>
    <li>Bengal</li>
    <li>Siamese</li>
    <li>Maine Coon</li>
    <li>American Shorthair</li>
    <li>Russian Blue</li>

myTag.innerHTML += '<li>Exotic</li>';//마지막 부분에 요소로 추가 됨
//태그의 줄바꿈, 들여쓰기까지 출력이됨, 요소 안에 HTML을 수정할 때 더 활용됨

//2. outerHTML 해당요소가 포함된 전체 HTML코드를 문자열로 리턴 
console.log(myTag.outerHTML);

<ul id="list-1">
      <li>Ragdoll</li>
      <li>British Shorthair</li>
      <li>Scottish Fold</li>
      <li>Bengal</li>
      <li>Siamese</li>
      <li>Maine Coon</li>
      <li>American Shorthair</li>
      <li>Russian Blue</li>
    </ul>

myTag.outerHTML = '<ul id-"new-list"><li>Exotic</li></ul>';
//새로운 값을 할당했을 때 요소가 새로운 요소로 교체 됨. 수정하는것으로 오해하는데 선택한 요소는 사라짐.

//3. textContent = innerHTML와 비슷 한데 텍스트만 리턴
console.log(myTag.textContent);

    Ragdoll
    British Shorthair
    Scottish Fold
    Bengal
    Siamese
    Maine Coon
    American Shorthair
    Russian Blue
// 특수문자. HTML 코드처럼 작성하더라도 텍스트로만 출력, 사용자의 입력값을 웹페이지에 반영해야할때 inner보다 활용 원하지 않는 html 코드가 업로드되는걸 방지 



//** 요소 노드 추가하기 **//
const tomorrow = document.querySelector('#tomorrow');
// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');
// 2. 요소 노드 꾸미기: textContent(텍스트만 추가할 때), innerHTML (내부의 HTML 태그가 필요할때)
first.textContent = '추가하는텍스트';
// 3. 요소 노드 추가하기: NODE.prepent, append, after, before
tomorrow.prepend(first);
tomorrow.append(last); //마지막 자식노드
tomorrow.before(prev); //형제노드 앞쪽
tomorrow.after(next); //형제노드 뒤쪽




<ol id="today">
<li>자바스크립트 공부</li>
<li>고양이 화장실 청소</li>
<li>고양이 장난감 쇼핑</li>
</ol>
<h1>내일 할 일</h1>
<ol id="tomorrow">
<li>자바스크립트 공부</li>
<li>뮤지컬 공연 예매</li>
<li>유튜브 시청</li>
</ol>

//***노드 삭제와 이동***
const today = document.querySelector('#today');
con tomorrow = documnet.querySelector('#tomorrow');

//노드 삭제하기: Node.remove();
tomorrow.remove();
today.children[2].remove();  //배열 번호로 선택 삭제

//노드 이동하기: prepend, append, before, after
today.prepend(tomorrow).childern[1]);  //첫번째 자식요소로 tomorrw의 인덱스1번이 이동
today.append(tomorrow).childern[1]);  //마지막 자식요소
today.before(tomorrow).childern[1]);  //형제노드 앞쪽
today.append(tomorrow).childern[1]);  //형제노드 뒤쪽

tomorrow.children[1].after(today.childern[1]); // 고양이 화장실청소를 뮤지컬공연예매 다음으로



// HTML 태그들이 가지고 있는 각각의 속성들은 요소 노드의 프로퍼티로 생성
//***HTML속성다루기***(속성값 가져오기)
// HTML 속성(HTML attribute)
const tomorrow = documnet.querySelector('#tomorrow')
const item = tomorrow.firstElementChild;
const Link = item.firstElementChild;

//1. id 속성
console.log(tomorrow); //<ol id="tomorrow" href="https://www.codeit.kr"> ..</ol>
console.log(tomorrow.id); //tomorrow

//2. class 속성
console.log(item); //<li class="item">...</li>
console.log(item.className); //item

//3.href 속성
console.log(link); //<a href="링크주소">
console.log(link.href); //링크주소만
console.log(tomorrow.href); //undefined 가 출력(비표준 속성)

//4.elem.getAttribute('속성') : 속성에 접근하기(비표준 속성에도 접근)
console.log(tomorrow.getAttribute('href')); //https://www.codeit.kr
console.log(ite.getAttribute('class')); //item

//elem.setAttribute('속성', '값'): 속성 추가(수정)하기
tomorrow.setAttribute('class', 'list'); //기존에 없었던 속성에는 추가
link.setAttribute('href', 'https://www.codeit.kr'); // 기존에 있는 속성에는 수정

//elem.removeAttribute('속성'): 속성 제거하기
tomorrow.removeAttribute('href'); //href 제거
tomorrow.removeAttribute('class'); //class 제거




//**자바스크립트로 스타일 다루기**//
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrw');

//1.style 프로퍼티(태그에 직접적으로 적용 되기 때문에 스타일 우선순위 문제 & 여러 태그 적용에 힘듬)
today.childern[0].style.textDecoration = 'line-though'; //text-Decoration 처럼 여러단어를 이어서 만든 속성은 카멜표기법으로 대문자
today.childern[0].style.backgroundColor = '#DDDDDD'; //background-color => backgroundColor
today.style.backgroundColor = '#DDDDDD'; // today 전체에 스타일 변경

//2.elem.className (태그의 클래스를 변경하는 방법이 권장)
today.childern[1].className = 'done'; //done이라는 스타일시트에 미리 만들어져있는 스타일
//클래스 속성값 전체가 바뀌게 되어 기존 item 클래스는 사라지고 done으로 변경 됨

//3.elem.classList : add, remove, toggle(상황에 따라서 원래 있던 item 클래스를 그대로 두고 done 클래스를 추가하고 싶을때)
console.log(today.classList);
//add 추가
const item = tomorrow.childern[1]; //1번 인덱스에
item.classList.add('done' ,'두번째클래스'); //done 클래스가 추가 여러 클래스를 넣고싶을때는 ,쉼표로 구분
//remove 삭제
item.classList.remove('done'); //done은 속성의값
//toggle 있으면 제거 , 없으면 추가 하는 메소드 (자주 사용하지 않음)
today.classList.toggle('done'); //done은 속성의값
//두번째 파라미터(쉼표 뒤) true로 입력할 경우 add 기능만 하고, false 입력할 경우 remove의 기능만 하다록 강제 역할
today.classList.contains('속성의값');
//	값이 존재하는지 체크한다.(true / false)




// **비표준 속성 다루기** 

<body>
  <p>할 일 : <b field="title"></b></p>
  <p>담당자 : <b field="manager"></b></p>
  <p>상태 : <b field="status"></b></p>
  <div>
    상태 변경: 
    <button class="btn" status="대기중">대기중</button>
    <button class="btn" status="진행중">진행중</button>
    <button class="btn" status="완료">완료</button>
  </div>
  <script src="index.js"></script>
</body>

// [속성이름] 처럼 대괄호를 이용하면 대과로 안에 있는 속성이름을 가진 태그들을 선택 할 수 있고
// [속성="값")처럼 작성하면 좀 더 구체적으로 속성이름에 해당 값을 가진 태그들을 선택할 수도 있음.


// 비표준 속성 활용하기
// 자바스크립트로 HTML 태그의 비표준 속성을 활용할 때 HTML 태그에 data-*형태로 속성을 작성하고 자바스크립트로는 DOM의 dataset프로퍼티를 활용하면 조금 더 안전하게 비표준 속성을 다룰 수 있음
// 1. querySelector로 태그를 선택할 때 css 선택자를 활용해서 태그를 선택하는 데에 활용
const filelds = documnet.querySelectorAll('[field]');
console.log(fields); //fieid라는 비표준 속성으로 b태그를 선택
//=>  fieid라는 비표준 속성으로 b태그의 유사배열이(NodeList) 출력됨

// 2.값을 표시할 태그를 구분할 때 활용
// 비표준 속성은 객체 형태의 데이터가 있을 때, 각 프로퍼티 값들이 들어갈 태그를 구분하는데 활용 할 수 있다. 
const filelds = document.querySelectorAll('[field]');
const task = {
  title: '코드 에디터 개발',
  manager: 'CastleRing', 'Racconn Lee',
  status: '',
};

for (let tag of fields){
  const field = tag.getAttribute('field');
  tag.textContent = task[field];
}
//무슨뜻인지 솔직히 이해못하겠음....
//=>출력값
<p>
  "할 일 : "
  <b field="title">코드 에디터 개발</b>
</p>
<p>
  "담당자 : "
  <b field="manager">CastleRing, Raccoon Lee</b>
</p>
<p>
  "상태 : "
  <b field="state"></b>
</p>

// 3.스타일이나 데이터 변경에 활용
// getAttribute 메소드를 활용해서 속성값을 가져오고, setAttribute 메소드를 활용해서 속성값을
// 설정해 주는 원리로 이벤트를 통해 실시간으로 스타일을 변경하거 데이터를 변경하는데 활용할 수 있다.
// 때로는 class를 다루는 것보다 setAttribute로 비표준 속성을 변경하는게 스탕리을 다루기 오히려 편리한 경우도 있다. 

//** 중간 종합정리 **/
// 1. window 객체
// window 객체는 브라우저 창을 대변하면서 자바스크립트에서 최상단 존재하는 객체
// 자바스크립트 코드 어느 곳에서나 항상 접근할 수 있는 객체이기 때문에 전역 객체, 영어로는 Global Object라고 부름.
// 어떤 프로퍼티나 메소드를 사용하든 결국 전역 객체 내부의 것이기 때문에 앞에 window.을 생략

// 2.DOM
// DOM이란 Document Object Model의 약자로, 한국어로는 문서 객체 모델.
// 간단하게 표현하면 웹페이지에 나타나는 HTML 문서 전체를 객체로 표현한 것
// 이때 각 객체를 노드(Node)라는 용어로 표현, 태그는 요소 노드, 문자는 텍스트 노드로 구분.

// 3. DOM트리
// HTML의 계층 구조는 DOM에서도 반영되는데 이러한 계층구조를 나무에 비유해서 DOM 트리라고 부름.
// 각 노드 간의 관계는 부모, 자식, 형제라는 용어로 표현.

//  Node란?
// HTML DOM은 노드(Node)라고 불리는 계층적 단위에 정보를 저장하고 있습니다
// DOM은 이러한 노드를 정의하고 그들 사이의 관계를 설명해 주는 역할을 합니다. 즉 노드는 모든 DOM 객체 입니다

//  Element란?
// Element란 특정 유형의 노드입니다(문서노드, 요소노드, 주석노드 등등..)
// 태그를 선택

// 4. DOM 이동 시 활용 가능한 프로퍼티
// Element.children / 자식 요소 노드 / element의 자식 요소 모음(HTMLCollection)
// Element.firstElementChild / 자식 요소 노드 / element의 첫 번째 자식 요소 하나
// Element.lastElementChild / 자식 요소 노드 / elemnet의 마지막 자식 요소 하나
// Element.parentElement / 부모 요소 노드 / element의 부모 요소 하나
// Element.previousElementSibling / 형제 요소 노드 / element의 이전(previous) 혹은 좌측(left)에 있는 요소 하나
// Element.nextElementSibling / 형제 요소 노드 / element의 다음(next) 혹은 우측(right)에 있는 요소 하나
// Node.childNodes / 자식 노드 / node의 자식 노드 모음(NodeList)
// Node.firstChild / 자식 노드 / node의 첫 번째 자식 노드 하나
// Node.lastChild / 자식 노드 / node의 마지막 자식 노드 하나
// Node.parentNode / 부모 노드 / node의 부모 요소 하나
// Node.previousSibling / 형제 노드 / node의 이전(previous) 혹은 좌측(left)에 있는 노드 하나
// Node.nextSibling /  형제 노드 / node의 다음(next) 혹은 우측(right)에 있는 노드 하나

// 5. 주요 요소 노드 프로퍼티
// element.innerHTML / 요소 노드 내부의 HTML코드 문자열로 리턴 / 요소 안의 정보를 확인할 수도 있지만, 내부의 HTML 자체를 수정할 때 좀 더 자주 활용
// element.outerHTML / 요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴 / outerHTML은 새로운 값을 할당하면 요소 자체가 교체되어 버리기 때문에 주의
// element.textContent / 요소 노드 내부의 내용들 중에서 HTML을 제외하고 텍스트만 리턴 / textContent는 말 그대로 텍스트만 다루기 때문에 HTML태그를 쓰더라도 모두 텍스트로 처리

// 6. 요소 노드 다루기
// 01. 요소 노드 만들기: documnet.createElement('태그이름')
// 02. 요소 노드 꾸미기: Element.textContent, element.innerHTML, ...
// 03. 요소 노드 추가 혹은 이동하기: elemnet.prepend, element.append, element.after, element.before
// 04. 요소 노드 삭제하기: element.remove()

// 7. HTML 속성 다루기
// 대부분의 HTML 속성은 DOM 객체의 프로퍼티로 변환 됨.
// 하지만, 표준 속성이 아닌 경우에는 프로퍼티로 변환이 되질 않음. 
// 아래 메소드를 활용하면 표준이 아닌 HTML 속성도 다룰 수 있음.
// 01. 속성에 접근하기: Element.getAttribute('속성')
// 02. 속성 추가(수정)하기: Element.setAttribute('속성', '값')
// 03. 속성 제거하기: Element.removeAttribute('속성')

// 8. 스타일 다루기
// 자바스크립트로 태그의 스타일을 다루는 방법에는 크게 두 가지가 있음.
// 01.style 프로퍼티 활용하기: Element.style.styleNme = 'value';
// 02.class 변경을 통해 간접적으로 스타일 적용하기: Element.className, element.classList
// 8-1 clssList의 유용한 메소드
// classList.add / 클래스 추가하기 / 여러 개의 값을 전달하면 여러 클랫 추가 기능
// clssList.remove / 클래스 삭제하기 / 여러 개의 값을 전달하면 여러 클래스 삭제 가능
// classList.toggle / 클래스 없으면 추가, 있으면 삭제 / 하나의 값만 적용 가능, 두번째 파라미터로 추가 or 삭제 기능을 강제할 수 있음.



//** property 와 method 구분**//
// 1. 의미로 구분하기
// property는 속성이라면, method는 행동입니다.
// 예를 들어 listA라는 array가 있을 때, listA.length 는 property, listA.push(1)은 method.

// 2. 사용법으로 구분하기
// javascript method는 함수로 된 property. 함수의 가장 큰 특징! 호출(callable)할 수있다는 것
// 따라서 javascript 에서 괄호로 함수를 호출하므로, 대부분 괄호로 끝나면 method.
// 없으면 property 라 보아도 무방함


//** 이벤트 핸들러 등록하기 **//
//이벤트 핸들로 등록하는 두가지 방법 중 한가지는 dom요소에 접근하여 onclick 프로퍼티 활용하는방법,
//다른 한가지는 HTML 태그에 onclick 속성을 활용하는 방법이 있음(문제가 많아서 잘 사용 하지 않는 방법)
// oncilck 프로퍼티를 활용하는 방법도 innerHTML 이나 className 같은 프로퍼티를 사용 할때 처럼
// 기존에 있던 값을 덮어 쓰기 때문에 일부만 수정하기는 어려운 단점과, 여러개의 이벤트 핸들러를 다룰수도 없음

let btn = documnt.querySelector('#myBtn'); //id로 요소 등록

function event1() {
  console.log('Hi Codeit');  
}

function event2(){
  console.log('Hi codeit')
}
//↑버튼 클릭 시 2가지의 이벤트 등록 함수

// elem.addEventListener(event, handler) 여러 이벤트를 자유롭게 등록
btn.addEventListener('click', event1); //btn 클릭 했을때 event1 출력
btn.addEventListener('click', event2); //btn 클릭 했을때 event2 출력
//이벤트 핸드러를 등록할 때 이름만 전달해줘야함 event1() 이렇게 괄호를 넣으면 등록이 않됨.
// elem.removeEventListener(event, handler) 이벤트 삭제
btn.removeEventListener('click', event2); 
// 삭제시 꼭 외부에 함수를 만들어서 해당 함수의 이름으로 핸들러를 전달 해줘야 함 
// 즉, 등록과 동일하게 등록된 핸들러를 삭제 할 수 있음.




// 이벤트와 이벤트 핸들링, 그리고 이벤트 핸들러
// 이벤트 : 웹 페이지에서 발생하는 대부분의 일(사건)들
//   ex) 버튼 클릭, 스크롤, 키보드 입력, ...

// 이벤트 핸들링 : 자바스크립트를 통해 이벤트를 다루는 일
// 이벤트 핸들러 : 이벤트가 발생했을 때 일어나야하는 구체적인 동작들을 표현한 코드. 이벤트 리스너(Event Listener)라고도 부른다.


/**이벤트 등록하는 방법**/
const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;
// 1.css 선택자(#to-do-list)로 태그 선택하기
// 2.변수에 선택된 태그 담기

function updateToDo(event) {
event.target.classList.toggle('done');
}
// 3. 이벤트 핸들러 선언(이벤트를 다루는) 핸들링

for (let item of items) {
  item.addEventListener('click', updateToDo)
}
// 4.반복문을 활용해서 각 li태그에 이벤트 핸들러를(clikc) 등록

event.target	이벤트가 발생한 요소
event.currentTarget	이벤트 핸들러가 등록된 요소


/**이벤트 버블링**/
// 어떤 하나의 요소에 이벤트가 발생하게 되면 이 요소가 할당된 이벤트 핸들러가 동작하고 거기서 끝이아니라, 이어서 같은 타입의 이벤트에 한해서
// 부모 요소의 핸들러도 동작하게 되는 것, 가장 최상단의 윈도우 객체를 만날 때까지 이 과정이 반복되면서 요소에 각각 할당된 모든 이벤트 핸들러가 동작하는 원리. 자식 요소부터 부모 요소를 거슬러 올라가면서 발생하는 이벤트
<h1 id="title">오늘 할 일</h1>
<ol id="list">
  list
  <li class="item">자바스크립트 공부</li>
  <li class="item">유튜브 시청</li>
  <li class="item">저녁 약속</li>
  <li class="item">독서</li>
  <li class="item">일기</li>
</ol>

const list = document.querySelector('#list');
const items = document.querySelectorAll('.item');

for (let item of items) {
  item.addEventListener('click', function(e) { //클릭 이벤트 등록 이벤트 핸들링
    console.log('item Event'); //클릭 했을 때 item Event 가 출력 하는 핸들로
    console.log(e.target); // 1. target은 이벤트가 발생한 요소 출력 = 부모 요소의 핸들러들이 최초의 이벤트가 발생한 위치 파악
  // item Event
  //   <li class="item">자바스크립트 공부</li>
  // list Evet
  //    <li class="item">자바스크립트 공부</li>  //버블링
    console.log(e.currentTarget); // 2. 이벤트 핸들러가 등록된 요소 = 실제로 이벤트 핸들러가 동작하는 요소 출력
	// item Event
  //   <li class="item">자바스크립트 공부</li>
  // list Evet
  //    <ol id="list">...</ol>  //버블링
    e.stopPropagation(); // 이벤트 버블링 막기, 권장하지 않음
  });
}

//***캡처링(captyring) (버블링과 반대로 내려가는 ) 실제로로 자주쓰이지 않음.
// 캡처링 단계: 이벤트가 하위 요소로 전파되는 단계
// 타깃 단계: 이벤트가 실제 타깃 요소에 전달되는 단계
// 버블링 단계: 이벤트가 상위 요소로 전파되는 단계
<body>
  <div>DIV
    <ul>UL
      <li>LI</li>
    </div>
  </form>
  
  <script>
    for (let elem of document.querySelectorAll('*')) {
      elem.addEventListener("click", e => alert(`캡쳐링 단계: ${elem.tagName}`), true);
      elem.addEventListener("click", e => alert(`버블링 단계: ${elem.tagName}`));
    }
  </script>
 </body>
 // 캡쳐링 단계에서 이벤트 핸들러를 동작시키려면, addEventListener에 세번째 프로퍼티에 true 또는 { capture:true }를 전달하면 됩니다.

//  이벤트 객체의 target 프로퍼티와 classList 프로퍼티의 contains 메소드를 활용

//**이벤트 위임**//
(버블링)처음에는 없다가 새로운 아이템을 추가하는 상황이 발생하게 되면 이벤트 핸들러가 동작하지 않는다.
매번 추가할 때 마다 이벤트 핸들러를 새로 등록해야 할 때 해결 할 수 있는 이벤트 위임
부모 요소가 자식 요소에서 발생한 이벤트를 감지할 수 있고 이벤트 객체에 target프로퍼티가 항상 이벤트 발생 위치를 담고 있기때문에 
부모 요소인 리스트에 이벤트 핸들러를 하나만 등록해줘도 모든 자식 요소의 이벤트를 다룰 수 있다.[Event Delegation]
자식 요소의 이벤트를 부모 요소에 위임 했다고 이해하면 됨

const list = document.querySelector('#list');

list.addEventListener('click', function(e) {  //부모요소에 직접 이벤트등록
	// if (e.target.tagName === 'LI') 대체 가능
	if (e.target.classList.contains('item')) { //item 속성이 포함 되어있는 요소 중에
		e.target.classList.toggle('done'); //true면 done을 실행
	}
});

//위임 전 비교 자식요소에 등록 했을 경우
for (let item of list.childre) { //list의 자식요소에 등록하여 반복
  item.addEventListener('click', function(e) {
    e.target.classList.toggle('done');
  })
}



//**브라우저의 기본동작**//
//예를 들어 마우스 오른쪽 버튼을 클릭하면 상황에 맞는 메뉴 창이 뜬다거나, input 태그에 커서를 두고 키보드 키를 누르면 해당 값이 입력된다거나..
// preventDefault 메소드를 통해 막을 수가 있습니다만, 역활과 의미를 훼손하기 때문에 꼭 필요한 경우에만 주의해서 사용

const link = document.querySelector('#link');
const checkbox = document.querySelector('#checkbox');
const input = document.querySelector('#input');
const text = document.querySelector('#text');

link.addEventListener('click', function(e) { //클릭을 했을 경우
	e.preventDefault(); //preventDefault 메소드로 막음
	alert('지금은 이동할 수 없습니다.'); // 경고창이 뜸
});

input.addEventListener('keydown', function(e) { //키다운
	if (!checkbox.checked) {
		e.preventDefault();
		alert('체크박스를 먼저 체크해 주세요.');  // 경고창이 뜸
	}
});

document.addEventListener('contextmenu', function(e) { //오른쪽 클릭
	e.preventDefault();
	alert('마우스 오른쪽 클릭은 사용할 수 없습니다.'); // 경고창이 뜸
});



//**마우스 버튼 이벤트**//
//마우스 버튼을 눌렀을 때 일어난 이벤트에 대해서 어떤 버튼을 눌러서 일어난 이벹느인지 알아낼 수 있음.
1. MouseEvent.button
0 = mouse 왼쪽 버튼
1 = mouse 휠
2 = mouse 오른쪽 버튼
3 = x1(일반적으로 브라우저 뒤로 가기 버튼)
4 = X2(일반적으로 브라우저 앞으로 가기 버튼)
//mouseenter, mouseleave, mouseover, mouseout, mousemove 처럼 마우스 이동과 관련된 이벤트에서는 이 이값이 null이나 undefined가 아니라 0임.
// 왼쪽 버튼을 클릭했을 경우 마우스를 눌렀따가 뗀 동작이기 때문에 mousedown,mouseup,click 까지 총 3개의 이벤트가 발생

2.MouseEvent.prototype (type)
mousedown = 마우스 버튼을 누르는 순간
mouseup - 마우스 버튼을 눌렀따 떼는 순간
cilck = 왼쪽 버튼을 클릭한 순간
dblclick = 왼쪽 버튼을 빠르게 두번 클릭한 순간 //클릭 이벤트가 두번 발생하고 나서 더블클릭 이벤트가 발생
contextmenu = 오른쪽 버튼을 클릭한 순간
mousemove = 마우스를 움직이는 순간
mouseover = 마우스 포인터가 요서 위로 올라온 순간
mouseout = 마우스 포인터가 요소에서 벗어나는 순간
mouseenter = 마우스 포인터가 요소 위로 올라온 순간(버블링이 일어나지 않음)
mouseleave = 마우스 포인터가 요소에서 벗어나는 순간(버블링이 일어나지 않음)


const box2 = document.querySelector('#box2');

function printEventData(e) {
  console.log('event:', e.type);
  console.log('target:', e.target);
  console.log('relatedTarget:', e.relatedTarget);
  console.log('------------------------------------');
  if (e.target.classList.contains('cell')) {
    e.target.classList.toggle('on');  //toggle 메소드를 활용하면 mouseover에서 클래스가 추가되고 mouseout에서 클랙스가 삭제 되는 방식
  } // 자식 요소의 클래스를 toggle을 할때 mouseover와 mouseout로 이벤트 위임을 활용
}

box2.addEventListener('mouseover', printEventData);
box2.addEventListener('mouseout', printEventData);




3.MouseEvent.위치프로퍼티
clientX, clientY = 마우스 포인터의 브라우즈 표시 영역에서의 위치  //항상 대상의 좌측 상단의 모서리 위치를 (0, 0)으로 계산
pageX, pageY = 마우스 커서의 문서 영역에서의 위치  //client 값과 혼동하기 쉬우니 잘 구분
OffsetX, offsetY = 마우스 포인터의 이벤트 발생한 요소에서의 위치  //항상 대상의 좌측 상단의 모서리 위치를 (0, 0)으로 계산
screenX, screenY = 마우스 포인터의 모니터 화면 영역에서의 위치


const box1 = document.querySelector('#box1');

function onMouseMove(e) {
  console.log(`client: (${e.clientX}, ${e.clientY})`); //화면에 표시되는 창을 기준
  console.log(`page: (${e.pageX}, ${e.pageY})`);  //문서 전체
  console.log(`offset: (${e.offsetX}, ${e.offsetY})`);
  console.log('------------------------------------');
}

box1.addEventListener('mousemove', onMouseMove);





4.MouseEvent.relatedTarget
mouseenter, mouseleave, mouseover, mouseout 이벤트에는 relatedTarget이라는 프로퍼티가 존재
target 프로퍼티가 이벤트가 발생한 요소를 담고 있다면, relatedTarget 프로퍼티는 이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소를 담고 있음. 비슷하지만 서로 다른 두 프로퍼티를 잘 구분해서 기억.
마우스 이동 경로를 파악할 때도 유용하게 활용 (mouseover일때 target이 box2이고 relatedTarget이 cell-4이니까 cell-4에서 box2로 마우스가 이동했다는 걸 파악)


-------------------청기백기 실습 예시--------------------

const flagBlue = document.querySelector('.flag-blue');
const flagWhite = document.querySelector('.flag-white');

function reset() {
  document.querySelector('.up').classList.remove('up');
}

// 1. flagUp 함수
function flagUp(e) {

if (e.button === 0) { //마우스 이벤트가 마우스 왼쪽 버튼을 눌러서 발생
  flagBlue.classList.add('up'); // flagBlue 에 up이라는 클래스 속성 추가
} else if (e.button === 2) { //마우스 오른쪽 버튼을 눌러서 발생
  flagWhite.classList.add('up'); // flagWhite 에 up이라는 클래스 속성 추가
}

  // 500 밀리초 뒤에 reset함수를 실행
  setTimeout(reset, 500);
}

// 2. 마우스 오른쪽 버튼 클릭시 나타나는 브라우저 기본동작 막기
document.addEventListener('contextmenu', function (e) {
e.preventDefault(); // 이벤트 객체의  preventDefault 메소드를 사용하여 막기
});

document.addEventListener('mousedown', flagUp); //  flagUp 함수는 document 객체의 mousedown 타입의 이벤트 핸들러로 등록
-------------------------------------------------------------------




//**KeyboardEvent.type 키보드**//
1.이벤트 타입
keydown = 키보드의 버튼을 누르는 순간
keypress = 키보드의 버튼을 누르는 순간 ('a', '5'등 출력이 가능한 키에서만 동작하며, Shift,Esc 등의 키에는 반은하지 않음)
keyup = 키보드의 버튼을 눌렀따 떼는 순간

2.KeyboardEvent.key vs KeyboardEvent.code
키보드 이벤트 객체에는 key 와 code 프로퍼티가 자주 사용
key는 사용자가 누른 키가 가지고 있는 값을 나타냄
code는 누른 키의 물리적인 위치를 나타냄



//**input태그 다루기**//
input 태그는 말 그대로 입력의 역할
1.이벤트 타입
focusin = 요소에 포커스가 되는 순간
focusout = 요소에 포커스가 빠져나가는 순간
focus = 요소에 포커스가 되는 순간 (버블링이 일어나지 않음)
blur = 요소에 포커스가 빠져나가는 순간 (버블링이 일어나지 않음)
change = 입력된 값이 바뀌는 순간
input = 값이 입력되는 순간
select = 입력 양식의 하나가 선택되는 순간(체크박스나 토글)
submit = 폼을 전송하는 순간





//**스크롤 이벤트**//
scroll 이벤트는 보통 window 객체에 이벤트 핸들러를 등록하고 window 객체의 프로퍼티와 함께 자주 활용
특히 scrollY 프로퍼티를 활용하면 스크롤된 특정한 위치를 기준으로 이벤트 핸들러가 동작하게 하거나
혹은 스크롤 방향 (위로 스크롤 중인지 / 아래로 스크롤 중인지)을 기준으로 이벤트 핸들러가 동작하게끔 활용할 수 있음.

