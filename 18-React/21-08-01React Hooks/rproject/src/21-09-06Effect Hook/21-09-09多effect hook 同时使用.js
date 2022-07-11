import React,{useEffect,useState} from 'react'

export default function MultiEffectHook() {
  const [count, setcount] = useState(0)
  /**
   * 我们可以同时定义多个effect hook 供当前组件使用，方便我们管理代码
   * hook 的执行顺序与hook 的定义顺序相同
   */
  useEffect(()=>{
    // 此处的代码会在组件渲染完成之后执行
    console.log('订阅了数据');
    return ()=>{
      // 此处的代码会在组件销毁之前执行
      console.log('取消数据订阅');
    }
  })
  useEffect(()=>{
    // 此处的代码会在组件渲染完成之后执行
    console.log('网络请求');
    return ()=>{
      // 此处的代码会在组件销毁之前执行
      console.log('没什么需要做的');
    }
  })
  return (
    <div>
      当前计数:{count}
        <button onClick={e=>{setcount(count+1)}}>+</button>
    </div>
  )
}
