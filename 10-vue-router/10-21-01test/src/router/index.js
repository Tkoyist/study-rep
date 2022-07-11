import Vue from 'vue'
import VueRouter from 'vue-router'
// import home from'../components/home.vue'
// import about from'../components/about.vue'
// import user from'../components/user.vue'

const home = () =>import('../components/home.vue')
const about = () =>import('../components/about.vue')
const user = () =>import('../components/user.vue')

const news = () => import('../components/homeNews')
const msg = () => import('../components/homeMsg')

const profile = () => import('../components/profile')


Vue.use(VueRouter)

const routes = [
  {
  path:'',
  redirect:'/home',
  meta:{
    title:'主页'
  }
  },
  {
    path:'/profile',
    component:profile,
    meta:{
      title:'数据'
    }
  },
  {
    path:'/about',
    component:about,
    meta:{
      title:'关于'
    }
  },
  {
    path:'/home',
    component:home,
    meta:{
      title:'用户'
    },
    children:[
      {
        path:'news',
        component:news,
        // meta:{
        //   title:'news'
        // }
      },
      {
        path:'msg',
        component:msg,
        // meta:{
        //   title:'msg'
        // }
      }
    ]
  },
  {
    path:'/user/:userid',
    component:user,
    meta:{
      title:'用户'
    }
  }
  ]

const router = new VueRouter({
  routes
})

// 创建全局导航,该函数的参数是一个函数，参数函数需要有三个参数 to from next
router.beforeEach((to,from,next)=>{
document.title=to.matched[0].meta.title

next()
})

export default router
