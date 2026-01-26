// switch(값) {}

//전화 상담
// 1. 카드 문의
// 2. 통장 문의
// 3. 잔고 확인
// 0. 상담사 연결

let choice = 2;
switch(choice){
  case 1:
    console.log("카드 문의");
    break;
  case 2:
    console.log("통장 문의");
    break;
  case 3:
    console.log("잔고 확인");
    break;
  case 0:
    console.log("상담원 연결");
    break;
  default:
    console.log("카드 문의");
    break;
}