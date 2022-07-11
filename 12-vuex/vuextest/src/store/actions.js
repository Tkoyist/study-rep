export default{
    // mutation 不能进行异步操作，会产生bug，我们这里使用action 替代mutation
    updatamsg(context){
      // context 指向上下文，这里直接当做store 对象即可
      setTimeout(()=>{
        // state.msg="vuex 的数据被action修改啦"
        // 这是错误代码，我们之前说过只能通过mutation 修改state！！！！
        context.commit('umsgaction')
      },2000)

    },
    updatemsgbyp(context){
      return new Promise((resolve,rejected)=>{
        setTimeout(
          ()=>{
            console.log("Promise 异步代码正在执行");
          }
        ,1000)
        resolve()
      })
    }
  }