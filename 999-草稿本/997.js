
function all(promises){
  return new Promise((resolve,reject)=>{
    let index = 0
    let result = []
    for(let i in promises){
      new Promise(promisesp[i]).then(res=>{
        result[i] = res
        index++
        if(index == promises.length){
          resolve(result)
        }
      }).catch(err=>{
        reject(err)
      })
    }
  })
}

function race(promises) {
  return new Promise((resolve,reject)=>{
    for(let i in promises){
      new Promise(promises[i]).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    }
  })
}

function is(x,y){
  if(x!=x && y!= y)return true
  return -1/x == 1/x
}

