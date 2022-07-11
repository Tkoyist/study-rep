import React,{useReducer} from 'react'

import reducer from'./reducer'
// 将reducer 定义在其他文件中导入
// 这样就可以在多个文件中使用该reducer了
// 注意reducer 只是提供了一个操作与字符串的映射表，是一个纯函数

export default function UseReducerDemo() {
  /**
   * useReducer 看名字来说，可能会让人想到这是一个redux 相关的hook
   * 但是不是这样的，该hook 仅仅与reducer 这一数据处理机制有关，与整个redux 关系不大
   * 它的出现是为了为为useState 补充一些功能
   * 
   * 假设这样一个需求
   * 我们需要对一个复杂的数据类型进行处理，处理的方式很简单，但是处理方式有很多，现在我们需要在多个不同的组件中对该数据类型的数据进行处理（数据是各自独立的）
   * 那么我们是否需要将所有的数据处理函数都分别定义，这样显然太麻烦了
   * 而reducer 为我们提供了一个现成的解决方案，注意是reducer 而不是整个redux，reducer 函数本质上更像一个映射表，将复杂的操作与简单的字符串一一对应起来，使得我们可以用简单的，预定义的字符串直接替代掉复杂的逻辑代码
   * 并且，由于reducer 函数可以单独抽离，所以可以在多个不同的文件中使用，在某些处理复杂的数据类型面前，能极大的节省效率
   */
  const [counter, dispatch] = useReducer(reducer, 0)
  // useReducer函数需要传入两个参数，一个是reducer 函数 ，另外一个是数据初始值
  // 返回两个返回值，一个是被创建的数据，一个是派发更新的函数dispatch，用于接受action
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={e=>{dispatch({type:'INC',number:10})}}>+</button>
      {/* 和redux 中一样,用于修改数据的方法接受的参数仍然是一个action 对象，在对象中包含了修改数据的方式与值，不同的是修改数据的方法现在由我们自定义了 */}
      <button onClick={e=>{dispatch({type:'DEC',number:20})}}>-</button>
    </div>
  )
}
