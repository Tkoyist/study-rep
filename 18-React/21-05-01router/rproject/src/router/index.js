import About from "../pages/About";
import Home from "../pages/Home";
import Proflie from "../pages/Proflie";
import User from "../pages/User";
import LZL from "../pages/路由嵌套的组件";
import{Name,Age,Height}from'../pages/路由嵌套的组件'


    const routes = [
     {
       path:'/',
       exact:true,
      //  既然是对象了，储存exact 关键字的方式当然也是属性
       component:Home
     },
     {
       path:'/about',
       component:About
     },
     {
       path:'/proflie',
       component:Proflie
     },
     {
       path:'/lzl',
       component:LZL,
       routes:[
        {
          path:'/lzl',
          exact:true,
          component:Name
        },
        {
          path:'/lzl/age',
          component:Age
        },
        {
          path:'/lzl/height',
          component:Height
        },
       ]
      },
    ]
      
   export default routes