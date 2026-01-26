// 성과 이름을 더한 결과 값을 출력해주는 함수
const print = (content) => {
  console.log(content);
}

const makeYourName = (firstName, lastName, callback) => { //함수 매개변수명을 callBack이라고 짓자
  let yourName = firstName + lastName;
  callback(yourName);
}

// makeYourName("못생긴", "놈", function(fullname){
//   console.log(fullname);
// });

makeYourName("못생긴", "놈", print);

// 두 정수의 곱셈 결과를 출력 (출력은 print)
const multiplex = (num1, num2, callback) => {
  callback(num1*num2);
}

multiplex(10, 20, print);

// 두 정수를 받아서 큰 값의 결과를 출력해주는 콜백함수 로직
const findBiggestNumber = (num1, num2, callback) => {
  let biggestNumber = num1 > num2 ? num1 : num2;
  callback(biggestNumber);
}

findBiggestNumber(10, 20, print);