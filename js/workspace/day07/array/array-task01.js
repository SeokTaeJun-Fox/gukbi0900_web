// forEach 
// 배열에 1~10까지 값을 넣고 짝수만 콘솔에 출력하기
// new Array(10).fill(0).forEach((data, i, arr) => {
//   let num = i + 1
//   arr[i] = num
//   if(!(num % 2)){
//     // continue, break 키워드 사용불가
//     console.log(num)
//   }
// })

const phone = "010-1234-5678";
// array map이용해서 문자열을 12345678로 만들기

// const makeResult = phone.split("-");
// makeResult.shift();

// let result = "";
// makeResult.map((data) => {
//   result += data;
// })

// console.log(result);

// .filter()
const str2 = "abcdefghijk"
// ex) 최종결과 "abcdef"

arr = str2
  .split("")
  .filter((data) => data < 'g')
  .join("");
console.log(arr);

// a의 개수구하기
// "abaacadeaqdtrascaqqaqadrtasqa"
const str3 = "abaacadeaqdtrascaqqaqadrtasqa"
  .split("")
  .filter((data) => data === 'a')
  .length;
console.log(str3);