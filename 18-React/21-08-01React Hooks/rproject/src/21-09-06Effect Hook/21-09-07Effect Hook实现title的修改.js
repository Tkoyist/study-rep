import React,{useState,useEffect} from 'react'

export default function HookChangeTitle() {
  const [count, setcount] = useState(0)

  /**
   * 我们希望实现一个功能，当我们使用下方的按钮修改count 的时候，或者说每当数据发生改变的时候修改当前页面的标题为计数值
   * 在以前，我们只能通过复杂的两个生命周期函数进行功能的挂载和解除挂载
   * 但是现在有了 Effect Hook 直接使用即可
   * 
   * Effect Hook
   * 接口为 useEffect() 函数
   * - 参数
   *  * 接受一个函数作为参数
   *  * 还接受一个可变参数
   * - 作用
   *  该函数作为回调会在每次组件渲染完成之后执行，不需要解绑
   */
  useEffect(() => {
    document.title = count
    // 在useEffect 可以直接使用state ，没有复杂的this 问题
  })
  
  return (
    <div>
        当前计数:{count}
        <button onClick={e=>{setcount(count+1)}}>+</button>
    </div>
  )
}
