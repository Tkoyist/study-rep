export default{
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