const bannerWrap = document.querySelector("#banner-wrap")


// 몇 초뒤에
setTimeout(() => {
  console.log(bannerWrap)
  bannerWrap.style.transform = "translate(-1280px, 0)"
}, 3000)

// 몇 초마다
let count = 0
let gap = 1280
let movePx = gap * count || 1

const bannerInterval = setInterval(() => {
  movePx = gap * count || 1
  bannerWrap.style.transform = `translate(-${movePx}px, 0)`
  count++
  console.log("count", count)
  count = count % 5
  if(count === 1){
    bannerWrap.style.transition = "none"
    bannerWrap.style.transform = `translate(0, 0)`
  }else {
    bannerWrap.style.transition = "all 0.5s ease-in-out"
  }
}, 1000)

// 몇 초뒤에
setTimeout(() => {
  //인터벌을 멈춘다
  clearInterval(bannerInterval);
}, 10000)