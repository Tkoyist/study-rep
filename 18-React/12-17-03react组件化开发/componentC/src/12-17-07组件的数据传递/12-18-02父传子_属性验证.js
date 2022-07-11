/*
  我们希望能在子组件处理来自父组件的数据之前先对父组件传入子组件的数据进行处理，验证数据的类型

  需要使用到一个库'prop-types' 我们在使用这个功能之前需要先导入库

  使用属性验证：
  - 导入'prop-types'库
  - 创建组件
  - 为创建的组件添加prosTypes 属性，并在属性中为各个数据指定数据类型
*/
import React,{Component} from 'react'
// 导入数据'prop-types'库
import propTypes from'prop-types'

// 创建组件
function Main(props) {
  const {msg} = props 
  return (
    <div>
      {/* {props.msg} */}
      {msg}
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </div>
  )
}

// 为创建的组件添加属性验证,我们设置msg属性为string类型，如果父组件传入的数据不为string类型，那么就会报错
// 但是如果某个属性不传入数据proptypes 是不会报错的
// 但是如果我们希望指定某个属性必须有值，则可以为该属性绑定isRequired 属性
// 如 msg:propTypes.string.isRequired


// 经测试，均会正常验证，不符合确实会抛出错误，但是似乎不会影响后续渲染
// 对，不会影响后续渲染，但是会抛出错误0000
Main.propTypes = {
  msg:propTypes.string.isRequired
}

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
    