import React,{useState} from 'react'

// hook 是结合函数式组件使用，达到类组件的各个优点的

export default function NumberHook() {
  /**
   * 现在尝试为当前函数式组件引入一个state Hook
   * 使用hook 的一个API useState
   * useState 是一个函数。来自于react 包
   * - 参数
   *  传入一个state作为初始值
   * - 返回值
   *  返回一个数组
   *  * 数组的第一个元素是当前的state 状态
   *  * 数组的第二个元素是一个函数，该函数接受一个state 作为参数，可以修改当前的state 为参数的值
   *    并且调用该函数后还会重新渲染当前组件  
   *  *** 注意state 不一定非要是一个对象，它可以是任意数据
   *  每一次调用useState 函数都会创建出全新的state 和setState 
   * 
   * 
   * ****两个原则：只能在组件函数的最外层调用hook，不能在条件语句，判断语句等代码的代码块内部使用
   *      不能在其他的JavaScript 函数中使用hook，不能调用hook 即（use。。。）而不是不能使用set 函数
   */

    const arr = useState(0)
    // 直接传入一个Number 类型数据作为state的初始数据也是可以的，不用想以前一样非要在中间用一个对象做中转
    let state = arr[0]
    let setState = arr[1]
  return (
    <div>
      {/* jsx 代码在不涉及逻辑代码的部分与类组件是相同的 */}
      当前计数:{state}
      {/* state 是直接定义在当前函数之中的，所以不需要任何前缀，直接使用即可 */}
      {/* 但是在状态使用以及函数使用上与类组件是不同的 */}
        <h2></h2>
        <button onClick={e => {setState(state+1)}}>+</button>
        {/* 函数也是，直接使用setState 即可 */}
        <button onClick={e => {setState(state-1)}}>-</button>
    </div>
  )
}
