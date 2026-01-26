// 1~10까지
// 20~30까지
// 50~60까지
// 각각 들어가있는 배열을 만들고,
// 3개의 배열을 스프레드 문법으로 합치기

const zeroToTen = new Array(10).fill(0).map((_, i) => i + 1);
const twentyToThirty = new Array(11).fill(0).map((_, i) => i + 20);
const fiftyToSixty = new Array(11).fill(0).map((_, i) => i + 50);

const merge = [...zeroToTen, ...twentyToThirty, ...fiftyToSixty];
console.log(merge);