import React,{useState,useEffect} from 'react'
import useScroll from'./hooks/useScroll'

// 定义自定义hook 供之后使用


export default function HookDemoScroll() {
  /**
   * 小练习需求，获取到页面的滚动并通过接口传入，使得组件可以直接使用该数据
   * 
   * 老师的做法是useState 定义在组件中，但是我觉得useState 也可以一齐放在自定义hook 中
   * 
   * 不对，老师也是放到了自定义hook当中的，然后将创建的state直接作为返回值返回
   * 
   * 现在将自定义hook 放到单独的文件中，再导入当前的文件中进行使用
   */

  const position = useScroll()

  return (
    <div style={{height:'10000px'}}>
      <h2 style={{position:'fixed',top:'50px'}}>{position}</h2>
    </div>
  )
}
