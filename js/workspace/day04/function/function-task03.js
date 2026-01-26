// 함수 문자열을 뒤집어주는 함수
// reverse
// "abcd" -> "dcba"
const reverse = (str) => {
  // 문자열의 길이 ("".length)
  let result = ""
  for (let i = 0; i < str.length; i++)
  {
    result += str[str.length - i - 1];
  }
  return result;
}

let result = reverse("abcd");
console.log(result);

// 가변 매개변수를 이용해서
// 전달 받은 모든 값을 더해서 반환해주는 함수
const sumAll = (...nums) => {
  let total = 0;
  for(let i = 0; i < nums.length; i++)
  {
    total += nums[i];
  }
  return total;
}

let answer = sumAll(10,20,30,40,50,60);
console.log(answer);