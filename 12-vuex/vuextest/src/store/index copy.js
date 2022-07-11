import Vue from 'vue'
import Vuex from 'vuex'
// 1 导入文件

import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"
import moduleA from "./modules/modulesA"
// 导入我们抽离出去的配置文件


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    msg:"This vuex msg"
  },
  // state 数据不建议抽离，方便我们打开store文件能直接看到哪些数据被管理了

  // 直接使用我们导入的配置文件
  mutations,
  getters,
  actions,
  modules: {
    a:moduleA
    // 我们使用常规的抽离，将modulesA 对象抽离出来在外部定义
  }
})
