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
import LZL from './pages/路由嵌套的组件'


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
            <NavLink to='/lzl' activeClassName={'NavLinkActive'}>LZL</NavLink>

            

            <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/proflie' component={Proflie}/>
            <Route exact path='/user' component={User}/>
            <Route exact path='/userdata' component={Userdata}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/lzl' component={LZL}/>
            {/* <Route component={Blank}/> */}
            </Switch>

          </BrowserRouter>
        </div>
      )
    }
}