import React, { PureComponent } from 'react'

export default class Detail extends PureComponent {
  render() {
    return (
      <div>
        {/* - 路由页面中要能获取到URL 中的不同的参数以决定展示什么样的页面 */}
        {/* 在动态路由中，我们需要在路由页面组件中获取到来自于路由系统的参数，理所当然先想到的就是通过props 进行传递 */}
        {/* 确实是这样的，之前在this.props 对象中访问到了很多属性，其中就包括 mathch，而就是在这个属性当中可以访问到动态路由相关数据 */}
        {/* 其中动态的那部分路由在 this.props.match.params.Route中定义的动态url的索引名   中 */}
        
        <h2>Detail:{this.props.match.params.id}</h2>
      </div>
    )
  }
}
