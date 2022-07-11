// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router


// 现在尝试手写配置路由相关信息

// 先要导入路由相关信息
import VueRouter from 'vue-router'
// 后面还会用到Vue 里面的数据，所以也导入
import Vue from 'vue'

// 我们后面设置映射关系，需要用到外部组件文件，导入相关组件信息
import home from'../components/home.vue'
import about from'../components/about.vue'


// 通过Vue.use(插件)，安装路由插件
Vue.use(VueRouter)

// 将映射分离出来
// 每个映射都是一个单独的对象，包含 path 和 component 两个属性
const routes = [
{
path:'',
// component:'home'
// 这种方式不推荐，它会使得我们第一次进入主页的时候url 显示为空
redirect:'/home'
// 而这种方式，会直接将在空url 的时候，直接将url 自动赋值为 /home 
},
{
  path:'/about',
  component:about
},
{
  path:'/home',
  component:home
}
]

// 创建Vue Router 对象,并在创建的时候配置路由和组件间的关系
const router = new VueRouter({
  // 配置关系,使用语法糖分离出来
  routes,
  mode:'history',
  linkActiveClass:"active"
})

// 当前创建了路由对象，但是与我们的vue实例还没有关系
// 我们还需要将其挂载
// 导出，再在vue 实例创建的页面导入
export default router