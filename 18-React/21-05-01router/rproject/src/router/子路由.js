import{Name,Age,Height}from'../pages/路由嵌套的组件'
const routes=[
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

export default routes