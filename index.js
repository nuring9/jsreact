
//**태그 선택하기**/

//1. id로 태그 선택하기
const myTag = document.getElementById('btns');
console.log(myTag);
// 딱 그 태그만 보여주는게 아니라 해당태그 내부에 있는 모든 내용들이 표시
//없는 id를 불러오면 null값이 리턴

//2. class로 태그 선택하기 // 배열은 아니지만 유사배열 //요소의 순서는 위에서 차례대로
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



//3. 태그 이름으로 태그를 선택, HTML 문서 내에 있는 모든 button 태그를 선택
const btns = document.getElementsByTagName('button');


//4. css 선택자로 태그 선택하기
const myTag = document.querySelector('#myNunber');
console.log(myTag);
const myTag2 = ducument.getElementById('myNunber');
console.log(myTag2);
//querySelector 와 getElementById 는 같은 개념
//<div id ="myNunmber">0</div> 출력됨


const myTag = document.querySelector('.color-btn');
console.log(myTag);
// <button class="color-btn red" date-color="#FF0000"></btuuon>
// 첫번째 선택됨
//없는 요소를 선택할 경우 null

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
item.classList.add('done'); 
//toggle 있으면 제거 , 없으면 추가 하는 메소드 (자주 사용하지 않음)
today.classList.toggle('done');
//두번째 파라미터(쉼표 뒤) true로 입력할 경우 add 기능만 하고, false 입력할 경우 remove의 기능만 하다록 강제 역할




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

