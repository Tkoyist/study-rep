import Vue from 'vue'
import Vuex from 'vuex'
// 1 导入文件

// 2 安装插件
Vue.use(Vuex)

 const moduleA={
  state:{
    name:"moduleA 中的内部name"
  },
  mutations:{
    cname(state){
      state.name = "moduleA 中的内部name被修改了"
    }
  },
  getters:{
    // 模块中的getters使用也与外部基本一致，唯一区别是多了第三个参数rootstate，用于访问根数据的状态
    getname(state,getters,rootState){
      return state.name+rootState.msg
    }
  }
}

// 创建Vue实例并导出
export default new Vuex.Store({
  state: {
    // 用于保存状态，即保存数据
    msg:"This vuex msg"
    // 我们在这里定义的数据，就可以在它所挂载在的vue实例挂载内部任意使用
    // 也可以在对应vue 实例内注册的组件中任意使用
  },
  mutations: {
    // 定义能修改state 数据的方法
    umsg(state){
      state.msg="vuex 的数据被mutations修改啦"
    },
    changemsgbyoutter(state,msgoutter){
      state.msg = state.msg + msgoutter
    },
    umsgaction(state){
      state.msg="msg已经被action异步操作修改了"
    }
  },
  getters:{
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
  },
  actions: {
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
  },
  modules: {
    a:moduleA
    // 我们使用常规的抽离，将modulesA 对象抽离出来在外部定义
  }
})
