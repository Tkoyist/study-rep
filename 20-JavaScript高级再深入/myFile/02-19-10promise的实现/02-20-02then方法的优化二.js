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
    // if(this.status === PROMISE_STATUS_FULFILED){
    //   onfulfiled(this.value)
    // }
    // if(this.status === PROMISE_STATUS_REJECTED){
    //   onrejected(this.reason)
    // }
    // this.onfulfiledFns.push(onfulfiled)
    // this.onrejectedFns.push(onrejected)

    // then 方法需要返回一个promise 对象
    return new TKPromise((resolve,reject)=>{
      // -------- 为什么这里的this 能指向正确的promise ，因为我们调用then 方法的时候，创建新的promise 传入的是一个箭头函数，而箭头函数本身没有this 他的this 来源于它的声明处
      //          也就是then 方法当中，而then 方法的this 就是指向调用then 方法的promise 对象
      // 这个promise 对象的状态与value 应该是取决于传入当前then 函数的回调的返回值，即onfulfiled onrejected 以这两个回调的返回值作为当前then 方法返回的promise 对象的value 值（即传入resolve 方法的value）
      
      // 为了解决这个问题，我们将then 方法当中需要做的事情放入then 返回的promise 当中进行
      // 但是this 能不能指向正确的promise 对象呢
      if(this.status === PROMISE_STATUS_FULFILED){
        // onfulfiled(this.value)
        // 成功与失败的回调也要改变
        // 首先，在then 的链式回调当中，只要then 当中的回调存在返回值，不论其是返回了value 还是抛出了reason ，都是会被后面的then 方法通过onfulfiled 进行接收的
        // 只有在回调当中出现了错误，才会被后面的then的onrejected 捕获
        // 所以我们需要进行判断，使用try catch 语句，如果onfulfiled 的执行没有报错，那么就通过resolve 将onfulfiled 函数的返回值传递出去，如果出错，就使用reject 进行捕获
        try {
          // 获取onfulfiled 函数的返回值，将调用当前then 方法的promise 的value作为参数传入，获取中间promise 的结果
          const midValue = onfulfiled(this.value)
          // 即获取then 方法的返回值，then方法的执行需要前一个promise 的结果作为参数传入，而前一个promise的结果是异步的，所以我们需要通过这种方式，当前一个promise 执行完毕之后
          // 获取到其返回值，作为参数传入中间promise 的resolve  方法，即将then方法接受前面一个promise 的结果作为参数，然后将返回值作为参数传入resolve
          resolve(midValue)
        } catch (err) {
          reject(err)
        }
      }
      if(this.status === PROMISE_STATUS_REJECTED){
        // onrejected(this.reason)
        try {
          const midReason = onrejected(this.reason)
          resolve(midReason)
        } catch (err) {
          reject(err)
        }
      }
      if(this.status === PROMISE_STATUS_PENGDING){
        // 成功状态与失败状态then 返回的promise 都已经进行了解决
        // 但是等待状态下，我由于promise 此时还没有结果，所以我们无法直接调用 onfulfiled 获取midPromise 的结果，只能等待promise 得到结果
        // 这就导致一个问题，我们需要将then 当中的回调存入回调数组，等待promise 获取状态之后改变结果，但是回调队列当中那么多回调函数，我们怎么知道哪一个的结果是当前的then 所需要的呢
        // 所以我们需要一个方案来解决这个问题
        
        // 解决方案就是对放入回调数组当中的回调函数进行处理，或者说是加工
        this.onfulfiledFns.push(()=>{
          try {
            // 这样放入回调队列的函数就不再是原本的then 当中的回调了，而是我们定义的箭头函数
            const midValue = onfulfiled(this.value)
            resolve(midValue)
            // 由于箭头函数的特殊性质,所以虽然是由promise调用了当前的函数,但是promise执行当前函数时获取到的resolve 函数仍然是midPromise 的resolve 
            // this 也是当前作用域当中的this,所以是可以正确运行的
          } catch (error) {
            reject(error)
          }
        })
        this.onrejectedFns.push(()=>{
          try {
            const midReason = onrejected(this.reason)
            resolve(midReason)
          // 即使promise 最后执行出错，只要onrejected 方法捕获了错误并进行了处理，存在返回值，那么该返回值就应当作为正常的值返回给midpromise 的resolve 函数
          } catch (error) {
            // 但是如果onrejected 执行出错，那么midpromise 的状态就为reject 状态了
            reject(error)
          }
        })
      }

    })
  }
}






const promise = new TKPromise((resolve,rejected)=>{
  // resolve('TKPromise')
  throw new Error('pre error message')
  rejected('err')
})

promise.then(res=>{
  console.log(res);
  return 'aaaa'
},err=>{
  console.log(err);
  throw new Error('error message')
  return 'bbbbb'
}).then(res=>{
  console.log(res);
},err=>{
  console.log(err);
})


