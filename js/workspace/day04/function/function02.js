// 디폴트 파라미터(default parameter)
function add(num1, num2 = 0, num3 = 0){
  console.log(num1);
  return num1 + num2 + num3
}

// 함수의 응용
add(20, 30, 40) + 20;

// 익명 함수
// function(){}

// 즉시 실행함수
// ()()

// 화살표 함수 (ES6)
//위에꺼와 아래꺼는 같은의미
// this 바인딩 차이
// () => {}
const printName = (yourName) => 
{
  console.log(yourName);
}

function printName2(yourName)
{
  console.log(yourName);
}