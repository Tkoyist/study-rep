export default{
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
  }