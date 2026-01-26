// 1. 1~10까지 누적합 구하기
// const result = new Array(10).fill(0).map((_, i) => i + 1).reduce((acc, cur, i, arr) => acc + cur, 0);
// console.log(result);

// 2. 1~50까지 짝수만 배열에 담고 배열안에 값에 3을 곱한값으로 변경 후 출력
// const result2 = new Array(50).fill(0).map((_, i) => i + 1)
//                   .filter((data) => data % 2 === 0)
//                   .map((data) => data*3);
// console.log(result2);

// 3. 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬하기
// const result3 = Array.of(10, 20, 30, 40, 50).sort((a, b) => b-a);
// console.log(result3);

// 4. 1~10까지 배열에 담고 5보다 크다면 값을 2배로 변경 후 출력하기
// const result4 = new Array(10).fill(0).map((_, i) => i + 1)
//                   .map((data) => {
//                     if(data > 5)
//                     {
//                       return data * 2;
//                     }
//                     else
//                     {
//                       return data;
//                     }
//                   })
// console.log(result4);

// 5. 1~30까지 배열에 담고 홀수 값들만 "*" 붙여서 출력하기
// ex) const arrTask1 = 1*3*5*7*9*11*13...

const arrTask1 = new Array(30).fill(0).map((_, i) => i + 1)
                .filter((data) => data%2 === 1)
                .map((data) => data + "*")
                .join("");
console.log(arrTask1);

// 6. arrTask1에 들어간 *을 제거하고 배열에 담아 기존에 값을 2배로 변경 후 모두 출력하기
const result6 = arrTask1.split("*").map((data) => data*2);
result6.pop();
console.log(result6);

// 7. 1~20까지 배열에 담고 배열의 든어간 값 중 뒤에서 5개 값만 더해서 출력하기
const result7 = new Array(20).fill(0).map((_, i) => i + 1)
                  .slice(-5)
                  .reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(result7);

// filter, for,  for of in, forEach, reduce, map, while, if, switch 사용 금지
// 8. 들어간 글자 개수 맞추기
// ex) "abcdrweasdad", "a"
// "a" -> 3개

// const countLetter = (str, chr) =>
// {
//   const count = str.split("").reduce((acc, cur, i, arr) => cur === chr ? acc + 1 : acc, 0);
//   return count;
// }

// const letter = "appledpppslkph";
// const chr = 'p';

// console.log("갯수 : " + countLetter(letter, chr));

// const countLetter = (str, chr) =>
// {
//   const count = str.split(chr);
//   return count.length - 1;
// }

// console.log(countLetter("daasdfjaklsdjflasdf", "a"));

//다른 풀이
const data = "abcdrweasdad";

const countChar1 = (str, c) => {
  return str.split(c).length - 1
}

console.log(countChar1(data, "a"))

const countChar2 = (str, c) => {
  return str.length - str.replaceAll(c, "").length
}

console.log(countChar2(data, "a"))

const countChar3 = (str, c) => {
  const sortedString = str.split("").sort().join("")
  return sortedString.lastIndexOf(c) - sortedString.indexOf(c) + 1
}

console.log(countChar3(data, "a"))
