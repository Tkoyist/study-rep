import React,{Component} from 'react'
function Main(props) {
  const {msg} = props 
  return (
    <div>
      {msg}
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </div>
  )
}

// 我们可以为组件的属性绑定默认值，当父组件没有传入数据的时候，便会使用默认值
// 使用方式和属性验证类似，也是给组件绑定一个属性，在属性中进行设置
Main.defaultProps = {
  msg:'这是子组件的默认信息'
}
// 设置默认值是可以直接使用的，不需要导入任何库

// 如果存在默认值，那么属性验证中的必须传入值的设置就会一直被满足了


export default class App extends Component {
  constructor() {
    super()
    this.state={
      msg:'这是来自于父组件的数据a'
    }
  }
  render() {
    return (
      // 先实现简单的数据传递，我们在父组件中使用子组件标签的时候可以为其定义一些属性，我们可以将需要传递给子组件的数据直接放到标签的属性当中传入
      <div>
                这是父组件
                <Main/>
            </div>
        )
      }
    }