import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store'

import FastClick from 'fastclick' 

import VueLazyLoad from 'vue-lazyload';

import toast from'@/components/common/toast/index.js'

Vue.config.productionTip = false

// vue 实例可以作为一个事件总线
Vue.prototype.$bus = new Vue()

// 解决移动端300ms延迟问题
FastClick.attach(document.body)

// 使用图片懒加载插件
Vue.use(VueLazyLoad,{
  loading:require('@/assets/img/common/bb2.jpg')
})

// 将toast 作为一个插件进行安装，会去调用该插件对象的install 方法，如果插件对象本身就是一个方法，则直接将该方法作为插件的install 方法执行
Vue.use(toast)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
