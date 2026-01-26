// 어떤 값을 받으면 그 값을 콘솔에 출력해주는 함수
// 함수의 선언
function print(data)
{
  console.log(data);
}

// 성과 이름을 받아서 풀네임을 출력해주는 함수 선언 및 사용
function makeYourName(firstName, lastName)
{
  console.log(firstName + lastName);
}

// 사용
print("홍길동");
makeYourName("못생긴 ", "놈");

//반환형 함수
function add(num1, num2)
{
  return num1 + num2;
}

console.log(add(10, 20));

// 이름 + "님"을 붙여서 반환해주는 함수
function addNim(yourName)
{
  return yourName + "님";
}

let yourName = addNim("못생긴 놈");
console.log(yourName);
