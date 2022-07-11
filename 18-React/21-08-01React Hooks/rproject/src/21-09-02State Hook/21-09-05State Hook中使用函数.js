import React,{ useState} from 'react'

export default function FunctionStateHook() {
  const [count, setCount] = useState(() => 0)
  // 我们在一开始使用useState 创建State Hook 的时候可以直接传入一个函数作为参数，然后该函数的返回值就会被作为State 的初值
  // 这里没什么好说的，没有什么新鲜的特性

  function addNine(){
    // 使用函数式修改 操作不会被合并
    setCount(count-5)
    setCount((value)=>value+5)
    setCount((value)=>value+5)
    setCount((value)=>value+5)
    setCount(count-3)
    setCount((value)=>value+5)
    /**
     * 对象式修改数据，只有最后一个对象式修改会生效，因为在底层中，所有的操作都会被放到链表中统一进行，而在对链表的遍历过程中并不会直接修改当前的state 的值
     * 而是会根据链表中的数据得到新的数据 newValue，每一次遍历都会修改newValue ，直到遍历完成，才会将最后一个newValue 作为当前的值，而函数式修改是直接修改 preValue 
     * 
     * 两者混用的情况下，后面的对象式修改会覆盖前面的修改操作，而函数式修改不会覆盖
     * 这与类组件的setState 是不同的
     */
    
  }
  return (
    <div>
      当前数字:{count}
      <button onClick={e=>{setCount((preCount)=>preCount+3)}}>+++</button>
      {/* 
        我们在setState 函数中也可以传入一个函数作为参数
        参数函数要求接受一个参数，该参数在参数函数被调用的时候会被赋值为当前的state ，我们可以在搞函数中对参数进行处理然后将处理结果返回，返回的State 就会被作为新的State进行操作
        
        而传入函数修改State 和传入新的State 修改State 的区别在于修改时是否会更改prevalue
        函数式修改是直接修改Prevalue
        而数据式修改与类组件中的修改性质相同，本质上是使用一个链表队列，每次都是根据 prevalue 获得一个新的value ，而不直接修改新的value 值，只有最后一个会生效
      */}
      <button onClick={e=>{addNine()}}>+9</button>
      {/* 我们依然使用箭头函数包裹事件响应函数，这是为了使事件对象不干扰事件响应函数 */}
    </div>
  )
}
