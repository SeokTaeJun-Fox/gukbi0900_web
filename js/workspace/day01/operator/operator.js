//단항 연산자
let num = 10;
// console.log(++num); //전위식
// console.log(num++); //후위식
// console.log(num);

let isBoolean = false;
// console.log(!isBoolean);

//값이 있을 때 true, 없을 때 false
//! 연산자의 결과값은 반드시 boolean 타입이다.
// console.log(!10);
// console.log(!0);
// console.log(!num);

// let num1 = 100;
// let num2 = 17;

//console.log(num1 + num2); //117
//console.log(!num1 + num2); //17

//console.log(num1 - num2); //83
//console.log(num1 - !num2); //100

//console.log(num1 * num2); //1700

// **나머지 연산자 (%)
//console.log(10 % 3); //1

// 몫 연산자 (/)
//console.log(10 / 3);

//할당 연산자 (누적복합연산자)
//let money = 0;
//money += 100000;  // money = money + 100000
//money /= 300;     // money = money / 300
//money *= 10;      // money = money * 10

//console.log(money);

//관계 연산자
//console.log(10 == "10");  //js는 "10"을 정수10으로 바뀐다. > 유연성
//console.log(10 === "10");  //타입까지 완벽하게 비교한다. 

//논리 연산자
//|| (or)
//&& (and)

//논리 연산자의 특징
// 초기값
console.log(10 != 10 || "홍길동");  //앞에있는값이 false면 뒤에있는값 리턴 ("홍길동")

//삼항 연산자(?:)
//조건식이 1개일 때
let resutlt = true ? "true일 때" : "false일 때";  //result = "true일 때"
