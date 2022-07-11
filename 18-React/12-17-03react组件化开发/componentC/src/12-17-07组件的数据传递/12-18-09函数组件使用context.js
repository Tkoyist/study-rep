import React, { Component } from 'react'

// 在函数组件中使用context

// - 首先一样的需要先创建context 对象
const msgContext = React.createContext({
  msg:'这是context的默认信息'
})


export default class App extends Component {
  constructor(props){
    super(props)

    this.state={
      msg:'来自App 组件的数据'
    }
  }
  render() {
    return (
      <div>
        {/* 在父组件共享数据 */}
        <msgContext.Provider value={this.state}>
          <Son/>
        </msgContext.Provider>
      </div>
    )
  }
}


class Son extends Component {
  render() {
    console.log(this.context);
    return (
      <div>
        <GSon/>
      </div>
    )
  }
}

/**
 * 在函数中显然是不存在context 属性的，所以使用方法上有些区别
 * 首先就是函数返回值仍然是jsx 代码
 * 但是最外层标签需要是<msgContext.Consumer> consumer 表示订阅者，表示内部的元素订阅了msgContext 这一context 中的数据
 * 标签中是一个{} {} 内部需要是一个箭头函数，箭头函数的返回值才是真正的子组件的jsx 代码，而在箭头函数的返回值的jsx代码中，我们就可以正常使用订阅的context数据了
 */
function GSon(){
    return (
      // <msgContext.Consumer> 是与 <msgContext.Provider value={this.state}> 相对应的，前者获取数据，后者共享数据，在前者内部可以使用在后者中共享的数据
      // 但是使用格式有严格限制，在标签内部创建一个箭头函数用于接受数据，我们在<msgContext.Provider value={this.state}> 处定义的数据会作为参数传递给内部的箭头函数，然后在箭头函数的返回值中编写jsx 代码用于构建子组件
      <msgContext.Consumer>
        {
          value=>{
            return (
              <div>
                {value.msg}
              </div>
            )
          }
        }
      </msgContext.Consumer>
    )
}

// GSon.contextType = msgContext