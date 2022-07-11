import React,{Component} from 'react'

import {
  Link,
  Route,
  Routes,
  BrowserRouter,
  HashRouter,
  NavLink
}from'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Proflie from './pages/Proflie'
import'./App.css'

// 在其他的js文件中创建组件并导出，就可以在其他文件中使用该组件了
export default class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
      return(
        <div>
          <BrowserRouter>
            {/*  
            <Link to='/'>首页</Link>
            <Link to='/about'>关于</Link>
            <Link to='/proflie'>我的</Link>
             */}
            {/* link标签在最后渲染会被渲染成为a标签 */}
            {/* 假设我们现在需要一个新功能，使得某个link 被选中时能展示特殊样式 */}
            {/* 仅针对Link 标签，是可以实现的，使用内联样式与state的状态结合，类似于vue 中的方案实现即可，唯一需要注意的是css元素的标签选择器需要选中a标签 */}
            {/* 因为Link 本身本质上是一个组件,组件接受我们传入的各类参数之后在内部进行一系列处理然后返回jsx 进行渲染,而link组件返回的jsx 就是一个添加了各类数据与功能的a标签 */}

             {/* NavLink 的使用，NavLink 功能上与Link 是存在很多的相似之处的，是在Link的基础上添加了一些功能 */}
             {/* 例如 activeStyle 以内联样式的方式修改link 被选中时的样式， */}
             {/* 该属性需要传入一个对象作为参数，在对象中确定元素被选中时的内联样式 */}
            {/* <NavLink to='/' activeStyle={{color:'red'}}>首页</NavLink>
            <NavLink to='/about' activeStyle={{color:'red'}}>关于</NavLink>
            <NavLink to='/proflie' activeStyle={{color:'red'}}>我的</NavLink> */}

            {/* 内联样式的使用不方便用于需要修改的样式较多的情况，所以还存在activeclassname 这一属性 */}
            {/* 该属性指向一个类名，该类名指向的css 类会在当前的link 被激活的时候被添加到link标签上 */}

            {/* 
             **注意！！！！！一定注意link与navlink在html 页面中最终都会被渲染成为a 标签！！！！！！
            */}


            <NavLink exact to='/' activeClassName={'NavLinkActive'}>首页</NavLink>
            {/* NavLink 还可以添加exact 属性，其作用与routes 中的exact 相同 */}
            <NavLink to='/about' activeClassName={'NavLinkActive'}>关于</NavLink>
            <NavLink to='/proflie' activeClassName={'NavLinkActive'}>我的</NavLink>

            {/* <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/about' element={<About/>}/>
              <Route exact path='/proflie' element={<Proflie/>}/>
            </Routes> */}
              {/* 
                现在是新版本了，和老师讲的不太一样
                首先，同一个路由的所有的Route 需要使用一个Routes 标签包裹起来
                其次 Route 的component 属性更改为了element 属性，并且其值也由一个组件对象更改为了组件的jsx 代码
              */}
              {/* 将路由版本回退之后尝试老师的方式 */}
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/proflie' component={Proflie}/>
              {/* 没有问题，先使用老师的版本学习，之后再学习新版本的使用 */}
              {/* 路由页面渲染的位置是由Route 的位置决定的 */}
              {/* 确实这样感觉有点问题，感觉应该把它们整合到一起使用同一个占位资源，所以新版本的路由推出了Routes 标签将所有的Route整合了 */}
          </BrowserRouter>
        </div>
      )
    }
}