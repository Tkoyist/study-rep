import React, { forwardRef,useRef,useImperativeHandle } from 'react'

// 3 使用 forwardRef 函数将函数式子组件包裹起来，并为函数添加另外一个参数用于接受传入的ref 实例
const InputCom = forwardRef(function(props,ref){
  
  // 在子组件中使用useImperativeHandle 函数
  // 该函数接受两个参数，一个是来自父组件的ref 实例，另外一个参数是一个返回对象的函数，我们要在该对象内部预定义子组件元素的接口，即我们希望父组件能获取到什么东西，就在该对象中将那些方法或者实例放入该对象当中
  // 为了让父组件不能直接获取到整个元素，所以我们不能直接将父组件传入的ref 放入元素的ref 属性当中，但是我们又需要获取到元素，才能定义各种接口
  // 所以我们需要单独在子组件中创建一个ref ，使用该ref 绑定子组件当中的元素，以此访问到该元素，并借此将其接口放到参数对象当中

  /**
   * 理清思路
   * useImperativeHandle 函数接受两个参数，第一个参数是ref ，第二个参数是一个函数，函数要求返回一个对象，对象中包含对子元素的各类接口
   * useImperativeHandle 函数的作用就是将ref 与该对象绑定起来，使ref.current 直接指向该对象，使得我们可以在父组件中使用该对象中预定义的接口
   * 而要使用接口，当然需要能访问到响应的dom 元素，那就又需要用到 useRef 不过这次ref 不需要在父子组件中传递，而是单纯在子组件中使用
   * 
   * 而且既然父组件传入的ref 是借由useImperativeHandle 对一个接口对象进行绑定，即没有直接对某个dom 元素进行绑定，那么我们完全可以在一个子组件中，通过useImperativeHandle 同时对外暴露多个函数
   * 使这些函数可以对子元素当中的多个不同的dom 元素进行各种不同的操作
   */

  // 创建ref 用于获取到input 输入框
  const inputRef = useRef()
  const inputRef2 = useRef()

  useImperativeHandle(ref,()=>({
    focus:()=>{
      // 在useImperativeHandle 参数对象中访问到对应的dom 并绑定相关操作，供外部使用
      inputRef.current.focus()
    },
    changeValue:()=>{
      inputRef2.current.value='使用useImperativeHandle修改元素2'
    }
  }))
  // 将子组件中创建的ref 绑定到子组件的dom 元素上，使我们可以在useImperativeHandle 中访问到对应的Dom 元素
  return (
  <div>
    <input type='text' ref={inputRef}></input>
    {/* // 再示例一个改变input 输入框的输入 */}
    <input type="text" ref={inputRef2}/>
  </div>

)})

export default function ForwardRefDemo01() {
  
  /**
     * 使用之前的方式完成功能，从功能上来讲，是没有问题的，但是，使用forwardRef 实现会导致子组件的元素暴露过多的接口给父组件，这是不好的
     * 我们希望子元素一次只暴露一个父组件需要的功能接口
     * 所以才有了 useimperativeHandle 这一 hook
     * 
     * 该hook 作用于子组件，使ref 的绑定，从原本的绑定子组件元素的整个元素，更改为了绑定一个由子组件定义的对象，该对象可以对子组件元素进行操作，而父元素只能使用这些预先定义的函数接口
     */
  
  // 1 创建ref实例，便于后续使用
  const inputref = useRef()

  return (
    <div>
      {/* 2 将创建的ref 作为子组件的参数传入子组件 */}
      <InputCom ref={inputref}/>
      {/* 5 在父组件中通过ref 实例访问子组件中的元素 */}
      <button onClick={e=>{inputref.current.focus();inputref.current.changeValue()}}>聚焦</button>
      {/* 使用了 useImperativeHandle 之后，我们就可以直接使用在子组件中预定义的接口函数，同时对多个子组件元素进行操作了 */}
      {/* 注意我们这里的current 本质上访问到的是被useImperativeHandle 函数绑定到ref 上的对象，而不再是某个dom 实例的 */}
    </div>
  )
}