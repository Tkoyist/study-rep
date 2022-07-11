import React, { PureComponent,Component,memo } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state={
      count:0,
      msg:'a'
    }
  }

  render() {
    console.log('app');
    return (
      <div>
        {this.state.count}
        <button onClick={()=>{this.add()}}>+</button>
        {/* 
          在这里我们修改了app 的数据影响了app 的渲染，但是tab 是继承自PureComponent 类的，所以没有刷新
        */}

        <button onClick={()=>{this.change()}}>+</button>
        {/*
          经过测试发现，PureComponent 确实能避免重复刷新，即使是app 自身的数据修改，但是如果不会影响渲染那么之后相同的数据再次发生更新也不会重新渲染app
          更不用说app 的子组件，不会发生改变
          因为react已经发现该数据的改变不影响任何渲染（包括子组件渲染）
        */}
        <Tab/>
        <NewBottom/>
      </div>
    )
  }

  add(){
    this.setState({
      count:this.state.count+1
    })
  }

  // 创建一个事件响应函数，该函数修改state的数据但是不会影响页面的展示 
  change(){
    this.setState({
      msg:'b'
    })
  }
}


class Tab extends PureComponent {
  render() {
    console.log('tab render');
    return (
      <div>
        这是头部
      </div>
    )
  }
}


/**
 * 对函数式组件的渲染优化需要使用到react包中的 memo 高阶组件
 * 使用方法
 * 将需要渲染优化的组件函数传入memo 函数中，memo 函数会返回已经进行性能优化处理的函数式组件，直接使用即可 
 */
const NewBottom = memo(
  function Bottom() {
    console.log('bottom render');
    return (
      <div>
        这是尾部
      </div>
    )
  }
)
// 使用一个变量获取到memo函数的返回值，该变量就指向被处理之后的函数式组件，直接作为普通的函数式组件使用即可

