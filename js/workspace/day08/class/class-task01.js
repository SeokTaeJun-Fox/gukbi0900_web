class Student {
  constructor(yourName, age, studentNum, major, grade) {
    this.yourName = yourName || "";
    this.age = age || 0;
    this.studentNum = studentNum || 0;
    this.major = major || "";
    this.grade = grade || 0;
  }
}

const uraTaeJun = new Student("URA", 33, 2012233333, "컴공", 4);
const danonTaeJun = new Student("DaNon", 32, 2013210410, "라틴어학과", 3);
const teeMikTaeJun = new Student("TeeMik", 35, 1223222233, "천주교학과", 2);

console.log(uraTaeJun);
console.log(danonTaeJun);
console.log(teeMikTaeJun);
