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
}






const promise = new TKPromise((resolve,rejected)=>{
  resolve('TKPromise')
  // throw new Error('pre error message')
  // rejected('err')
})

promise.then(res=>{
  console.log(res);
}).finally(()=>{
  console.log('finally');
})


