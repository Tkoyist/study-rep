import React,{Component} from 'react'

import {
  Link,
  Route,
  Routes,
  BrowserRouter,
  HashRouter,
  NavLink,
  Switch,
  Redirect
}from'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Proflie from './pages/Proflie'
import Blank from'./pages/blank'
import User from './pages/User'
import'./App.css'
import Userdata from './pages/Userdata'
import Login from './pages/Login'


export default class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
      return(
        <div>
          <BrowserRouter>

            <NavLink exact to='/' activeClassName={'NavLinkActive'}>首页</NavLink>
            <NavLink to='/about' activeClassName={'NavLinkActive'}>关于</NavLink>
            <NavLink to='/proflie' activeClassName={'NavLinkActive'}>我的</NavLink>
            <NavLink to='/user' activeClassName={'NavLinkActive'}>用户</NavLink>
            {/* NavLink 或者说Link 的作用也很简单，当被点击时修改url 通过hash或者history 的方式进行修改，BrowserRouter 会拦截标签的默认行为，然后修改url BrowserRouter会监听这种修改，然后将修改之后的url
                与route 中的数据进行一一对比，route 就是路由中的映射表，负责记录url 与页面组件之间的映射关系 */}

            
              {/* Redirect 意为重定向，作用是当我们进入某个路由页面时，如果我们希望它能直接跳转到另外一个页面的时候，即可直接使用重定向 */}
              {/* 例如当我们进入用户页面的时候,我们需要判断当前的页面是否已经登录,登录则显示用户页面,否则显示登录页面,那么就可以使用重定向 */}

              {/* 
                对重定向的理解
                重定向就是无需点击直接通过逻辑代码修改url，它所做的事只有这个，只是修改了url，但是url 的修改会被路由组件监听拦截，然后与route 进行匹配，再由route 参照映射表完成对路由页面的切换展示 
              */}
            

            <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/proflie' component={Proflie}/>
            <Route exact path='/user' component={User}/>
            <Route exact path='/userdata' component={Userdata}/>
            <Route exact path='/login' component={Login}/>

            <Route component={Blank}/>
            </Switch>

          </BrowserRouter>
        </div>
      )
    }
}