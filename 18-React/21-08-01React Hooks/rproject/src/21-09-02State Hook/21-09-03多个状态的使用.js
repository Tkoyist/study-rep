import React,{useState} from 'react'

export default function MultiHookState() {
  /**
   * 前面就猜到啦，每个useState 首次使用时创建的state 之间是独立的，多个状态的使用就直接创建多个state就行
   */
  const [name, setName] = useState('Tkoyist')
  const [age, setage] = useState(21)
  const [height, setHeight] = useState(178)
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{height}</h2>
    </div>
  )
}
