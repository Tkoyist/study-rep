const PROMISE_STATUS_PENGDING = '等待状态'
const PROMISE_STATUS_FULFILED = '成功状态'
const PROMISE_STATUS_REJECTED = '失败状态'


class TKPromise{
  constructor(executor) {
    this.status = PROMISE_STATUS_PENGDING
    this.value = undefined
    this.reason = undefined
    this.onfulfiledFns = []
    this.onrejectedFns = []


    const resolve = (value)=>{
      if(this.status === PROMISE_STATUS_PENGDING){
        setTimeout(() => {
          this.status = PROMISE_STATUS_FULFILED
          this.value = value
          this.onfulfiledFns.forEach(onfulfil=>{
            onfulfil(value)
          })

        }, 0);
      }
    }


    const reject = (reason)=>{
      if(this.status === PROMISE_STATUS_PENGDING){
        setTimeout(() => {
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onrejectedFns.forEach(onreject=>{
            onreject(reason)
          })

        }, 0);
        }
      
    }

    try {
      executor(resolve,reject)
    } catch (error) {
      reject(error)
    }
  }


  then(onfulfiled,onrejected){

    return new TKPromise((resolve,reject)=>{

      if(this.status === PROMISE_STATUS_FULFILED){
        try {
          const midValue = onfulfiled(this.value)
          resolve(midValue)
        } catch (err) {
          reject(err)
        }
      }
      if(this.status === PROMISE_STATUS_REJECTED){
        try {
          const midReason = onrejected(this.reason)
          resolve(midReason)
        } catch (err) {
          reject(err)
        }
      }
      if(this.status === PROMISE_STATUS_PENGDING){
        this.onfulfiledFns.push(()=>{
          try {
            const midValue = onfulfiled(this.value)
            resolve(midValue)
          } catch (error) {
            reject(error)
          }
        })
        this.onrejectedFns.push(()=>{
          try {
            const midReason = onrejected(this.reason)
            resolve(midReason)
          } catch (error) {
            reject(error)
          }
        })
      }

    })
  }

  finally(onFinally){
    // finally 函数是不论promise 的结果是成功还是失败，都会执行其内部的回调
    // 实现方法也很简单
    // this.then(()=>{
    //   onFinally()
    // },()=>{
    //   onFinally()
    // })
    // 直接在内部获取promise 实例，通过promise 实例直接调用一次then 方法，并在该then 当中，不论成功还是失败都执行onFinally 回调
    // 也可以简化
    this.then(onFinally,onFinally)
    // 直接将回调作为参数传入then 方法，借由then 方法进行调用
    // 但是这样还是存在问题，我们通常使用 finally 方法是在then 之后，但是如果以当前的形式去使用的话，finally 会获取到的promise 对象就不再是最初的promise，而是then 方法返回的promise
  }

  // 为类中的方法添加static 关键字表明其是类方法，是属于整个类的方法，而不是属于某个对象的
  static all(promises){
    return TKPromise((resolve,reject)=>{
      let result=[]
      for(let i = 0;i<promises.length;i++){
        promises[i].then(res=>{
          // 这里的then 方法只有在某个异步任务完成的时候才会执行
          // 我们需要的是在所有的promise 的异步任务都完成的时候执行resolve
          // 本质上就是在异步任务最后一个执行完成的异步任务的then方法中调用resolve 方法，问题就在于怎么确定当前的then 就是最后一个then
          // 可以从result 中下手
          result.push(res)

          // 在讲当前的then 的返回值添加入result 之后，如果result 当中的返回值长度与promises 一致，那么就说明所有的promise 都已经得到了结果，那么我们直接调用midPromise的resolve
          // 将result 作为midpromise 的value 返回即可
          if(result.length == promises.length){
            resolve(result)
          }
        },err=>{
          reject(err)
        })
      }
    })
  }

  // 这里的static 也一样
  static race(promises){
    // 思路也一样，就是返回一个midpromise
    return new TKPromise((resolve,reject)=>{
      // 也是遍历传入的promise ，在正确的then 中调用resolve
      // 当前的函数的需求是第一个执行完成的promise时返回，那就好办了，直接在每个then 中都调用resolve 谁先调用then ，就会直接通过resolve 方法返回
      promises.forEach(promise=>{
        promise.then(res=>{
          resolve(res)
        },err=>{
          reject(err)
        })
      })
    })
  }

  // any 方法
  // 与race 大致相同，不同之处在于，当子promise 的异步任务结果为失败的时候，我们不直接退出，而是将reason 存储起来，知道某个请求成功，就将成功的结果返回，或者全部都失败，就将失败结果集返回
  static any(promises){
    return new TKPromise((resolve,reject)=>{
      let reasons = []
      promises.forEach(promise=>{
        promise.then(res=>{
          resolve(res)
        },err=>{
          reasons.push(err)
          if(reasons.length == promises.length){
            reject(new AggregateError(reasons))
          }
        })
      })
    })
  }
}






const promise = new TKPromise((resolve,rejected)=>{
  resolve('TKPromise')
  // throw new Error('pre error message')
  // rejected('err')
})
const p1 = new TKPromise((resolve,rejected)=>{
  resolve('TKPromise 1 ')
  // throw new Error('pre error message')
  // rejected('err')
})
const p2 = new TKPromise((resolve,rejected)=>{
  resolve('TKPromise 2 ')
  // throw new Error('pre error message')
  // rejected('err')
})
const p3 = new TKPromise((resolve,rejected)=>{
  resolve('TKPromise 3 ')
  // throw new Error('pre error message')
  // rejected('err')
})

promise.then(res=>{
  console.log(res);
}).finally(()=>{
  console.log('finally');
})
const res = TKPromise.all([p1,p2,p3])
console.log(res);


