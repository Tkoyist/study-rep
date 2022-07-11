import React from 'react'
import{userContext,styleContext}from'../App'

export default function ContextDemo(props) {
  /**
   * 原本我们想要使用context 需要两个关键点
   * - 提供数据
   *  * 在提供数据的组件中导入createContext 函数
   *     错了，根本不需要导入，这就是react自带的函数
   *  * 使用该函数创建context 实例（例如 Date）
   *      在创建时可以为createContext 函数传入一个初值，该初值会作为该实例的默认数据，如果在某个地方使用该组件提供数据却没有赋初值的情况下，会使用默认数据
   *  * 使用实例.provider 组件将需要使用数据的区域包裹起来，并使用该组件的 value 属性传入需要使用的数据
   *      使用组件将需要使用数据的区域包裹起来，换句话说，就是将需要使用数据的组件放入该组件内部
   * 
   * - 获取数据
   *  * 在需要使用数据的组件文件中导入指定的context 实例（例如Data）
   *  * 使用 Data.consumer 组件将需要使用数据的区域包裹起来
   *  * 这还没完，我们要在组件内部使用函数接受 Data.consumer 传来的数据，再通过该函数返回jsx 代码，实现对context 数据的使用
   */
  return (
    <div>
      <userContext.Consumer>
        {
          user => {
            return(
            <styleContext.Consumer>
              {
                style => {
                  return(
                  <div>{user.name}----{style.color}</div>
                  )}
              }
            </styleContext.Consumer>
            )}
        }
        
      </userContext.Consumer>
    </div>
  )
}
