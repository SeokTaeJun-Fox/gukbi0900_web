// fetch API
// 내장 API
// 서버로 부터 데이터를 요청하는 함수
// https://jsonplaceholder.typicode.com/users

// 비동기 (pending : 대기 상태)
// 상태코드(status) 참조 : https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Status
// 데이터를 body에 숨겨져있기때문에 정보를 숨겨져있다.
/*
const data = fetch("https://jsonplaceholder.typicode.com/users");

  // Response의 메서드
  // .json(): Response 객체에서 json 데이터를 JS 언어로 parse하는 메서드
data.then((response) => response.json())  //Response<Promise> -> Promise
    .then((data) => console.log(data));
    */


// https://jsonplaceholder.typicode.com/todos
// 1. 요청 (fetch)

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => todos.map((todo) => todo.title))
  .then((titles) => console.log(titles))
  .catch(console.error);