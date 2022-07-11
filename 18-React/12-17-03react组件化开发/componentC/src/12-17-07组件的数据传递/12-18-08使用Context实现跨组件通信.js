import React, { Component } from 'react'
/**
 * context 的使用总共分为三步
 * - 创建Context 对象
 * - 父组件共享数据
 * - 子组件获取数据
 * - 使用数据
 */


// - 创建Context 对象
// 使用React.createContext() 这一API直接创建一个context 对象，创建时需要传入一个对象，对象中用于存储context 的默认值
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
        {/* 
          - 共享数据
          将需要获得数据的组件（某个组件需要获得数据，使其父组件获得数据也是可以的）放在我们创建的context对象的Provider 属性创建的标签中
          使得需要获得数据的组件成为<msgContext.Provider> 组件的子组件
          然后为该context 组件添加一个value属性，在value属性中传入我们希望共享的数据
        */}
        {/* provider 意为提供者 */}
        <msgContext.Provider value={this.state}>
          <Son/>  
        </msgContext.Provider>
          <Son/>
          {/* 即使第二步没有共享数据，我们在子组件处依然能使用数据，只不过使用到的是我们创建context 时传入的默认数据 */}
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


class GSon extends Component {
  render() {
    console.log(this.context);
    return (
      <div>
        {/* 通过contextType 绑定数据之后，就可以在绑定了数据的位置使用数据了 */}
        {/* 注意我们这里拿到的数据是我们之前在 </msgContext.Provider> 组件中传给value属性的值，传给value的数据是什么，在这里使用context 获取到的数据就是什么 */}
        {this.context.msg}
      </div>
    )
  }
}
/**
 * 在需要使用的子组件的位置获取到context 对象，并赋值给需要使用该context 的组件的contextType属性
 * 绑定数据之后，就可以在子组件的context 属性中获取到数据了
 */
GSon.contextType = msgContext