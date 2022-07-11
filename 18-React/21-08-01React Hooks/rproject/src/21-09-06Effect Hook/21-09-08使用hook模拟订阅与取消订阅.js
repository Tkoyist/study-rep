import React,{useEffect,useState} from 'react'

export default function EffectLife() {
  const [count, setcount] = useState(0)
  /**
   * 之前我们已经讲到了effect hook 的第一个参数和它的基本使用，每次组件重新渲染的时候，都会调用第一个参数中的回调
   * 
   * 但是现在有一个问题，当我们的参数订阅一些数据，例如redux 数据的时候，我们是需要在组件销毁的时候取消订阅的，而当前的effect hook 显然不具备销毁的功能
   * 所以我们急需一个接口，让我们能在组件销毁之前处理一些事务
   * 
   * effect hook 提供了这个接口
   * 我们可以将需要在组件销毁前执行的回调（一个函数）作为第一个参数的返回值
   * 即
   * 第一个参数（一个函数，该函数会在组件渲染完成之后执行）的返回值是另外一个函数，返回值函数会在组件销毁前被调用
   * 我们就可以在这个返回值参数中放入我们需要的逻辑代码
   */
  useEffect(()=>{
    // 此处的代码会在组件渲染完成之后执行（render函数之后）
    console.log('订阅了数据');
    return ()=>{
      // 此处的代码会在组件销毁之前执行
      console.log('取消数据订阅');
    }
  })
  return (
    <div>
      当前计数:{count}
        <button onClick={e=>{setcount(count+1)}}>+</button>
    </div>
  )
}
