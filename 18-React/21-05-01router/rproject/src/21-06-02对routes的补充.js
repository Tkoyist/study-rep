import React,{Component} from 'react'

import {
  Link,
  Route,
  Routes,
  BrowserRouter,
  HashRouter,
  NavLink,
  Switch
}from'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Proflie from './pages/Proflie'
import Blank from'./pages/blank'
import'./App.css'


export default class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
      return(
        <div>
          <BrowserRouter>

            <NavLink exact to='/' activeClassName={'NavLinkActive'}>首页</NavLink>
            {/* NavLink 还可以添加exact 属性，其作用与routes 中的exact 相同 */}
            <NavLink to='/about' activeClassName={'NavLinkActive'}>关于</NavLink>
            <NavLink to='/proflie' activeClassName={'NavLinkActive'}>我的</NavLink>

            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/proflie' component={Proflie}/>
            <Route component={Blank}/>
            {/* 我们会发现所有的路由页面都会显示Blank 为什么exact 没有生效呢？因为exact 的作用是对于当前组件进行'if'判断的时候，要求当前url 必须与path严格匹配才可以显示，但是不影响url 还会再去与其他的route进行匹配，也不会影响url被其他的路由匹配上并展示
                所以我们还是需要一个swtich 的解决方案 */}
            {/* 
              react-router 的占位方式与vue 是不同的，vue 是使用一个专门的占位标签，将选中的路由在占位标签处显示
              而react的路由仅从表现上来看更像是每一个route 都有自己的占位空间(当然他们的占位空间是在BrowserRouter 标签内部的,而BrowserRouter也是路由的总占位标签)
              在url 改变时,每一个routes 都会去与url 依次进行匹配,匹配上了就将当前的Route 组件渲染成为我们预先确定好的组件,没有匹配上就让其不在html页面中出现,
              看懂区别了吗,如果说vue 的匹配是swtich 方式的匹配的话,那么react 的匹配就是不断的if 匹配,之前是否匹配上不影响之后的匹配,是一种上下文无关的匹配,而vue的则是上下文有关的匹配
              经测试，确实是这样的，vue 中是不会出现一个url 能匹配到多个路由的情况的
              我们希望react 的路由匹配也成为swtich 的方式
            */}
            {/* 
              通过Swtich 组件实现
            */}

            <Switch>
            <Route  path='/' component={Home}/>
            <Route  path='/about' component={About}/>
            <Route  path='/proflie' component={Proflie}/>
            <Route component={Blank}/>
            </Switch>

            {/* 
              一定要分别弄清楚 exact 关键字和 swtich 组件各自的作用
              exact 表示精确匹配，要求url 必须与当前route 的path 完全匹配，而不能是部分匹配
              swtich 表示组件内部的route 的匹配将会是排他匹配，即匹配上一个route 之后就不会再匹配上其他的route 了，两者之间的职责是没有冲突也没有联系的
              只是我们使用两者的目的都是为了使url 不要一次性匹配上多个路由path，是一个问题的两个解决方案
            */}



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
              {/* <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/proflie' component={Proflie}/> */}
              {/* 没有问题，先使用老师的版本学习，之后再学习新版本的使用 */}
              {/* 路由页面渲染的位置是由Route 的位置决定的 */}
              {/* 确实这样感觉有点问题，感觉应该把它们整合到一起使用同一个占位资源，所以新版本的路由推出了Routes 标签将所有的Route整合了 */}
          </BrowserRouter>
        </div>
      )
    }
}