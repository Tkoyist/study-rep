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
    onfulfiled = typeof onfulfiled ==='function'?onfulfiled:value=>value
    onrejected = typeof onrejected ==='function'?onrejected:err=>err
    // then 方法还有一个优化方向，我们知道then方法 的返回值可以是另外一个promise，如果出现这种情况，那么then 返回的promise（midpromise） 的状态与值就要与prepromise 返回的promise保持一致
    // 但是当前并没有进行这样的处理

    // --思路
    // 我们肯定是需要获取到onfulfiled，onrejected 的返回值的，问题只是返回值可能有不同的类型，需要进行不同的处理，那么我们就直接将对midvalue 的处理从简单的resolve 变成一个另外的函数
    // 要求该函数可以根据midvalue 的不同进行不同的处理
    function resolveAllValue(midPromise,midValue,resolve,reject){
      // 进入函数先判断midvalue 是不是promise 对象
      if(midValue instanceof TKPromise){
        // 如果是promise ，判断其状态
        if(midValue.status === PROMISE_STATUS_PENGDING){
          // 如果是等待状态，也可以直接调用其then 方法，将我们需要的操作作为参数传入
          midValue.then(res=>{
            resolveAllValue(midPromise,res,resolve,reject)
          },err=>{
            reject(err)
          })
        }else{
          // 如果不是等待状态，直接使返回的promise 的状态与当前的相等就行了
          midValue.then(resolve,reject)
          // 这里的resolve 与reject 都是属于midpromise 的，在midValue 存在结果的情况下，直接调用then 方法，就会将其value或者reason 直接作为参数传入then 当中的成功与失败回调
          // 就能直接修改midpromise 的状态与值，全部与midvalue 相等
        }
      
      }else{
        // 如果不是，就直接resolve
        resolve(midValue)
      }
    }
    let midPromise
    return midPromise = new TKPromise((resolve,reject)=>{

      if(this.status === PROMISE_STATUS_FULFILED){

        try {
          // 获取onfulfiled 函数的返回值，将调用当前then 方法的promise 的value作为参数传入，获取中间promise 的结果
          const midValue = onfulfiled(this.value)
          // 即获取then 方法的返回值，then方法的执行需要前一个promise 的结果作为参数传入，而前一个promise的结果是异步的，所以我们需要通过这种方式，当前一个promise 执行完毕之后
          // 获取到其返回值，作为参数传入中间promise 的resolve  方法，即将then方法接受前面一个promise 的结果作为参数，然后将返回值作为参数传入resolve
          resolveAllValue(midPromise,midValue,resolve,reject)
        } catch (err) {
          reject(err)
        }
      }
      if(this.status === PROMISE_STATUS_REJECTED){
        // onrejected(this.reason)
        try {
          const midReason = onrejected(this.reason)
          resolveAllValue(midPromise,midReason,resolve,reject)
        } catch (err) {
          reject(err)
        }
      }
      if(this.status === PROMISE_STATUS_PENGDING){
        this.onfulfiledFns.push(()=>{
          try {
            const midValue = onfulfiled(this.value)
            resolveAllValue(midPromise,midValue,resolve,reject)
          } catch (error) {
            reject(error)
          }
        })
        this.onrejectedFns.push(()=>{
          try {
            const midReason = onrejected(this.reason)
            resolveAllValue(midPromise,midReason,resolve,reject)
          } catch (error) {
            reject(error)
          }
        })
      }
    })
  }
}






const promise = new TKPromise((resolve,reject)=>{
  resolve('TKPromise')
  
})

promise.then(res=>{
  return new TKPromise((resolve,reject)=>{
    resolve(res+'then当中的promise')
  })
}).then(res=>{
  console.log(res);
})

