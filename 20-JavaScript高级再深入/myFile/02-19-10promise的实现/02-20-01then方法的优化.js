const PROMISE_STATUS_PENGDING = '等待状态'
const PROMISE_STATUS_FULFILED = '成功状态'
const PROMISE_STATUS_REJECTED = '失败状态'


class TKPromise{
  constructor(executor) {
    this.status = PROMISE_STATUS_PENGDING
    this.value = undefined
    this.reason = undefined
    // then 方法可以多次调用，传入的回调也是不止一个的，所以我们使用一个数组进行保存，分别保存成功的回调和失败的回调
    this.onfulfiledFns = []
    this.onrejectedFns = []


    const resolve = (value)=>{
      if(this.status === PROMISE_STATUS_PENGDING){
        setTimeout(() => {
          this.status = PROMISE_STATUS_FULFILED
          this.value = value
          // this.onfulfiled(value)
          // 由于现在的成功回调为了能保存更多的函数变成了一个回调数组，所以我们执行回调也从执行一个回调变成了清空回调队列
          this.onfulfiledFns.forEach(onfulfil=>{
            onfulfil(value)
            // 并且我们需要将value 作为参数传入回调队列当中的函数，即传递给then 当中的回调，作为then当中的回调的数据，交由then 当中的回调进行处理
          })

        }, 0);
      }
    }


    const reject = (reason)=>{
      if(this.status === PROMISE_STATUS_PENGDING){
        setTimeout(() => {
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          // 当executor 调用了reject 函数时，promise 变成失败状态，我们需要清空失败的队列，即将then 传入的失败回调函数全部依次执行，通过forEach 方法进行
          this.onrejectedFns.forEach(onreject=>{
            onreject(reason)
          })

        }, 0);
        }
      
    }


    executor(resolve,reject)
  }


  then(onfulfiled,onrejected){
    // 在then 方法当中对当前promise 的状态进行判断
    if(this.status === PROMISE_STATUS_FULFILED){
      // 如果当前的promise 是成功状态，那么就将当前promise 的value直接作为参数传入onfulfiled 回调当中，并直接执行该回调即可
      onfulfiled(this.value)
    }
    if(this.status === PROMISE_STATUS_REJECTED){
      onrejected(this.reason)
    }
    // 由于成功回调与失败回调是两个数组
    // 所以现在then 方法不再只是直接将传入的回调赋值，而是将传入的回调放入当前promise 的成功回调与失败回调
    // 经过上面的判断，当前的promise的状态为等待状态，那么就将回调存入回调数组当中
    this.onfulfiledFns.push(onfulfiled)
    this.onrejectedFns.push(onrejected)
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
promise.then(res=>{
  console.log(res);
},err=>{
  console.log(err);
})
// 这样一个问题
setTimeout(() => {
  promise.then(res=>{
    console.log(res,'03');
  },err=>{
    console.log(err);
  })
}, 1000);
// 上面的代码是不会执行的，因为在promise 清空任务队列的时候，上面的回调还没有添加进入promise 内部的回调队列
// 而当添加入回调队列的时候，promise 内部的异步任务已经执行完毕了，即使我们使用then 添加入promise的回调队列，也没有任何意义了，因为resolve 函数已经执行完毕了，不会再执行了
// 问题主要是出在then 方法当中,我们在调用then 方法的时候应该先加上一个状态判断,如果当前是等待状态才将当前then 当中的任务添加入任务队列,等待promise 执行完毕之后进行处理
// 但是如果promise 当前的状态是fulfiled 或者rejected ,那么就直接将then 中对应的回调直接执行