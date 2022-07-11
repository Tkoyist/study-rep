import React,{useState,useCallback} from 'react'

export default function UseCallbackDemo01() {
  const [count, setCount] = useState(0)
  const add = () =>{
    console.log('function01');
    setCount(count+1)
  }
  /**
   * 上面是我们常见的函数定义，调用函数会修改数据，导致组件重新渲染
   * 而函数组件的重新渲染会导致定义在函数内部的函数也重新定义，即每一次重新渲染函数组件都会导致组件内部的函数重新定义
   * 在函数很多的情况下，是很浪费性能的
   * 所以出现了useCallback 这一hook 用于指定函数在什么时候更新
   *  useCallback 函数
   *  接受一个函数作为参数1
   *  接收一个数组作为参数2
   *  返回一个函数
   * 
   *  useCallback 会使被处理的函数与传入的数组绑定，只有在组件重新渲染，并且函数绑定的数据发生改变的时候，才会重新定义函数，否则不会重新定义函数，可以提高代码效率
   */
  const add2 = useCallback(
    () => {
      console.log('function02');
      setCount(count+1)
    },
    [count],
  )
  /**
   * 上面的例子中，当修改数据导致页面重新刷新时，只有在count 发生改变的情况下
   * 才会将add2 函数销毁重新定义，否则使用的永远是原本的那个函数，而不是销毁之后重新渲染的新函数
   * 而状态也是原本的那个函数的状态
   * 
   * 例如
   */
  const add3 = useCallback(
    () => {
      console.log('function02');
      setCount(count+1)
    },
    [],
  )
  /**
   * 当我们不为一个函数绑定任何数据的时候，它永远不会销毁重新渲染，它的状态也是永远不变的，例如其内部的count 将永远是第一次调用该函数（创建函数）时的count
   * 原因：
   *    由于useCallback 要求保留函数，而函数内部使用了当前函数组件的数据，所以当前组件也会被保留，这就纯纯一个闭包，所以当前组件的状态（包括当前的count）就被保留下来了
   *    而我们每一次使用函数，都是使用的原本的函数，即直接使用闭包中的函数，而它的状态又是固定的，是创建函数时的状态，所以我们之后每一次使用都是其创建时的状态
   * 总之，组件函数也是函数，这就是一个闭包
   *    这也能解释为什么数据发生改变的时候需要销毁创建整个函数组件，就是因为这是一个闭包，不重新创建的话，就永远是上一个函数组件的状态
   */
  return (
    <div>
      {count}
      <button onClick={add}>+1</button>
      <button onClick={add2}>+1</button>
      <button onClick={add3}>3</button>
    </div>
  )
}
