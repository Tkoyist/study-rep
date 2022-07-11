// function foo(time1,time2){
//   time1 = new Date(time1).getTime()
//   time2 = new Date(time2).getTime()
//   let passTime = time2 - time1
//   let res = []
//   res.push(passTime/(1000 * 3600 * 24))
//   let leave1 = passTime%(1000 * 3600 * 24)
//   res.push(leave1/(3600 * 1000))
//   let leave2 = leave1 % (3600 * 1000)
//   res.push(leave2 / (1000 * 60))
//   return res[0]+'天'+res[1]+'时'+res[2]+'分'
// }
// console.log(foo('2021-12-12','2021-12-14'));

function foo(arr){
  let res = new Set()
  let index = new Set()
  
  arr.forEach(item=>{
      if(index.has(item)){
          res.add(item)
      }else{
          index.add(item)
      }
  })
  return [...res]
}	

console.log(foo([1,2,2,2,2,2,4,4,4,5,7,7,8,78,5,7]));