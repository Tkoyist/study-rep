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


