import React,{useRef,Component} from 'react'

// 创建一个类组件和函数组件，分别尝试使用ref 绑定

class ClassRefDemo extends Component {
  render() {
    return (
      <div>
        <h2>类组件式子组件</h2>
      </div>
    )
  }
}

function FunctionRefDemo(props) {
  return (
    <div>
      <h2>函数式子组件</h2>
    </div>
  )
}



export default function UseRefDemo() {
  function changeInput(ref){
    ref.current.value = '修改完成啦'
    // 使用ref 访问到虚拟dom（本质是一个对象），再通过虚拟dom 的current 属性访问到真实dom
    ref.current.focus()
    // focus 函数使元素聚焦
  }
  /**
   * 我们之前在类组件中也使用过ref，使用CreateRef 创建一个ref 实例之后将其绑定到某个dom 元素的ref 属性中，就可以使用该ref 实例直接访问到该元素的虚拟dom 对象，我们可以使用该对象中的对应属性获取到该元素的dom 实例
   * 
   * 我们使用useRef 便可以在函数式组件中创建出一个ref 实例，将该ref 实例绑定到某个元素的ref 属性上（其实就和createRef 使用方式差不多）
   * 唯一的关键点在于使用该hook 之后，创建的ref 是不会随着组件的重新渲染而刷新的，在组件的整个声明周期都是不变的
   * - 用于充当dom 的接口（函数式组件不能直接使用ref 绑定，但是类组件可以）
   * - 保存一个数据，这个对象在整个函数生命周期都可以保持不变
   */
  const inputref = useRef()
  /**
   * 使用，直接使用useRef 函数创建出一个ref 实例，然后再传入需要被获取的dom 的ref 属性中，即可通过该ref 实例访问到dom 元素的虚拟dom 对象
   */

  const classref = useRef()
  const functionref = useRef()
  function output(){
    console.log(classref.current);
    console.log(functionref.current);
  }
  return (
    <div>
      <h2>useRef 绑定DOM元素</h2>

      <input ref={inputref} type="text" />

      <button onClick={e=>changeInput(inputref)}>修改</button>

      <h2>------</h2>
      <ClassRefDemo ref={classref}/>
      <FunctionRefDemo ref={functionref}/>
      {/* 在函数中分别打印两个组件的dom 实例 */}
      <button onClick={e=>{output()}}>打印</button>
      {/* 报错，报错提示函数式组件无法使用ref */}
    </div>
  )
}
