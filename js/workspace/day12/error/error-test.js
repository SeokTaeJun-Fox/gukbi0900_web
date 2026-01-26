// 컴파일 오류는 코드에 빨간줄 뜨는 오류 (문법적으로 잘못된 오류)
//let number ++= 10;

// try {
//   // syntaxError: 문법적인 오류가 발생하면
//   // 컴파일러는 코드를 번역하지 않는다. 따라서
//   // try ~ catch문이 실행되지 않는다.
//   //let number ++= 10;
// } catch (error) {
//   console.log("오류가 발생했습니다. 똑바로 쓰세요!");
//   console.log(error);
// }

//ReferenceError : num2 is not defined
//  오류이름                설명

// try {
//   //let num = 10;
//   // console.log("오류가 아님", num / 0);

//   //console.log(num2);

//   const data = {
//     name : "홍길동"
//   }

//   data.test.replace("");

// } catch (error) {
//   console.log("error", error);
//   //console.log("num2는 못 찾았습니다.");
// }

try {

  const data = {
    name : "홍길동"
  }

  data.test.replace("");
  //throw new RangeError();

} catch (error) {
  if(error instanceof ReferenceError) {
    console.log("변수를 찾지 못했습니다.");
  }else if(error instanceof TypeError){
    console.log("잘못된 타입으로 접근했습니다.");
  }else {
    console.log("알 수 없는 오류 발생");
  }
}