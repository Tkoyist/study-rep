import React, { forwardRef,useRef } from 'react'

// 3 使用 forwardRef 函数将函数式子组件包裹起来，并为函数添加另外一个参数用于接受传入的ref 实例
const InputCom = forwardRef(function(props,ref){
  
  // 4 在子组件中为需要的元素绑定上ref 实例
  return <input type='text' ref={ref}></input>
})

export default function ForwardRefDemo() {
  /**
   * 需求：
   * 要求在父组件中定义一个按钮，点击该按钮使子组件的输入框聚焦
   * 
   * 主要难点在于如何在父组件中获取到子组件的元素
   * 
   * 原本的解决方案是
   * forwardRef 函数，原本的函数式组件只接受一个参数props ，但是当我们使用forwardRef 函数将函数式组件包裹起来之后，函数式组件函数就可以接受两个参数（原理类似于高阶函数）
   * 第二个参数是一个ref 实例
   * 我们在使用子组件的时候，直接通过组件的ref 属性将ref实例传入子组件，我们就可以在子组件中使用传入的ref 实例，将其赋值给我们需要获取到的dom 元素，我们就可以直接在父组件中使用该ref 访问到dom 元素了
   */

  // 1 创建ref实例，便于后续使用
  const inputref = useRef()

  return (
    <div>
      {/* 2 将创建的ref 作为子组件的参数传入子组件 */}
      <InputCom ref={inputref}/>
      {/* 5 在父组件中通过ref 实例访问子组件中的元素 */}
      <button onClick={e=>{inputref.current.focus()}}>聚焦</button>
    </div>
  )
}
