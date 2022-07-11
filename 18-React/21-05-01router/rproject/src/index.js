import React from 'react'
import ReactDOM from 'react-dom'
// 导入在其他文件中创建的组件，然后在当前文件中就可以正常使用了
import App from './21-08-03抽离Route'
import{BrowserRouter}from'react-router-dom'

// index.js 是webpack 打包的入口，必要要有这个文件webpack才能正常运行
// 我们在这个文件里将react 页面作为一个最外层组件进行渲染
 
// 直接渲染会失败，因为当前文件中根本没有 ReactDOM这个依赖，这是需要我们导入的
// 我们暂时没有用到jsx 代码，所以暂时不用导入babel，webpack 不就是用于解析打包文件的吗，webpack 会自己解析jsx代码转义为js代码
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'))
// -- 在App 外部使用BrowserRouter 组件包裹，使其成为BrowserRouter 路由系统的一部分，让BrowserRouter 可以为其传递数据


// 与vue 的组件的区别
// - vue 的组件是以.vue 的形式创建文件，而react 就是js 的文件形式
// - vue 的组件是html js css 代码共同组成的，用html 决定模板，css 决定样式，js决定数据
// - react 的组件是以类的形式存储于js 文件当中的，且使用js 代码代替html 结构组成
// - vue 的开发是全组件化的，但react 的设计模式似乎没有这个要求
// - vue 的组件在另外一个组件中使用前，不仅需要导入，还需要注册，react 暂时不清楚是否需要注册