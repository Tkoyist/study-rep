import Vue from 'vue'
import App from './App.vue'
// 导入vuex
import store from './store'

Vue.config.productionTip = false

new Vue({
  // 挂载vuex
  // 挂载完成之后，vue实例内部任意位置都能通过$store 访问到它
  store,
  render: h => h(App)
}).$mount('#app')
