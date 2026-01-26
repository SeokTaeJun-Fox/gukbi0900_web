// https://jsonplaceholder.typicode.com/todos
// 1. todos데이터를 요청 후 값으로 가져온 데이터를 제목: title로 변경 후 출력
// ex) 
// 제목: title1~
// 제목: title2~
// 제목: title3~
// const getTodos = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const datas = await response.json();

//   let count = 1;
//   datas.forEach((todos) => {
//     todos.title = "제목: title" + (count++);
//   })

//   return datas;
// }

// getTodos().then((result) => console.log(result));

// https://jsonplaceholder.typicode.com/comments
// 2. comments데이터를 요청 후 값으로 가져온 데이터 중 email의 아이디만 변경 후 출력
// ex) Eliseo@gardner.biz -> Eliseo
// const getComments = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/comments");
//   const datas = await response.json();
//   datas.forEach((data) => 
//   {
//     data.email = data.email.split("@")[0];
//   });
//   return datas;
// };

// getComments().then(console.log);

// https://jsonplaceholder.typicode.com/comments
// 3.  comments데이터를 요청 후 값으로 가져온 데이터 중 name을 뒤집어서 가져온 후 출력
const getComments = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const datas = await response.json();

  datas.forEach((data) => {
      let newString = "";
      for(let i = 0; i < data.name.length; i++)
      {
        newString = newString + data.name[data.name.length - 1 - i];
      }
      data.name = newString;
  })
  return datas;
}

getComments().then(console.log);

const file = require('fs');