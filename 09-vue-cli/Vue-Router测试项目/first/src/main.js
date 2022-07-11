import Vue from 'vue'
import App from './App.vue'

// 导入router,这种简写本质还是访问了router 中的index 文件
import router from './router'


Vue.config.productionTip = false

new Vue({
  // 将路由挂载在vue实例上
  router,
  

  // el='app',
  // el 与后面的$mount("#app") 本质相同，el 在编译器解析后也是 $mount("app")
  // 他们指向的元素最终都会被render 函数中的模板替换
  render: h => h(App)
}).$mount('#app')
