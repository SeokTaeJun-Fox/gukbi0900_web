// 화살표 함수 연습
// 모든 함수를 화살표 함수로 정의
// *단 반드시 상수(const) 키워드를 사용해야 한다
// const count01 = (num1, num2, num3, num4, num5) => {
//   let count0 = 0;
//   let count1 = 0;

//   if(num1 === 0)
//     count0++;
//   else if(num1 === 1)
//     count1++;

//   if(num2 === 0)
//     count0++;
//   else if(num2 === 1)
//     count1++;

//   if(num3 === 0)
//     count0++;
//   else if(num3 === 1)
//     count1++;

//   if(num4 === 0)
//     count0++;
//   else if(num4 === 1)
//     count1++;

//   if(num5 === 0)
//     count0++;
//   else if(num5 === 1)
//     count1++;

//   return `0의 개수 ${count0}개, 1의 개수 ${count1}개`;
// }

// console.log(count01(0,0,1,1,1));

// 1. 0과 1 중 무작위로 5개 값을 입력하면 0의 개수와 1의 개수를 반환해주는 함수
// ex) countZero(0, 0, 1, 1, 1)
// ex) 0의 개수 2개, 1개의 3개

// 2. 정수(n)를 넘기면 정수까지 모두 더해주는 함수
// ex) sum(10)
// ex) 55
const sum = (num = 0) => {

  let total = 0;

  for (let i = 0; i < num; i++)
  {
    let inNum = i + 1;
    total += inNum;
  }

  return total;
}

console.log(sum(20));
