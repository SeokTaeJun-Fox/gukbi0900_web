// 학생의 클래스를 만들고
// 수학, 국어, 영어 점수를 입력 받아 학생의 총점과 평균을 출력하시오.

class Student {
  math;
  korean;
  english;
  
  yourName;

  constructor(math, korean, english, yourName)
  {
    this.math = math;
    this.korean = korean;
    this.english = english;  
    this.yourName = yourName;
  }

  getTotalScore()
  {
    return this.math+this.korean+this.english;
  }

  getAverageScore()
  {
    return ((this.math+this.korean+this.english)/3).toFixed(2)
  }
}

const s1 = new Student(70, 80, 90, "URA");
const s2 = new Student(10, 20, 30, "Danon");
const s3 = new Student(12, 45, 78, "Ayuuu");
const s4 = new Student(22, 10, 90, "Kurimo");
const s5 = new Student(80, 70, 75, "Sarry");

const students = Array.of(s1, s2, s3, s4, s5);
students.forEach((data) => {
  console.log(`${data.yourName}의 총점 : ${data.getTotalScore()}, 평균 : ${data.getAverageScore()}`);
})

//다른 풀이
// 학생의 클래스를 만들고
// 수학, 국어, 영어 점수를 입력 받아 학생의 총점과 평균을 출력하시오.
// class Student {
//   constructor(id, name, math, kor, eng){
//     this.id = id
//     this.name = name
//     this.math = math
//     this.kor = kor
//     this.eng = eng
//     this.total = math + kor + eng
//     this.average = (this.total / 3).toFixed(2)
//   }

//   introduce(){
//     console.log(`${this.name}님의 성적\n 총 점: ${this.total}점\n 평 균: ${this.average}점`)
//   }
// }

// const hong = new Student(1, "홍길동", 30, 50, 100)
// const jang = new Student(2, "장보고", 100, 70, 65)
// const lee = new Student(3, "이규혁", 20, 10, 10)

// hong.introduce()
// jang.introduce()
// lee.introduce()

