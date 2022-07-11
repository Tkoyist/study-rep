import VueRouter from "vue-router"
import vue from "vue"

import home from"../views/home.vue"
import cart from"../views/cart.vue"
import fenlei from"../views/fenlei.vue"
import user from"../views/user.vue"

vue.use(VueRouter)

const routes=[
{
  path:"",
  redirect:"/home"
},
{
path:'/home',
component:home
},
{
path:'/cart',
component:cart
},
{
path:'/fenlei',
component:fenlei
},
{
path:'/user',
component:user
},
]

const router = new VueRouter({
  routes
})

export default router