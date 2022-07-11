import React, { PureComponent } from 'react'
import{
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Switch
} from'react-router-dom'
import{renderRoutes} from'react-router-config'
import routes from'../router/子路由'

export function Name() {
  return (
    <div>
      name:tkoyist
    </div>
  )
}
export function Age() {
  return (
    <div>
      age:21
    </div>
  )
}
export function Height() {
  return (
    <div>
      height:...
    </div>
  )
}



export default class LZL extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavLink to='/lzl'>name</NavLink>
          <NavLink to='/lzl/age'>age</NavLink>
          <NavLink to='/lzl/height' >height</NavLink>

        {/* <Switch>
          <Route exact path='/lzl' component={Name}/>
          <Route path='/lzl/age' component={Age}/>
          <Route path='/lzl/height' component={Height}/>
        </Switch> */}


        {/* 通过在其他文件中单独定义子路由的方式使用子路由映射表routes */}
        {renderRoutes(routes)}
        {/* 通过在父路由映射对象中存储子路由routes 的方式获取子路由映射表routes */}
        {renderRoutes(this.props.route.routes)}
        {/* this.props.route 获取到的是当前组件在其所在路由当中的路由映射对象，我们获取到该对象，再取出其中的routes 即获取到了子路由的路由映射表 */}
        {/* 因为我们真正渲染使用当前组件只会是在父组件路由选中当前组件之后，且使用到的组件也是经过路由系统处理过的，准确的说是被renderRoutes 方法处理过的，就是在此处理过程中为组件的props 中添加了route 属性 */}
        </BrowserRouter>
      </div>
    )
  }
}
