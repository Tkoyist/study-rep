import React, { PureComponent } from 'react'
import styled from 'styled-components'

// div 方法的返回值是一个组件，组件中包含了我们输入的css 样式，我们可以通过将需要样式的组件包含在返回值组件内部的方式为元素覆盖指定的css 样式
const Content = styled.div`
  color: #000;
  font-size: 20px;

  /* 可以在styled 的css 属性内部直接写上其他的样式选择器，styled-components 会自动根据对应层级关系在对应的元素层中寻找对应元素 */
  /* 这确实有点好用兄弟们 */
  .banner{
    background-color: #bfa;

    /* 表示.banner 的子元素中类型为div 的元素 */
    div{
      background-color: red;
      /* 现在我们希望选中div 选中的元素中的类名为 active 的元素，将其字体变为白色 */
      /* 那么我们就要使用 & 符号，表示当前选择器是与其父选择器同层级，且优先级更高的存在 */
      &.active{
        color:#fff;
      }
      /* 上面这种选择器就选中了其父选择器选中的元素（当前层级的div 元素中类名为class 的那些元素） */

      /* 有了& 符号的存在，伪类和伪元素的选择也变容易了 */
      /* 是鼠标指向位置的元素变黑 */
      &:hover{
        background-color: #fff;
      }
      /* 牛逼！ */

      /* 据说这是less 和 sass 的写法，有时间学学 */
    }
  }
`
// 接受返回组件以便之后使用
// 由于返回的是组件,所以注意用于接受组件的变量首字母需要大写


//下面创建一个新的 styled-components 组件
// 组件方法的 attrs 方法会将原本的组件方法进行一些修改（为其添加上我们传入attrs方法中的数据）然后再返回（类似于高阶组件）
// 所以我们可以直接使用 styled.div.attrs()`` 的方法直接对attrs 方法的返回值进行调用
const Content2 = styled.div.attrs({
  bcolor:'red'
})`
.newTitle{
  /* 我們使用attrs 中的参数要通过箭头函数的形式 */
  /* 我们在css属性内部出现 %{} 的时候会调用符号内部的箭头函数，并将attrs 中的属性作为参数传入 */
  background-color: ${props=>props.bcolor};
  /* color:${props=>props.acolor}; */
  /* font-size: ${props=>props.fs}; */
  .state{
    color:${props=>props.stateColor}
  }
  }
`

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state={
      stateColor:'green'
    }
  }
  render() {
    return (
      <div>
      <Content>
        45as4d564as6d4a64sd65a4s6d54a64sd6
        <h2 className='banner'>464646465465464644
        <div className='active'>123312</div>
        <div>123312</div>
        <div>123312</div>
        <div>123312</div>
        </h2>
      </Content>
      
      <br />
      {/* 
        我们可以直接对 styled-conponents 组件传递属性，它也可以直接接受到属性，老师说这是值穿透
        但是我觉得本质上就是一个内联样式的使用啊，没有那么多花里胡哨，本来方法返回值就是一个组件，组件可以定义内联样式很正常啊
      */}
      <Content2 style={{color:'blue'}} stateColor={this.state.stateColor}>
        {/* 
          我们还可以为一个styled-conponents 组件传入一个state中的动态属性
          传入的属性会被放在和attrs 中的属性相同的位置，使用的方式也和attrs 中的属性的使用方式也相同
          不同之处在于它会响应state的更新
            其实原理也很好理解
            每次state更新都会重新调用render 函数，重新渲染
            每次渲染都会重新获取传入组件中的数据，由于这些数据来源于state
            而state中的数据已经修改，所以组件中总能获取到最新的数据
        */}
        4656546546546456
        <div className='newTitle' style={{color:'white'}}>
          conten2
          <div className='state'>
            statecolor index
          </div>
        </div>
      </Content2>
    
      </div>
    )
  }
}
