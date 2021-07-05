
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
//NodeList 라는 유사배열이(color-btn을 가지고있는) 출력됨
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
const myTag = document.querySelector('#list-1');

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


//***HTML속성다루기***
//1. HTML 속성(HTML attribute)
const tomorrow = documnet.querySelector('#tomorrow')
const item = tomorrow.firstElementChild;
const Link = ite.firstElementChild;

//2. id 속성
console.log(tomorrow); //<ol id="tomorrow" href="https://www.codeit.kr"> ..</ol>
console.log(tomorrow.id); //tomorrow

//3. class 속성
console.log(item); //<li class="item">...</li>
console.log(iem.className); //item

// href 속성
console.log(link); //<a href="링크주소">
console.log(link.href); //링크주소만
console.log(tomorrow.href); //undefined 가 출력(비표준 속성)

//elem.getAttribute('속성') : 속성에 접근하기(비표준 속성에도 접근)
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


