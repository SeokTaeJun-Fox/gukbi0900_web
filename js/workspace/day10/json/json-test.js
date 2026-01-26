const file = require('fs');

// JSON 파일 읽어오기 (파일 경로, 텍스트 형식, 완료되면 뭐할래?)
// file.readFile("./user.json", 'utf-8', (error, data) => {
//   // JSON -> JS
//   const users = JSON.parse(data);
//   console.log(users);
// });

//동기적으로
// const userJSON = file.readFileSync("./user.json", 'utf-8');
// const users = JSON.parse(userJSON);

// users 데이터에서 이름만 출력하기
// const result = users.map((data) => data.name);
// result.forEach((data) => {
//   console.log(data);
// })

// JSON 파일 생성
const user = {
  yourName : "홍길동",
  age : 20,
  phone : "경기도 구리시",
  email : "test123@gmail.com"
}

const userJSON = JSON.stringify(user);
//writeFile(경로, 데이터, 인코딩, 콜백함수)
file.writeFile("./user2.json", userJSON, "utf-8", (err) => {
  if(err){
    console.log(err)
  }else{
    console.log("파일 생성 완료");
  }
})