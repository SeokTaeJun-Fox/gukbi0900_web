// 1. 10 ~ 1까지 출력하기
// for(let i = 0; i < 10; i++)
// {
//   let num = 10 - i;
//   console.log(num);
// }

// 1 ~ n 까지의 모든 합을 구하기
let n = 70;
let sum = 0;
for(let i = 0; i < n; i++)
{
  let num = i + 1;
  sum += num;
}
console.log(sum);