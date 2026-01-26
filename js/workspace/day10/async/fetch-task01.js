// https://jsonplaceholder.typicode.com/posts
// 서버로 데이터 요청 후 post 데이터 중 body 데이터로 바꿔서 출력

console.log(fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())  //JSON ->JS
.then((content) => content.map((data) => data.body))
.then((bodies) => {
  console.log(bodies);
}));
