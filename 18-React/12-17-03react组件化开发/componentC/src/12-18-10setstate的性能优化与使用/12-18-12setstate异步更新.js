import React, { Component } from 'react'
/**
 * setstate不能单纯的说是同步的或者说是异步的
 * 它在合成事件和生命周期函数中是异步的（合成事件：react的事件并不是浏览器的原生dom 事件，而是经过react自己合成的，因为react 有时还需要监听app 控件事件）
 * 在延时器和原生dom 中，它是同步执行的000000000000
 */
export default class App extends Component {
  constructor(props){
    super(props)

    this.state={
      msg:'hello wrold'
    }
  }
  render() {
    return (
      <div>
        当前计数：{this.state.msg}
        <button onClick={()=>{this.change()}}>+</button>
      </div>
    )
  }
  
  // 方式二：我们知道render函数执行完毕之后会调用一个生命周期函数，而在render 执行完毕之后数据当然已经更新，我们可以在该生命周期函数中处理数据
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.msg);
    // 我们还发现这个生命周期函数会比setstate的回调先执行
  }
  

  change(){
    // this.setState({
    //   msg:'你好世界'
    // })
    // 如果setstate是同步执行的，那么我们在上面调用setstate 之后，下面打印的结果应该是修改过后的数据，但是打印的仍然是修改前的数据
    // console.log(this.state.msg); // hello world

    // setstate 是异步执行的，会在函数的同步代码执行完毕之后才执行

    /**
     * 为什么要设计为异步
     * - 如果设计为同步更新，那么即每一次调用setstate 都要进行一次渲染，如果在一个同步代码中多次调用setstate的话，就会重复的刷新，这是对性能的浪费
     *  所以将更新放到异步代码中，当同步代码执行完毕之后，一次性将更新的所有数据全部获取进行重新渲染
     * - 如果同步更新数据，那么state数据立即更新之后，在render 函数执行之前，state中的数据和传给子组件的props 的数据是不一致的，这会造成一些问题
     */

    // 我们想要获取更新后的正确数据怎么办
    // 核心思想都是想办法在更新结束之后再获取数据


    // 方式一：setstate 是存在第二个参数的，该参数是一个回调函数，setstate函数会在数据更新完毕之后自动调用该回调函数

    this.setState({
      msg:'你好世界'
    },()=>{console.log(this.state.msg);})
  }
}