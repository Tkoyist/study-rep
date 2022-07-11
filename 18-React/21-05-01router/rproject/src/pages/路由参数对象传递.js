import React, { PureComponent } from 'react'

export default class Detail3 extends PureComponent {
  render() {
    console.log(this.props.location.state);
    return (
      <div>
        Detail2
        {/* 我们可以直接通过loaction 对象当中的属性获取到来自于url 中的参数，但是直接获得，得到的是字符串形式的参数 */}
        {this.props.location.search}
        {/* react 是不会默认解析的，得到的就是字符串，因为这个方式传参不推荐 */}
        {this.props.location.state.name}
        {this.props.location.state.age}
        {/* 注意传给state 当中的数据会直接作为state 的属性进行传递，我们使用数据的时候要注意数据的嵌套关系 */}
      </div>
    )
  }
}
