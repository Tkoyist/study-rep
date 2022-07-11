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
import Detail2 from './pages/路由参数传递'
import Detail3 from './pages/路由参数对象传递'


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
            <NavLink to={`/detail/${id}`} activeClassName={'NavLinkActive'}>详情页</NavLink>
            {/* 将参数通过url 中字符串的形式进行传递，很麻烦，不推荐 */}
            <NavLink exact to={`/detail2?name=lzl&age=21`} activeClassName={'NavLinkActive'}>以字符串的方式传递数据</NavLink>
            {/* 
              现在推荐以对象的方式传递数据，即将数据与url等放入一个对象中传入，对象的格式是固定的，里面的各个属性与属性对应的数据也是固定的 
              - pathname  存放url
              - search    存放想要放到url 上直接显示的参数，类似于上一个例子，直接使用字符串传递数据
              - state     需要传递的数据，如果指向一个对象，那么该对象就会直接被放入之后的location 对象中
            */}
            <NavLink exact to={{
              pathname:'/detail3',
              // 将url 传入pathname 属性
              search:id,
              // 将需要在url 中展示的参数，放入search 属性这里只能使用字符串，search 接受一个字符串作为对象，只要传入参数是一个对象就可以，这也就代表着我们可以使用变量传入数据
              // 组件在解析search 当做的字符串的时候，会判断里面是否有参数索引符 ? 如果没有则会直接为其添加上该符号
              state:info
              // 将需要直接传递给路由页面的参数放入state 中传递
              // 我们在这里直接传入 info 本质上是将info 指向的对象直接传入state ，我们在路由页面中就可以直接将state 当做info，通过state访问info当中的数据
              // state 接受一个对象作为参数
            }} 
            activeClassName={'NavLinkActive'}>
            以对象的方式传递数据
            </NavLink>

            <button onClick={e=>{this.jumpToJoin()}}>加入我们</button>

            <Switch>
            <Route  path='/lzl' component={LZL}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/proflie' component={Proflie}/>
            <Route exact path='/user' component={User}/>
            <Route exact path='/userdata' component={Userdata}/>
            <Route exact path='/login' component={Login}/>
            <Route  path='/join' component={Join}/>
            <Route exact path='/detail/:id' component={Detail}/>
            <Route path='/detail2' component={Detail2}/>
            <Route path='/detail3' component={Detail3}/>
           
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