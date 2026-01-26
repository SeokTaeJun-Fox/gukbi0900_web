// 1. 10 ~ 1까지 Array에 담은 후 짝수만 출력하기
const arr1 = new Array(10)
  .fill(0)
  .map((_, i, arr) => arr.length - i)  //10~1저장 배열
  .filter((data) => !(data%2))
  .forEach((data) => console.log(data));

// 2. 한글을 숫자로
// ex) "일이삼사" -> "1234"
// const hangeul = Array.of("공", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구");
// const start = "이공칠팔구";
// const arr2 = start.split("")
//                   .map((data) => hangeul.indexOf(data))
//                   .join("");
// console.log(arr2);

// 3. 숫자를 한글로
// ex) "1234" -> "일이삼사"
// const hangeul = Array.of("공", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구");
// const start = "20789";
// const arr3 = start.split("")
//                   .map((data) => hangeul[parseInt(data)])
//                   .join("");
// console.log(arr3);

// 1~100까지 합을 출력
const result2 = new Array(100).fill(0).reduce((acc, cur, i, arr) => acc + i + 1, 0);
console.log(result2);

// 4. 문자열을 반대로 출력하기
// ex) "apple" -> "elppa"

const result4 = new Array();
const start = "apple";
start.split("").forEach((data, i, arr) => {
  result4.push(arr[arr.length - i - 1]);
})

const result40 = start.split("").reduce((acc, cur, i, arr) => {
  return acc + arr[arr.length - i - 1]
}, "");

console.log(result4.join(""));
console.log(result40);

// 5. 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1224-1225
// result) 010-****-1225

const input = "010-1234-5678";
const result5 = input
  .split("-")
  .map((data, i) =>
    {
      if(i === 1)
        return "****";
      else
        return data;
    })
  .join("-");

console.log(result5);

//======================================
/*
// 1. 10 ~ 1까지 Array에 담은 후 짝수만 출력하기
new Array(10)
  .fill(0)
  .map((data, i) => 10 - i)
  .filter((data) => data % 2 === 0)
  .forEach((data) => console.log(data))

// 2. 한글을 숫자로
// ex) "일이삼사" -> "1234"
const changeNumbers = (input) => {
  const hangles = "공일이삼사오육칠팔구"
  const hangle = input.split("")
  return hangle.map((c) => hangles.indexOf(c)).join("")
}

let result2 = changeNumbers("공공칠칠")
console.log(result2)

// 3. 숫자를 한글로
// ex) "1234" -> "일이삼사"
const changeHangles = (input) => {
  const hangles = "공일이삼사오육칠팔구"
  const hangle = input.split("")
  return hangle.map((c) => hangles.charAt(c)).join("")
}

let result3 = changeHangles("0088")
console.log(result3)

// 4. 1~100까지 합을 출력
const arr1 = new Array(100).fill(0).map((_, i) => i + 1)
const total = arr1.reduce((acc, curr) => acc + curr, 0)
console.log(total)

// 5. 문자열을 반대로 출력하기
// ex) "apple" -> "elppa"
const str1 = "apple".split("").reverse().join("")
console.log(str1)

// 6. 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1224-1225
// result) 010-****-1225
const parsePhone = (phoneNumber) => {
  if(typeof(phoneNumber) !== "string"){
    phoneNumber = String(phoneNumber)
  }

  if(!phoneNumber.includes("-")){
    return "양식이 맞지 않습니다.\nex)010-0000-0000"
  }

  const arrPhone = phoneNumber.split("-")
  let temp = arrPhone[1]
  arrPhone[1] = "****"
  return arrPhone.join("-")
}

let result6 = parsePhone("010-0000-1234")
console.log(result6)
*/