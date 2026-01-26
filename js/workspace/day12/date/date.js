//console.log(new Date())

// 주요 메서드
// Date객체의 주요 메소드
// getFullYear(): 4자리 년도
// getMonth(): 0~11사이의 정수(0: 1월, 1: 2월, ..., 11: 12월)
// getDate(): 한 달 내의 날짜(28~31)
// getDay(): 한 주 내 요일(0: 일요일, 1: 월요일, ..., 6: 토요일)
// getHours(): 0~23사이의 정수
// getMinutes(): 0~59사이의 정수
// getSeconds(): 0~59사이의 정수
// getMilliseconds(): 0~999사이의 정수
// getTime(): 1970년 1월 1일 0시 0분 0초 기준 현재까지의 밀리초
// setFullYear(year): 년도 저장
// setMonth(month): 월 저장
// setDate(date): 한 달 내의 날짜 값 지정
// setHours(hour): 시간 저장
// setMinutes(minute): 분 저장
// setSeconds(second): 초 저장
// setMilliseconds(ms): 밀리초 저장
// setTime(t): 밀리초 단위인 t값으로 시간 저장

const now = new Date();
// console.log(now);
// console.log(now.toLocaleDateString());  //현재 날짜를 문자열로 출력
// now.setHours(10);
// console.log(now);
// console.log(now.toLocaleDateString());

//자바스크립트는 가져오는것
// let date = new Date(2026, 1, 26, 10, 20);
// console.log(date);

//Date객체 설정방법
// date = new Date("2026-01-26");
// console.log(date);

date = new Date("2026-01-26 10:30:00");
date = new Date("2026-1-4 10:30:00");
date = new Date("2026-01-04T10:30:00Z");
console.log(date);

date = new Date("2026-01-26 10:30:00");
console.log(date.getHours());
console.log(now.getTime());
console.log(date.getHours());

