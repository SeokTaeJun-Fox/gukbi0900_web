// 두 정수를 더하고 더한 결과값이 
// 홀수라면 홀수, 
// 짝수라면 짝수를 
// 출력해주는 콜백함수 로직 만들기

const print = (content) => {
  console.log(content);
}

const evenCheck = (target, callback) => {
  let result = target % 2 ? "홀수" : "짝수"
  callback(result);
}

const sum = (num1 , num2, callback) => {
  let sumResult = num1 + num2;
  callback(sumResult);
}

sum(10, 20, (result) => {
  evenCheck(result, print)
})

//다른 풀이

// 두 정수를 더하고 더한 결과값이 
// 홀수라면 홀수, 
// 짝수라면 짝수를 
// 출력해주는 콜백함수 로직 만들기
// const add = (num1, num2, callback) => {
//   callback(num1, num2)
// }

// const isOddOrEven = (data, callback) => {
//   callback(data % 2 === 0 ? "짝수" : "홀수")
// }

// add(10, 20, (total) => {
//   isOddOrEven(total, (OddOrEven) => {
//     console.log(OddOrEven)
//   })
// })
