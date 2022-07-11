class myPromise{
  static all(promises){
    // all 方法返回一个promise 对象，所以我们照例先返回一个promise 对象
    return new Promise((resolve,reject)=>{
      let index = 0
      // index 的作用，是用于记录当前已经有多少promise 的异步任务完成了，如果异步任务全部完成，那么index的值就会与异步任务数量相等，即等于promises.length
      let result = []
      // 对传入的数组中的数据进行遍历
      for(let i =0;i<promises.length;i++){
        // 将所有数据通过resolve() 函数进行处理，避免出现某个数据不是promise 对象的情况，即使是promise 对象，也不会有任何影响
        Promise.resolve(promises[i]).then(res=>{
          // 在每个promise 的then 当中都添加上index++ ，每当一个异步任务完成，index 都加一
          index++
          result[i] == res
          // 每当一个异步任务完成后，都进行判断，判断当前执行完毕的异步任务的数量与传入的数据数量是否相等
          // 相等则说明所有异步任务完成，则调用resolve 方法将结果返回
          if(index === promises.length) resolve(result)
        }).catch(err=>{
          // 当all 当中的某个promise的异步任务失败时，all 返回失败原因
          // 则为每个异步任务都添加上catch 在catch 当中直接调用reject函数
          reject(err)
        })
      }
    })
  }
}