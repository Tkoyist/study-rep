// // let str = readline()
// let str=''
// let left = 0
// let right = 0
// let nums = new Array(26).fill(0)
// for(let i = 0 ; i<str.length ;i++){
//     right++
//     if(str[right] == str[left]){
//         continue
//     }else{
//         nums[str[left].charCodeAt()-97]=Math.max(nums[str[left].charCodeAt()-97],right-left)
//         left = right
//     }
// }
// let res = 0
// for(let item of nums){
//     res += item
// }
// console.log(res)


function bbb() {
  console.log(this);
}
var objA = {
  b: bbb,
  c: {
      d: bbb,
  },
}
console.log(objA.c.d());  //{d: ƒ}d: ƒ}
console.log(objA.b());  //{c: {…}, b: ƒ}