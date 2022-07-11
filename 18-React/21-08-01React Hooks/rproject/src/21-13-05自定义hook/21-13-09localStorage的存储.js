import React from 'react'
import useName from'./hooks/useStorage'

export default function HookDemoStorage() {

  const [name,setname] = useName()

  return (
    <div>
      <h1>name：{name}</h1>
      <button onClick={e=>{setname('newName1')}}>changeName</button>
    </div>
  )
}
