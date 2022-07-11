import React, { PureComponent } from 'react'

export default class Detail2 extends PureComponent {
  render() {
    // console.log(this.props.location.state);
    return (
      <div>
        Detail2
        {/* 我们可以直接通过loaction 对象当中的属性获取到来自于url 中的参数，但是直接获得，得到的是字符串形式的参数 */}
        {this.props.location.search}
        {/* react 是不会默认解析的，得到的就是字符串，因为这个方式传参不推荐 */}
      </div>
    )
  }
}
