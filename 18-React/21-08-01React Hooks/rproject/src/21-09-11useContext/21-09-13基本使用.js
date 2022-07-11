import React,{useContext} from 'react'
import{userContext,styleContext}from'../App'

export default function ContextHookDemo(props) {
  // 另外一个文件中的笔记已经说明了原本的context 使用存在的问题，那一个个的嵌套太他妈的麻烦了

  /**
   * 现在：隆重介绍hook 提出的新方案
   * context hook
   * useContext() api
   * 
   * ----首先数据的提供，context 的创建是不变的
   * 
   * 在使用数据的文件中
   * 将一个我们定义好的context 实例作为参数传入
   * 
   * 获取到useContext 函数的返回值，该返回值是一个对象，对象中即保存中我们在provider 中传入的数据
   */
  const user = useContext(userContext) // 这里传入的userContext与styleContext都是使用原本方式创建的context对象，且数据的提供也是
  const style = useContext(styleContext)
  return (
    <div>
          {user.name}
          {style.color}
        
    </div>
  )
}
 