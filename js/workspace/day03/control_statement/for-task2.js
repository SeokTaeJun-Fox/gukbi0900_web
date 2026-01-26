// 1번 문제: 1~100까지 짝수만 출력해보기
// for(let i = 0; i < 100; i++)
// {
//   let num = i+1;
//   if(!(num % 2))
//     console.log(num);
// }

// 2번 문제: 0~9까지 반복 후 "12345678910" 출력하기
// 초기값의 중요성
// 초기값이 0이라면 연산
// result = result + i + 1
// 초기값이 ""이라면 연결
// result = result + i + 1
// let printText = "";
// for(let num = 0; num < 10; num++)
// {
//   printText += num + 1;
// }
// console.log(printText);

// 3번 문제: 1~10까지 반복후 i값이 홀수면 "홀수", 짝수만 "짝수" 출력하기
// for(let i = 0; i < 10; i++)
// {
//   let num = i+1;
//   let oddCheck = num%2 ? "홀수" : "짝수"
//   console.log(`i : ${num}, ${oddCheck}`);
// }

// 4번 문제: 1~20까지 중 3의 배수 출력하기
// for(let i = 0; i < 20; i++)
// {
//   let num = i+1;
//   if(!(num%3))
//     console.log(num);
// }

// 5번 문제: 1~100까지 누적합 구하기
// let total = 0;
// for(let i = 0; i<100; i++)
// {
//   let num = i + 1;
//   total += num;  
// }
// console.log(total);

// 6번 문제: 1~100까지 홀수만 모두 더해서 출력
// let oddSum = 0;
// for(let i = 0; i < 100; i++)
// {
//   let num = i+1;
//   if(num%2)
//     oddSum += num;
// }
// console.log(oddSum);

// 7번 문제: 1~77까지 수 중 홀수의 개수 구하기
// let oddCount = 0;
// for(let i = 0; i < 77; i++)
// {
//   let num = i+1;
//   if(num%2)
//     oddCount++;
// }
// console.log(oddCount);