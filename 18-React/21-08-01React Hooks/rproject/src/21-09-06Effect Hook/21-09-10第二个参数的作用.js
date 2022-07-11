import React,{useEffect,useState} from 'react'

export default function EffectHookSecondParam() {
  const [count, setcount] = useState(0)
  /**
   * 提出问题
   * 每一次组件重新渲染，所有的effect hook 都会重新执行，这显然太浪费性能了
   * 我们需要一些 effect hook 只在特定的状态下执行
   * 
   * 这就引出了useEffect的第二个参数
   * 该参数是一个数组，数组中可以存储各类数据
   * 当某一个useEffect 传入了该参数的时候，它所创建effect hook 不再会是每次组件重新渲染都执行，只有在
   *  * 组件重新渲染
   *  * 且数组中的数据与渲染前相比发生了改变（一个数据发生了改变即可）
   * 的时候会执行
   * 所以当我们传入一个空数组的情况下，就只有在组件头一次渲染时会执行，网络请求即可在这样的情况下进行，只会进行一次 
   */
  useEffect(()=>{
    console.log('订阅了数据');
    return ()=>{
      console.log('取消数据订阅');
    }
  })
  useEffect(()=>{
    console.log('网络请求');
    return ()=>{
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
