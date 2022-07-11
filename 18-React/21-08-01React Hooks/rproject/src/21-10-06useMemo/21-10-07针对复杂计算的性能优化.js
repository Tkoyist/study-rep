import React,{useState,useMemo} from 'react'

function all(count){
  console.log("重新计算");
  let total = 0
  for(let i = 0;i<count;i++){
    total+=i
  }
  return total
}

export default function UseMemoDemo() {
  /**
   * 需求：
   * 维护一个count 当count发生改变时，在组件中展示 count! 
   */
  const [count, setcount] = useState(0)

  // let total = 0
  // for(let i = 0;i<count;i++){
  //   total+=i
  // }
  /**
   * 提出问题，在当下只要count 改变就会重新渲染，重新执行计算代码，这固然没有问题
   * 但是如果加上一些与计算无关的状态维护呢
   * 
   * 在这种情况下，即使我们只是更改了一些无关的状态，依然会导致计算代码的重新执行，显然是十分浪费性能的
   * 所以引出了useMemo 这一hook
   * 该memo 的使用与useCallback 异曲同工，使用数组中的数据决定内部代码在组件刷新时是否需要进行一些行为，不同的是useCallback 是决定函数是否需要销毁重新创建，而useMemo 是用于决定是否需要执行
   */
  const [show, setShow] = useState(true)

  const total = useMemo(() => {
    // return all(count)
    console.log("重新计算");
    let total = 0
    for(let i = 0;i<count;i++){
      total+=i
    }
    return total
  }, [count])
  // 可以看到，当前情况下，只有在count 发生改变的时候，才会重新执行useMemo 内部的代码
  return (
    <div>
      {total}
      <br />
      <button onClick={e=>{setcount(count+1)}}>+</button>
      <button onClick={e=>{setShow(!show)}} >切换</button>
    </div>
  )
}
