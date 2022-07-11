import React,{useState} from 'react'

export default function NumberHook2() {
  const [count,setCount] = useState(0)
  // 直接使用数组的结构，获取到数组当中的元素，并直接为其赋初值
  // 老师一直不说这是state 确实我们不能将其作为state 看待，那会限制思路，这比state灵活很多，可以同时存在多个，可以分别独立维护，而不用像state一样将所有数据放到一个对象中
  // 妈的hook 真的好用
  return (
    <div>
      Number:{count}
      <button onClick={e=>{setCount(count+1)}}>+</button>
      <button onClick={e=>{setCount(count-1)}}>-</button>
    </div>
  )
}
