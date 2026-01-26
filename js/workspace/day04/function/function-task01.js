// 1. 이름을 전달하면 이름을 다섯번 출력해주는 함수
// function fiveTimePrint(yourName)
// {
//   for(let i = 0; i < 5; i++)
//     console.log(yourName);
// }

// fiveTimePrint("못생긴 놈");

// 2. 3개를 전달하면 3개를 모두 더해서 반환해주는 함수
// function sum(num1, num2, num3)
// {
//   if (num2 === undefined)
//   {
//     return num1;
//   }

//   if (num3 === undefined)
//   {
//     return num1 + num2;
//   }

//   return num1 + num2 + num3;
// }

// let result = sum(22, 44, 33);
// console.log(result);

// 3. 성과 이름을 받아서 풀네임을 출력해주는 함수
// function makeFullName(firstName, lastName)
// {
//   console.log(firstName + lastName);
// }

// makeFullName("못생긴", "놈");

// 4. 2개를 전달 받아서 큰 값을 비교해서 결과를 반환해주는 함수
// function getBiggestNumber(num1, num2)
// {
//   if(num1 === num2)
//   {
//     return "두 수가 같습니다."
//   }
//   else if(num1 > num2)
//   {
//     return `큰 수 : ${num1}`;
//   }
//   else
//   {
//     return `큰 수 : ${num2}`;
//   }
// }

// let result = getBiggestNumber(20, 10);
// console.log(result);

// 5. 1개를 전달 받아서 홀수인지 짝수인지 비교해서 결과를 반환해주는 함수
// function checkNumberType(num1)
// {
//   return num1%2 ? "홀수" : "짝수";
// }

// let answer = checkNumberType(20);
// console.log(answer);