import React, { PureComponent } from 'react'
/**
 * 我们可以在使用某个标签的时候直接为其通过内联样式的形式将css 属性作为style 标签的值传入
 * 
 * - 每个元素和组件都可以有单独的css 属性
 * - 可以动态获取state中的数据用于决定css 样式
 * 
 * - 没有提示
 * - 伪类不适用
 * - 大量样式使用的时候，麻烦
 * 
 * - 可以用于一些极小元素的样式，不常用
 */
export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state={
      color:'red'
    }

    // 在外部定义样式对象
    this.statestyle={
      color:'blue',
      fontSize:'100px'
    }
  }
  render() {
    return (
      <div>
        {/* 
          注意事项：
          - style 属性接收的是一个对象，我们要将样式数据放入一个对象中传入style 标签中
          - style对象中的属性不接受 - 符号作为分隔，我们应当使用驼峰标识
          - 我们可以直接在style 对象中直接使用state中的数据
        */}
        <h2 style={{fontSize:'50px',color:this.state.color}}>内联样式</h2>

        {/* 
         既然传入的是一个样式数据对象，那我们当然是可以在外部直接定义好一个样式对象然后直接使用的
        */}
        <h2 style={this.statestyle}>使用组件中定义的对象作为元素的内联样式</h2>
      </div>
    )
  }
}
