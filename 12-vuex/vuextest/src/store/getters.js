export default{
    msgaftergetter(state){
      return state.msg+'，然后又被getters 修改啦'
    },
    // 这就是getters 的基本用法
    // 现在升级用法
    // - 将之前已经处理过的数据直接调用二次处理
    msgsecond(state,getters){
      return getters.msgaftergetter+"，然后在getters 内部调用getters修改成功啦！"
    }, 
    // * 注意getters 内部的函数接受且只接受两个参数，分别指向state和getters，不论别名是什么

    // 究级牛逼用法，当我们需要从外部传入一些数据，用来对state 的数据进行处理的时候
    // 我们返回一个匿名函数,从调用处获取需要的数据,再在回调函数中使用
    msgthird(s,g){
      return message =>{
        return g.msgsecond+message
        // 我们现在让该getters 返回了一个函数，外部直接调用需要以函数的方式，
        // 我们在回调函数中对外来函数进行操作之后，在回调函数中返回，返回值会变成getters 函数的返回值再返回
      }
    }
  }