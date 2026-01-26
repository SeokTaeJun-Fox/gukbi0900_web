//try ~ catch문 안에 비동기코드가 작업 되었다면,
//해당코드는 예외를 잡을 수 없다.
// try{
//   console.log("코드 실행1");
//   setTimeout(() => {
//     num2;
//   }, 5000)
//   console.log("코드 실행2");
// } catch(error) {
//   console.log("catch로 잡음");
// }

// 해결 방법 (비동기안에 try catch문을쓴다)
// try{
//   console.log("코드 실행1");
//   setTimeout(() => {
//     try {
//       num2
//     } catch(error) {
//       console.log("비동기 코드 오류 잡기");
//     }
//   }, 5000)
//   console.log("코드 실행2");
// } catch(error) {
//   console.log("catch로 잡음");
// }

//확장 : Surround
//ctrl + shift + T 단축키
//기능 : 영역 선택후 if,trycatch문등 코드를 감쌀수 있다.
try {
  num2
} catch(err) {
  console.log("예외 발생");
} finally {
  // 외부의 리소스를 해제할 때 사용
  console.log("예외가 발생해도, 발생하지 않아도 반드시 실행하는 코드");
}
