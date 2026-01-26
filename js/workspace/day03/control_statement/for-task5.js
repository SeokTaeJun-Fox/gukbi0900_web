// 별 찍기
//     *
//    ***
//   *****
//  *******
// *********

// 알고리즘
// 공백문자 4, 별 1
// console.log("    *")
// 공백문자 3, 별 3
// console.log("   ***")
// 공백문자 2, 별 5
// console.log("  *****")
// 공백문자 1, 별 7
// console.log(" *******")
// 공백문자 0, 별 9
// console.log("*********")

// const n = 5;

// for(let i = 0; i < n; i++){
//   let line = ""
//   for(let j = 0; j < n - i - 1; j++){
//     line += " "
//   }
//   for(let k = 0; k < 2 * i + 1; k++){
//     line += "*"
//   }
//   console.log(line)
// }

// let floor = 7;
// for(let i = 0; i < floor; i++)
// {
//   let linePrint = "";
//   let width = (floor * 2) - 1;
//   for(let j = 0; j < width; j++)
//   {
//     let from = (floor - 1) - i //6,5,4,3,2,1,0
//     let to = (floor - 1) + i;  //6,7,8,9,10,11,12

//     if(j >= from && j <= to)
//     {
//       linePrint += "*";
//     }
//     else
//     {
//       linePrint += " ";
//     }
//   }

//   console.log(linePrint);
// }

// 2 ~ 9 단 
for(let i = 0; i < 8; i++){
  // 2 ~ 9
  let dan = i + 2;
  for(let j = 0; j < 9; j++){
    // 1 ~ 9
    let num = j + 1
    console.log(`${dan}단: ${dan} * ${num} = ${dan * num}`)
  }
}