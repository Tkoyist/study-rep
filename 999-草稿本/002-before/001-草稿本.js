function bar(arr){
  return [...new Set(arr)]
}
function bar(arr){
  let res = []
  for(let item of arr){
      if(res.indexOf(item) === -1){
          res.push(item)
      }
  }
  return res
}
// function bar(arr){
//   for(let i in arr){
//       if(arr.indexOf(arr[i]) != i){
//           arr.splice(i,1)
//           i--
//       }
//   }
//   return arr
// }
let a = [1,2,2,1,1,3,2,2]
console.log(bar(a));