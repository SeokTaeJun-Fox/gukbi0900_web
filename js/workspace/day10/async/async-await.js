// 비동기 -> 동기
// 비동기를 동기로 바꾼게 아니라 동기의 흐름으로 합류 시킨것이다.
// async await(ES6)
// 함수
// https://jsonplaceholder.typicode.com/users
// const getUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users")
//   const datas = await response.json();
//   return datas;
// }

// getUsers()
//   .then(console.log)


// const getTodos = async () => {
//   const response = await fetch()
//   const todos = await response.json();
//   const titles = todos.map((todo) => todo.title)
//   return titles;
// }

// getTodos()
// .then((result) => console.log(result));

//https://jsonplaceholder.typicode.com/todos
const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  //완료 10개만;
  return completedTodos = todos.filter((todo) => todo.completed).slice(0, 10);
}

getTodos()
  .then(console.log);