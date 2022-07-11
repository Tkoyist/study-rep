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


class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
      return(
        <div>
          {/* <BrowserRouter> */}

            <NavLink exact to='/' activeClassName={'NavLinkActive'}>首页</NavLink>
            <NavLink to='/about' activeClassName={'NavLinkActive'}>关于</NavLink>
            <NavLink to='/proflie' activeClassName={'NavLinkActive'}>我的</NavLink>
            <NavLink to='/user' activeClassName={'NavLinkActive'}>用户</NavLink>
            <NavLink to='/lzl' activeClassName={'NavLinkActive'}>LZL</NavLink>
            <NavLink to='/lzl' activeClassName={'NavLinkActive'}></NavLink>
            <button onClick={e=>{this.jumpToJoin()}}>加入我们</button>

            

            <Switch>
            {/* <Route exact path='/lzl' component={LZL}/> */}
            {/* 这里可以添加exact 但是这就要求内外路由需要属于不同的路由系统 */}
            <Route  path='/lzl' component={LZL}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/proflie' component={Proflie}/>
            <Route exact path='/user' component={User}/>
            <Route exact path='/userdata' component={Userdata}/>
            <Route exact path='/login' component={Login}/>
            <Route  path='/join' component={Join}/>
            <Route component={Blank}/>
            </Switch>

          {/* </BrowserRouter> */}
        </div>
      )
    }
    jumpToJoin(){
      // console.log(this.props.history);
      // 这种访问方式是错误的，因为当前组件并没有被route 加工过，并不存在这个属性
      console.log(window.history);
      // 但是直接访问全局的history 是可以成功的
      this.props.history.push('/join')
      // 但是我们还是使用由BrowserRouter 组件提供的push 方法，使用由它提供的push 方法会重新刷新当前的BrowserRouter 系统，会重新根据url 对当前页面中的Route 进行匹配
      
    }
}

export default withRouter(App)