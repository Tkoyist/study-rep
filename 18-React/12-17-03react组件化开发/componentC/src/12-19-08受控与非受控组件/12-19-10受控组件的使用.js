import React, { PureComponent } from 'react'
/**
 * 什么是受控组件
 * 在html中，表单的内部是维护有一个state 用于记录表单当前的一些数据的，例如input 元素的输入框中的数据
 * 
 * 我们在react 中当然希望能访问到这些数据，但是这些数据在表单内部，我们无法直接访问到
 * 我们希望表单中的数据直接对应state中的某个数据，这样我们就能轻松获取并处理数据
 * 为了实现这个功能
 * 我们需要取消表单的默认事件，使用事件响应函数获取到事件对象，调用事件对象中的对应方法取消默认事件
 * 以input为例
 * 我们再通过react 监听用户的输入操作，监听change 事件，当输入框中内容改变时对应的修改state中的对应数据
 * 然后要求input总是展示state中对应属性中的数据，这样input的输入就更改为了
 * 用户修改输入框数据-》react监听change事件对应的修改state中的属性-》由于state中的属性改变，重新渲染界面-》重新渲染将input中的数据更新
 * 由于前面的pure 渲染优化，所以重新渲染也只会渲染input
 * 
 * 这类数据被react 统一管理的元素就称之为受控组件
 */
export default class App extends PureComponent {
  constructor(props){
    super(props)

    this.state={
      name:'输入用户名'
    }
  }
  render() {
    return (
      <div>
        {/* 此时的input就被称之为受控组件 */}
        用户名：<input type="text"
                onChange={(e)=>{this.changeText(e)}}
                value = {this.state.name} />
      </div>
    )
  }
  changeText(e){
    console.log(e.target.value);
    // 监听元素的change 事件，接受事件对象event 根据事件对象中的数据（即用户修改的数据），修改state 中的数据，再根据state中的数据渲染元素
    this.setState({
      name:e.target.value
    })
  }
}
