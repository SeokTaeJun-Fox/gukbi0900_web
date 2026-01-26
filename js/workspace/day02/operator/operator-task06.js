// 1번 문제 
// 배송비 구하기
// 1. 기본 배송비는 3,000원
// 2. 상품 금액이 50,000원 이상이면 배송비 무료 
// 3. 회원이면 배송비 20% 할인 적용
// 4. 최종 배송비를 계산하여 출력한다
const deliveryPrice = 3000;
const freeDeliveryPayCondition = 50000;
const memberDiscount = 0.8;

let itemPrice = 30000;
let total;
let deliveryFee = 0;
itemPrice < freeDeliveryPayCondition && (deliveryFee = deliveryPrice);

let isMember = "Yes";
isMember === "Yes" && (deliveryFee *= 0.8);
total = itemPrice + deliveryFee;

console.log(total);

// 2번 문제
// 사용자의 거스름돈의 최소 동전 개수 구하기
// 동전의 종류 500, 100, 10
// 4790원

const fiveHundred = 500;
const oneHundred = 100;
const ten = 10;

let money = 4790;
let remainMoney = money;
let totalCoinAmount;

let fiveHundredCoinAmount = parseInt(4790 / fiveHundred);
remainMoney -= fiveHundred*fiveHundredCoinAmount;
let oneHundredCoinAmount = parseInt(remainMoney / oneHundred);
remainMoney -= oneHundred*oneHundredCoinAmount;
let tenCoinAmount = parseInt(remainMoney / ten);
remainMoney -= tenCoinAmount*tenCoinAmount;

totalCoinAmount = fiveHundredCoinAmount + oneHundredCoinAmount + tenCoinAmount;
let information = `총${money}의 거스름돈의 최소 동전 개수는 500원 ${fiveHundredCoinAmount}개, 100원 ${oneHundredCoinAmount}개, 10원 ${tenCoinAmount}개, 총 ${totalCoinAmount}개입니다.`;
console.log(information);