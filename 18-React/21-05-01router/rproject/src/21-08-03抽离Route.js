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

import'./App.css'
import{renderRoutes}from'react-router-config'
import routes from'./router/index'



class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
      const id = "tkoyist"
      this.id='1231332'
      const info = {name:'lzl',age:12}

      return(
        <div>

            {/* 起初URl就是用于让客户端向服务端传递数据的，我们自然是可依通过URL 传递一些数据的 */}
            {/* 我们知道，在url 中，我们可以通过 ?key1=bal1&key2=val2... 的方式传递数据，我们可以在Link 标签中将url 修改为携带了这种参数的形式 */}
            {/* 注意其与动态路由的形式区别，动态路由是以 / 作为参数和地址的分隔，而路由传参是以 ? 作为分割的 */}

            {/* 这种方式下的传递参数，路由页面依然是原本的页面，所以我们直接使用模糊匹配，将带有参数的Link 直接指向对应的路由页面，进入页面之后url 仍然为带有参数的url 但是由于特殊字符？ 的存在，路由系统会自动解析参数 */}

            <NavLink exact to='/' activeClassName={'NavLinkActive'}>首页</NavLink>
            <NavLink to='/about' activeClassName={'NavLinkActive'}>关于</NavLink>
            <NavLink to='/proflie' activeClassName={'NavLinkActive'}>我的</NavLink>
            <NavLink to='/user' activeClassName={'NavLinkActive'}>用户</NavLink>
            <NavLink to='/lzl' activeClassName={'NavLinkActive'}>LZL</NavLink>

            <button onClick={e=>{this.jumpToJoin()}}>加入我们</button>

            {/* <Switch>
            <Route  path='/lzl' component={LZL}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/proflie' component={Proflie}/>
            <Route exact path='/user' component={User}/>

            <Route component={Blank}/>
            </Switch> */}

            {/* 直接在需要的位置导入renderRoutes 方法，并将我们预先定义的路由映射表文件作为参数放入，然后将函数返回值放在需要展示路由页面的位置 */}
            {renderRoutes(routes)}
            {/* renderRoutes 包含的路由映射表是排他性的映射，也就是类似于swtich 组件的效果，而其底层原理本质上就是直接使用了react-router 包中的swtich 组件 */}
         
        </div>
      )
    }
    jumpToJoin(){
      console.log(window.history);
      this.props.history.push('/join')
    }
}

export default withRouter(App)