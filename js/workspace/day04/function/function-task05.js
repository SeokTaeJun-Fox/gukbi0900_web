// 사용자가 몇 개나 데이터를 입력할 지 모를 때
// number 타입과 string 타입을 분리해서 각각의 입력 갯수 구하기
// 단, 문자열에 정수가 포함되어있다면 number타입으로 취급한다.
// ex) myFun("a", "10", "a10", "20", "1")

const countNumberAndString = (...targets) => {
  let stringCount = 0;
  let intCount = 0;
  let intIncludeCheck = "0123456789";
  let information;

  for(let i = 0; i < targets.length; i++)
  {
    let target = targets[i];
    let isNumber = false;

    if(typeof(target) === "number")
    {
      intCount++;
      isNumber = true;
      continue;
    }

    for(let j = 0; j < target.length; j++)
    {
      if(intIncludeCheck.includes(target[j]))
      {
        intCount++;
        isNumber = true;
        break;
      }
    }

    if(typeof(target) === "string" && !isNumber)
    {
      stringCount++;
    }
  }

  information = `문자열 : ${stringCount}개, 정수 : ${intCount}개`;
  console.log(information);
}

countNumberAndString("23", "ab", "a19", 3, "3ab", "dsfjaskd", "344", 0);

// 다른 풀이(실수 include)
// const checkStringOrNumber = (...datas) => {
//   let intCount = 0
//   let floatCount = 0
//   let strCount = 0

//   // typeOf(NaN) === number -> true
//   for(let i = 0; i < datas.length; i++){
//     let value = datas[i]
//     if(typeof(value) === "string"){
      
//       let includesInteger = false;

//       // 문자열
//       for(let i = 0; i < value.length; i++){
//         let isInt = (value[i] - 0)
//         if((value[i] - 0) === 0){
//           includesInteger = true
//           break
//         }else if(isInt){
//           includesInteger = true
//           break
//         }
//       }

//       if(includesInteger){
//         intCount++
//       }else{
//         strCount++
//       }


//     }else{
//       // 숫자형
//       let isFloat = String(value).includes(".")
//       if(isFloat){
//         floatCount += 1
//       }else{
//         intCount++
//       }
//     }
//   }

//   return `정수의 개수: ${intCount}, 실수의 개수: ${floatCount}, 문자열의 개수: ${strCount}`
// }

// let result = checkStringOrNumber("10", "a10", "a", "7", 7, "8", 10, 6, 1.1, "0")
// console.log(result)