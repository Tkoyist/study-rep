// 实现promise 必须满足promise 规范 即PromiseA+
const PROMISE_STATUS_PENGDING = '等待状态'
const PROMISE_STATUS_FULFILED = '成功状态'
const PROMISE_STATUS_REJECTED = '失败状态'


class TKPromise{
  constructor(executor) {
    this.status = PROMISE_STATUS_PENGDING
    this.value = undefined
    this.reason = undefined

    const resolve = (value)=>{
      if(this.status === PROMISE_STATUS_PENGDING){
        setTimeout(() => {
          this.status = PROMISE_STATUS_FULFILED
          this.value = value
          // 在resolve 当中直接执行then 方法当中传入的回调函数
          this.onfulfiled(value)
          // 发现报错了，因为根据代码执行的顺序来看，此时根本还没有执行到promise 调用then 方法的时候，也就是说，此时根本没有onfulfiled 方法和onrejected 方法
          // promise 有其他的解决方案，但是这里先不讲，我们先直接解决当前的问题，使用定时器，将resolve 函数和reject 函数通过定时器放入下一个宏任务执行，而其他的js 代码是属于当前的宏任务的，所以是交由当前的宏任务执行，会先执行
          // 但是js 代码是微任务，所以最好添加入微任务执行
        }, 0);
      }
    }


    const reject = (reason)=>{
      if(this.status === PROMISE_STATUS_PENGDING){
        this.status = PROMISE_STATUS_REJECTED
        setTimeout(() => {
          this.reason = reason
          this.onrejected(reason)
        }, 0);
        }
      
    }


    executor(resolve,reject)
  }

  then(onfulfiled,onrejected){
    // 在then 方法当中接收到onfulfiled  onrejected 之后，需要在resolve 和reject 函数当中执行，所以我们将其存入当前的promise 对象当中
    this.onfulfiled = onfulfiled
    this.onrejected = onrejected
  }
}

const promise = new TKPromise((resolve,rejected)=>{
  console.log('TKPromise');
  resolve('TKPromise')
  rejected('err')
})
promise.then(res=>{
  console.log(res);
},err=>{
  console.log(err);
})