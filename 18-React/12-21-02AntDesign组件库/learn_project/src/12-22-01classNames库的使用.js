import React, { PureComponent } from 'react'
/**
 * 我们在vue 中可以给元素的class 属性传入一个对象，在对象中直接使用数据决定该类是否生效，例如
 * class={'active':isactive}
 * 但是在react 中是不支持这种写法的，react 中只能以js 代码的方式写入，而且react 中的className 属性只接受字符串，不论我们以怎么样的逻辑编写代码，最后都必须以字符串的形式传入数据，而且类名与类名之间需要使用空格隔开
 * 这样显然不够方便
 * 所以出现了 classNames 这个第三方库
 * 既然是第三方库，当然需要安装导入再使用
 * 该库默认导入的是一个函数，我们将vue 中形式的class 数据传入之后，该函数就会返回正确的字符串
 * 所以我们可以让className 等于这个函数的返回值，并将正确形式的class 数据作为参数传入
 * 
 * - 该函数可以接受多个参数，我们可以直接将静态的类名以字符串的形式传入
 * - 该函数的任何一个参数都可以是一个对象，我们可以将动态的数据作为参数对象的属性传入，并为属性赋值为一个动态数据，解析时会根据该属性的value 值决定是否添加该类
 * - 也可以将类名作为放入一个数组中传入
 *  * 对象的属性值必须是字符串形式
 * - 以上两种情况可以同时出现，混合使用
 */

import classNames from'classnames'
import styled from'styled-components'

// 注意styled 函数的返回值是一个组件啊，首字母要大写啊！不然babel 不会将其当做组件处理啊！
const StyledC = styled.div.attrs({
  redColor:'red'
})`
.active{
  background-color: ${[props=>props.redColor]};
  color:${props=>props.asd}
}
.black{
  background-color: black;
}
.big{
  font-size: 20px;
}
`


export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state={
      isActive:true,
      isBlack:true,
      whiteColor:'white'
    }
  }
  render() {
    return (
      // <StyledC fontSize="100px">
      // 这种写法为什么不能生效，本身元素就不能直接接受这种css 属性，必须放在style 属性中才能使用，这还用说吗

      
      <StyledC style={{fontSize:'100px'}} asd={this.state.whiteColor}>
      {/* style 属性接受的是一个对象！！！！！！！！！ */}
        000000000000000000
        <div className={classNames({active:this.state.isActive},'big')}>11111111111111111</div>
        {/* 传入classNames 函数中的对象的key 不需要一定是字符串，函数会自动解析 */}
        <br />
        <div>22222222222222222</div>
      </StyledC>
    )
  }
}
