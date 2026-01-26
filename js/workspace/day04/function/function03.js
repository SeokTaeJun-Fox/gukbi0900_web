//5개 -> 매개변수 5개
//100개 -> 매개변수 100개

// 100개를 입력하면 100개중에 1의 개수를 찾아주는 함수
// 매개변수 1개
// 가변 매개변수(rest parameter)
const myFunc = (...numbers) => {
  console.log(numbers[3]);
}

myFunc(10,20,30,40);

// 문자열의 메서드
// "".indexOf()
// 해당 문자의 index 번호를 리턴하는 메서드
console.log("abcdefg".indexOf("c"));

// .charAt()
// ""[]   인덱싱
// 해당 인덱스의 값을 리턴하는 문자열의 메서드
console.log("abcd".charAt(2));

// .length
// 문자열 또는 배열의 길이