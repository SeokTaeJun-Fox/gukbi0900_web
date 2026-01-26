// 심화 문제
// 1번 문제: 0~10까지 5만 빼고 출력
// for(let i = 0; i < 11; i++)
// {
//   let num = i;
//   if(num === 5)
//     continue;

//   console.log(num);
// }

// 2번 문제: "012340123401234"
// let answer = "";
// for(let i = 0; i < 15; i++)
// {
//   let num = i;
//   answer += (num%5);
// }
// console.log(answer);

// 3번 문제: 1~10까지 제곱값 구하기
// a ** 2 = a * a (파워 제곱 뜻)
// for(let i = 0; i < 10; i++)
// {
//   let num = i+1;
//   let multiplex = num * num;
//   console.log(`${num}의 제곱값 : ${multiplex}`);  
// }

// 4번 문제: 1~100까지 7의 배수의 개수 세기
// let count = 0;
// for(let i = 0; i < 100; i++)
// {
//   let num = i + 1;
//   if(!(num%7))
//   {
//     count++;
//   }
// }
// console.log(`7의배수갯수 : ${count}`);

// 5번 문제: 1~5까지 반복후 아래 결과 만들기
// false, true, false, true, false
// let answer = "";
// for(let i = 0; i < 5; i++)
// {
//   let num = i + 1;
//   let addString = Boolean(i%2);
//   addString += (num === 5) ? "" : ", ";
//   answer += addString; 
// }
// console.log(answer);

// 6번 문제 1~5까지 반복후 아래 결과 만들기
// "00001"
// let answer = "";
// for(let i = 0; i<5; i++)
// {
//   let num = i + 1;
//   answer += parseInt(num/5);
// }
// console.log(answer);

// 7번 문제: 1~20중 10~15를 제외하고 출력하기
// for(let i = 0; i < 20; i++)
// {
//   let num = i + 1;
//   if(num < 10 || num > 15)
//   {
//     console.log(num);
//   }
// }

// 8번 문제: 1~100까지 홀수만 더한 값과, 짝수만 더한 값의 차를 구하여 출력하기
// let oddSum = 0;
// let evenSum = 0;
// let answer = 0;
// for(let i = 0; i < 100; i++)
// {
//   let num = i + 1;
//   if(num%2)
//      oddSum += num 
//   else 
//      evenSum += num;
// }
// answer = oddSum - evenSum;
// console.log(answer);