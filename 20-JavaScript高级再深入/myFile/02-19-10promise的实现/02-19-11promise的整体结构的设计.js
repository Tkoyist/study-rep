// 实现promise 必须满足promise 规范 即PromiseA+
const PROMISE_STATUS_PENGDING = '等待状态'
const PROMISE_STATUS_FILFULED = '成功状态'
const PROMISE_STATUS_REJECTED = '失败状态'


class TKPromise{
  constructor(executor) {
    // 为当前对象创建一个属性用于保存当前promise 对象的状态，默认为等待状态
    this.status = PROMISE_STATUS_PENGDING
    this.value = undefined
    this.reason = undefined

    const resolve = (value)=>{
      // 只有在resolve 函数调用时，当前状态为等待状态，才执行resolve 函数，否则表明当前的promise 已经执行完毕，不执行resolve 当中的代码
      if(status === PROMISE_STATUS_PENGDING){
        // 进入resolve 函数当中，第一件事，修改当前promise的状态为成功状态
        this.status = PROMISE_STATUS_FILFULED
        // 并将当前promise 对象的value 修改为传入resolve 函数的value 值
        this.value = value
        // 然后执行then 方法传入的回调函数
        
      }
    }
    const reject = (reason)=>{
      if(status === PROMISE_STATUS_PENGDING){
        // 对应的，如果进入reject 函数，将当前的promise 修改为失败状态
        this.status = PROMISE_STATUS_REJECTED
        // 对应的，将reason 修改为传入reject 函数的reason 值
        this.reason = reason
        // 传入catch 方法传入的回调函数，本质上也是then 方法当中的回调函数，是then方法当中的第二个回调，这里说是catch 是为了便于笔记

      }
    }
    executor(resolve,reject)
  }

  // on 开头表示事件触发条件，onfulfiled 表示当fulfiled 的时候执行，onrejected 表示当 rejected 的时候执行
  // then 方法作为Promise 类的方法，直接作为类的属性存储
  then(onfulfiled,onrejected){

  }
}

// 这样整个Promise 的结构就搭建完成了。下面就是对每个方法各自的具体功能的实现


// 我们实现的promise 必须能满足这样的结构
const promise = new TKPromise((resolve,rejected)=>{
  console.log('TKPromise');
  resolve()
  rejected()
})