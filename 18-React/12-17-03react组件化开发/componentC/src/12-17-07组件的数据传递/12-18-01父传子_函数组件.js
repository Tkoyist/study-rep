import React,{Component} from 'react'

// 函数式子组件获取父组件传递的数据，直接将数据作为函数参数传入即可接收到来自父组件的参数
function Main(props) {
  // 因为数据作为参数传入，我们接受到的数据其实是一个对象props ，父组件使用子组件时传入的属性都被存储在了这个对象中，而这个对象作为函数参数
  // 在当前函数作用域内是可以正常使用的，但是记住组件函数接受到的数据是一个props 对象，是一个对象，我们访问数据也需要通过访问对象属性的方式进行访问

  // --- 但是老师将其进行了解构
  const {msg} = props 
  // 进行解构之后，是将对象内的属性在当前的作用域中重新进行了定义，所以可以直接使用
  return (
    <div>
      {props.msg}
      {msg}
    </div>
  )
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
                <Main msg={this.state.msg}/>
            </div>
        )
      }
    }
    