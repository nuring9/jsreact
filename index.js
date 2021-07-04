
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




