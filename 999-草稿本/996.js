// function multiplied(a, b) {
//   let num1 = a.split('').reverse()
//   let num2 = b.split('').reverse()
//   let num = new Array(num1.length)
//   for(let i = 0;i<num1.length;i++){
//     num[i] = new Array(num2.length)
// //   }


// //   for(let i = 0;i<num1.length;i++){
// //     for(let j = 0;j<num2.length;j++){
// //       num[i][j] = Number(num1[i]) * Number(num2[j])

// //     }

// //   }
  
// //   for(let i = 0;i<num1.length;i++){
// //     for(let j = 0;j<num2.length-1;j++){
// //       if(num[i][j] >= 10){
// //         console.log('tets1')
// //         num[i][j+1] += Math.floor((num[i][j+1]/10))
// //         num[i][j] %= 10
// //       }
// //     }
    
// //     num[i] = num[i].reverse()
// //   }
// //   let res = []
// //   for(let i =0 ;i<num.length ;i++){
// //     for(let j = 0 ;j<num[0].length ;j++){
// //       res[i + j] = res[i + j] != undefined? res[i + j]+num[i][j] : num[i][j]
// //     }
// //   }
// //   for(let i = 0;i<res.length;i++){
// //     if(res[i]>=10){
// //       res[i+1] += Math.floor((res[i]/10))
// //       res[i] %= 10
// //     }
// //   }
// //   return res.join('')
// // }

// // console.log(multiplied('11111111111111111111','22222222222222222222'))

let  friendInfos = { // 有a、b、c、d 4个同学
a: [ 'c' ], // a有一个直接好友c（直接好友关系是相互的，c必定有直接好友a）
 b: [ 'c' ],
  c: [ 'a', 'b' ],
  d: [], // d没有直接好友
 }

 function hubs(friendInfos) {
  let res = []

  for(let name in friendInfos){
    if(res.length == 0){
      res.push(new Set(...friendInfos[name],name))
    }
    for(let item of res){
      if(item.has(name)){
        friendInfos[name].forEach(friend=>{
          item.add(friend)
        })
      }else{
        res.push(new Set(...friendInfos[name],name)) 
      }
    }
  }

  return res
}

console.log(hubs(friendInfos))