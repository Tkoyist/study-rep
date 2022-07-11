// 1 导入vue 和 vuex 
import Vue from 'vue'
import Vuex from 'vuex'

// 导入封装的各类vuex 数据文件
import state from'./state.js'
import mutations from './mutations'
import getters from'./getters'
import actions from'./actions'
// 2 安装vuex插件
Vue.use(Vuex)

// 3 创建store 对象,并赋值给一个对象，方便在其他文件中的导入，使用new Vuex.store 创建store 对象，该函数需要传入一个对象作为方法，该对象中包含了各类信息（我们可以对信息进行封装）
// 这里数据并不多，就不做单独封装了
const store = new Vuex.Store({
  state,
  // mutations 应当只用于简单的数据修改，进行单一的数据操作，而不应当在其内部进行数据的判断
  // 推荐将判断操作放在action 中，再由action 调用mutations 进行操作
  // 这也是一种封装，方便后期的维护
  mutations,
  getters,
  actions
})

// 4 导出store 对象
export default store
// 5 在Vue 实例中挂载store （在main.js 中进行该操作）