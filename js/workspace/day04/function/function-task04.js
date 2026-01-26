// * 값은 모두 변수에 담을 것
// 브론즈
// 1. 3개의 정수를 받아서 3개를 모두 빼주는 함수
// const minusAll = (num1, num2, num3) => {
//   let total = 0 - num1 - num2 - num3;
//   return total;
// }

// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
//  let answer = minusAll(num1, num2, num3);
// console.log(answer);

// 2. 어떤 값을 받으면 값을 출력해주는 함수
// const printValue = (value) => {
//   console.log(value);
// }

// let value = 20;
// printValue(value);

// 3. 이름과 나이를 전달하면 이름, 나이, 만나이를 출력해주는 함수
// const printNameAndAgeInformation = (yourName, age) => {
//   let maan = age - 1;
//   let information = `이름 : ${yourName}, 나이 : ${age}, 만나이 : ${maan}`;
//   console.log(information);
// }

// let yourName = "못생긴 놈";
// let age = 20;
// printNameAndAgeInformation(yourName, age);

// 실버
// 1. 홍길동을 n번 출력해주는 함수
// const printHongNTime = (printTime) => {
//   const printName = "홍길동";

//   for(let i = 0; i < printTime; i++)
//   {
//     console.log(printName);
//   }
// }
// printHongNTime(5);

// 2. 어떤 값을 전달하면 그 값까지 모두 더해주는 함수
// const sumAll = (...value) => {
//   let total = 0;
//   for(let i = 0; i < value.length; i++)
//   {
//     total += value[i];
//   }
//   console.log(total);
// }

// let num1 = 10, num2 = 20, num3 = 30, num4 = 40, num5 = 50, num6 = 60;
// sumAll(num1, num2, num3, num4, num5, num6);

// 골드
// 1. 1~n까지 중 홀수만 출력해주는 함수
// const printOddNumber = (num) => {
//   for(let i = 0; i < num; i++)
//   {
//     let targetNum = i + 1;
//     targetNum % 2 && console.log(targetNum); 
//   }
// }

// const num = 100;
// printOddNumber(num);

// 2. 1~n까지 중 짝수의 합을 더하고 
// 만약 n값이 100이 넘는다면 100까지만 더한 값을 반환해주는 함수
// const sumEven = (num) => {
//   let total = 0;
//   for(let i = 0; i < num; i++)
//   {
//     let realNum = i+1;

//     if(realNum > 100)
//       return total;

//     !(realNum % 2) && (total += realNum);
//   }

//   return total;
// }

// let num = 102;
// let answer = sumEven(num);
// console.log(answer);

// 3. 문자열과 찾을 문자를 입력 받고
// 문자열에서 문자의 개수를 반환해주는 함수
// const countTargetChar = (targetString, targetChar) => {
//   let count = 0;
//   for(let i = 0; i < targetString.length; i++)
//   {
//     if(targetString[i] === targetChar)
//       count++;  
//   }
//   return count;
// }

// let targetString = "goeijeokbulchamja";   //고의적불참자
// let targetChar = 'j';
// let answer = countTargetChar(targetString, targetChar);
// console.log(answer);

// 플레티넘
// 1. 값을 3개 입력받아서 제일 큰 값과 작은 값을 알려주는 함수
// const findBiggestAndSmallestNumber = (num1, num2, num3) => {
//   let biggestNumber;
//   biggestNumber = num1 > num2 ? num1 : num2;
//   biggestNumber = biggestNumber > num3 ? biggestNumber : num3;

//   let smallestNumber;
//   smallestNumber = num1 < num2 ? num1 : num2;
//   smallestNumber = smallestNumber < num3 ? smallestNumber : num3;

//   let information = `제일 큰 값 : ${biggestNumber}, 제일 작은 값 : ${smallestNumber}`;
//   console.log(information);
// }

// let num1 = -1;
// let num2 = -10;
// let num3 = -100;
// findBiggestAndSmallestNumber(num1, num2, num3);

// 2. 문자열을 입력하고, 문자열에서 지울 문자를 입력받아 지워주는 함수
// ex) myFuc("apple", a) 
// 결과: pple
// const eraseString = (targetString, eraseChar) =>
// {
//   let result = "";
//   for(let i = 0; i < targetString.length; i++)
//   {
//     if(targetString[i] !== eraseChar)
//       result += targetString[i];
//   }
//   return result;
// }

// let targetString = "goeuijeokbulchamja" //고의적 불참자
// let eraseChar = 'e';
// let answer = eraseString(targetString, eraseChar);
// console.log(answer);

// 다이아
// 1. 한글을 정수로 바꿔주는 함수 (일공이사 -> 1024)
// const convertHangeulToInt = (hangeul) => {
//   let result = "";
//   for(let i = 0; i < hangeul.length; i++)
//   {
//     switch(hangeul[i])
//     {
//       case "공":
//         result += "0";
//         break;
//       case "일":
//         result += "1";
//         break;
//       case "이":
//         result += "2";
//         break;
//       case "삼":
//         result += "3";
//         break;
//       case "사":
//         result += "4";
//         break;
//       case "오":
//         result += "5";
//         break;
//       case "육":
//         result += "6";
//         break;
//       case "칠":
//         result += "7";
//         break;
//       case "팔":
//         result += "8";
//         break;
//       case "구":
//         result += "9";
//         break;
//     }
//   }

//   if(result.length !== 0)
//     result = parseInt(result);
//   return result;
// }

// let hangeul = "일구이사구";
// let answer = convertHangeulToInt(hangeul);
// console.log(answer);

//다른 풀이
// const changeToInteger = (hangle) => {
//   const hangles = "공일이삼사오육칠팔구"
//   let result = ""
//   for(let i = 0; i < hangle.length; i++){
//     result += hangles.indexOf(hangle.charAt(i))
//   }
//   return result
// }

// let result6 = changeToInteger("일공이사")
// console.log(result6)

// 2. 정수를 한글로 바꿔주는 함수 (1024 -> 일공이사)
// const convertIntegerToHangeul = (num) => {
//   let result = "";
//   let stringNum = String(num);
//   for(let i = 0; i < stringNum.length; i++)
//   {
//     switch(stringNum[i])
//     {
//       case "0":
//         result += "공";
//         break;
//       case "1":
//         result += "일";
//         break;
//       case "2":
//         result += "이";
//         break;
//       case "3":
//         result += "삼";
//         break;
//       case "4":
//         result += "사";
//         break;
//       case "5":
//         result += "오";
//         break;
//       case "6":
//         result += "육";
//         break;
//       case "7":
//         result += "칠";
//         break;
//       case "8":
//         result += "팔";
//         break;
//       case "9":
//         result += "구";
//         break;
//     }
//   }
//   return result;
// }

// let num = "20479";
// let answer = convertIntegerToHangeul(num);
// console.log(answer);

//다른풀이
// const changeToHangle = (number) => {
//   number = String(number)
//   const hangles = "공일이삼사오육칠팔구"
//   let result = ""
//   for(let i = 0; i < number.length; i++){
//     result += hangles.charAt(number.charAt(i))
//   }
//   return result
// }

// let result7 = changeToHangle(7788)
// console.log(result7)
