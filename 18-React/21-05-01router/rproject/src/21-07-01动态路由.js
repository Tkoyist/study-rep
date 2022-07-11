import React,{Component} from 'react'

import {
  Link,
  Route,
  Routes,
  BrowserRouter,
  HashRouter,
  NavLink,
  Switch,
  Redirect,
  withRouter
}from'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Proflie from './pages/Proflie'
import Blank from'./pages/blank'
import User from './pages/User'
import'./App.css'
import Userdata from './pages/Userdata'
import Login from './pages/Login'
import LZL from './pages/手动跳转的组件'
import Join from './pages/Join'
import Detail from './pages/动态路由的组件'


class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
      const id = "tkoyist"
      return(
        <div>

            <NavLink exact to='/' activeClassName={'NavLinkActive'}>首页</NavLink>
            <NavLink to='/about' activeClassName={'NavLinkActive'}>关于</NavLink>
            <NavLink to='/proflie' activeClassName={'NavLinkActive'}>我的</NavLink>
            <NavLink to='/user' activeClassName={'NavLinkActive'}>用户</NavLink>
            <NavLink to='/lzl' activeClassName={'NavLinkActive'}>LZL</NavLink>
            {/* - Link 组件修改的url是动态的 */}
            <NavLink to={`/detail/${id}`} activeClassName={'NavLinkActive'}>详情页</NavLink>
            {/* 
              使用 ` ` 符号与 ${ } 符号实现动态url 字符串的拼接在 ${ } 中可以写入动态的数据
            */}
            <button onClick={e=>{this.jumpToJoin()}}>加入我们</button>

            {/* 
              动态路由：我们可以设置一个Link 指向的URL 为一个动态的URL 而与他匹配的Route 的路由页面可以根据URL 的不同展示不同的页面
              这种动态的路由关系就称之为动态路由
              即不同于静态路由的一成不变的路由映射表，它的路由映射表是动态的，url 与路由 以及 路由与 路由界面之间的映射关系也是动态的
              分为三个关键点
              - Link 组件修改的url是动态的
              - Route 要通过特定的语法使其能接受动态的url
              - 路由页面中要能获取到URL 中的不同的参数以决定展示什么样的页面
            */}

            <Switch>
            <Route  path='/lzl' component={LZL}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/proflie' component={Proflie}/>
            <Route exact path='/user' component={User}/>
            <Route exact path='/userdata' component={Userdata}/>
            <Route exact path='/login' component={Login}/>
            <Route  path='/join' component={Join}/>
            {/* - Route 要通过特定的语法使其能接受动态的url */}
            <Route exact path='/detail/:id' component={Detail}/>
            {/* 
              使用 : 符号，表示当前的Route 是动态匹配的 : 后面的字符是动态匹配字符的索引，而其值是由符合要求的动态Link 决定的
              -- 是可以添加上 exact 开启精确模式的，这样就类似于正则表达式匹配，虽然不是完全一致的，但是也是可以正确匹配上的
            */}
            <Route component={Blank}/>
            </Switch>

         
        </div>
      )
    }
    jumpToJoin(){
      console.log(window.history);
      this.props.history.push('/join')
    }
}

export default withRouter(App)