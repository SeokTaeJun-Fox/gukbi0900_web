// 이름 : 여러분들의 성함 // 변수 또는 상수
// 국어: 80점
// 수학: 70점
// 영어: 90점
// 과학: 20점

// 평균, 학점, 구하기

// if문을 사용해서 평균 60점 이상은 합격, 60점 미만은 불합격 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.

let yourName = "못생긴 놈";
let korean = 80;
let math = 70;
let english = 90;
let science = 20;

const cutline = 60;

let total = korean + math + english + science;
let average = total / 4;
let passCheck;

if (average >= cutline)
  passCheck = "합격";
else
  passCheck = "불합격";

let information = `${yourName}님의 이번 총점은 ${total}, 평균은 ${average}점으로 ${passCheck}입니다.`;
console.log(information);
