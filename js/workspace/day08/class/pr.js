class a {
  "bb" = "c"
  "cc" = "d"
}
a.prototype.forEach = Array.prototype.forEach

const b = new a();

console.log(Array.prototype.forEach);