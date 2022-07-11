import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// required('./assets/css/base.css')
// 引入基本样式表，但是不推荐这样使用，样式引用太麻烦，推荐在app.vue中引入