import React, { PureComponent } from 'react'
import{
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Switch
} from'react-router-dom'
import Join from './Join'


function Name() {
  return (
    <div>
      name:tkoyist
    </div>
  )
}
function Age() {
  return (
    <div>
      age:21
    </div>
  )
}
function Height() {
  return (
    <div>
      height:...
    </div>
  )
}

/**
 * 手动的路由跳转通过BrowserRouter 传给路由组件的API进行，我们可以直接在路由系统内部通过 this.props.history.push 方法跳转页面 
 */



export default class LZL extends PureComponent {
  render() {
    return (
      <div>
        {/* <BrowserRouter> */}
        {/* 
          这里我们没有添加BrowserRouter 标签，否则
          - this.props.history.push('/lzl/join') 方法修改url 之后却无法修改当前的路由页面
          - 有些route 无法识别（有部分原因来自外界）
          首先，我们要明确一个观点NavLink 我们可以理解为其只用于修改当前页面的url，但是修改url 之后路由页面并不会变化似乎没有意义
          当url 修改之后，继续执行代码，执行到Route 代码区，Route 就是一个个的v-if ，每一个Route 都会用当前的url 与Route 中的path 进行匹配，在不添加exact 关键字的前提下，只要url的前某部分与path相同，那么就匹配成功
          更改路由界面为Route 中预先指定的界面，这中匹配是上下文无关的匹配，一个Route匹配成功并不影响其他的Route继续匹配
          但是当我们使用Swtich 组件将一些Route 包裹起来之后，Switch 组件内部的Route 就只能有一个被匹配上，或者说，当一个Route被匹配上之后，其他的Route 不会再来进行匹配，即使后面有其他能匹配上的也一律不进行匹配
          注意，这种唯一选择是指针对Swtich 当中的Route的，如果我们将一些Route写在Swtich外部，这些Route 是不会受Swtich 影响的，依然会进行匹配（能不能匹配上就是另外的事情了）
          再来说exact（精确的）表示精确匹配，即只有当url 与Route 中的path 完全一致（不能是部分匹配了）的时候，当前路由才会生效，才能修改路由页面
          注意到了吗，本质上两者是没有关系的

          现在说道嵌套路由的问题

        */}
        
          <NavLink to='/lzl'>name</NavLink>
          <NavLink to='/lzl/age'>age</NavLink>
          <NavLink to='/lzl/height' >height</NavLink>
          <button onClick={e=>{this.jumpToJoin()}}>加入我们</button>

        <Switch>
          <Route exact path='/lzl' component={Name}/>
          <Route path='/lzl/age' component={Age}/>
          <Route path='/lzl/height' component={Height}/>
          <Route  path='/lzl/join' component={Join}/>
          <Route component={Age}/>
        </Switch>
          <Route component={Age}/>

        {/* </BrowserRouter> */}
      </div>
    )
  }
  jumpToJoin(){
    console.log(this.props.history);
    console.log(this.props.location);
    console.log(this.props.match);
    // 我们这里能访问到prop 中的很多属性，这这些属性是来自于Route 组件
    // 此时在组件中是访问不到这些数据的，但是我们真正使用当前组件的时候（在路由中使用的时候）会将当前组件传递给route组件，由route组件进行加工，然后就会在此过程中为组件的props 中添加一些数据，其中就包括history

    // 我们可以借助history 完成很多功能，例如转到页面，回到上一个页面，回到下一个页面
    this.props.history.push('/lzl/join')
  }
}
