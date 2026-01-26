// * 모든 값을 변수

// 시험 성적 문제 구하기
// 국어, 영어, 수학 점수를 받아서(직접 입력)
// 총점과 평균을 구하고
// 평균이 90점 이상이라면 A등급,
// 80점 이상이라면 B등급,
// 70점 이상이라면 C등급,
// 70점 미만이라면 F등급

// 등급을 출력하기

const yourName = "홍길동";
const minAGradeScore = 90;
const minBGradeScore = 80;
const minCGradeScore = 70;
const aGradeName = 'A';
const bGradeName = 'B';
const cGradeName = 'C';
const otherGradeName = 'F';

let korean = 90;
let english = 90;
let math = 95;

let total = korean + english + math;
let average = total/3;

let yourGrade = (average >= minAGradeScore) ? aGradeName
  : (average >= minBGradeScore) ? bGradeName
    : (average >= minCGradeScore) ? cGradeName 
      : otherGradeName;

let information = `${yourName}님의 평균 점수는 ${average}점이므로 등급은 : ${yourGrade}등급 입니다.`;

console.log(information);