import React, { Component } from 'react'

/**
 * 在vue 中，vue实现了自动监听数据变化以改变dom（响应式原理）
 * 但是react 并没有实现这个功能，我们只能自行通知react 数据已经变化，需要重新渲染，具体方式就是通过setstate修改数据，react就会监听数据改变并重新渲染
 * 
 * - 为什么我们要使用setstate
 *  我们直接修改数据react是无法作出响应的，需要我们通知react数据更新，通知的方法就是使用setstate更新数据
 * - 为什么我们可以随时使用setstate方法，我们并没有对其进行定义啊？
 *  setstate 方法是定义在React.Component 类的原型对象中的，因为一切的组件都继承自该类，故都可以使用
 */

export default class App extends Component {
  constructor(props){
    super(props)

    this.state={
      count:0
    }
  }
  render() {
    return (
      <div>
        当前计数：{this.state.count}
        <button onClick={()=>{this.add()}}>+</button>
      </div>
    )
  }

  add(){
    this.setState({
      count:this.state.count+1
    })
  }
}
