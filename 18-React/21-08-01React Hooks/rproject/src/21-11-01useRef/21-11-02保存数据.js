import React from 'react'

export default function UseRefDemo02() {
  /**
   * 这种使用是我们自己开发出来的使用，并不是官方的使用
   * 
   * 主要是运用了useRef() 的不变性
   * 我们在创建ref 的时候是可以传入一个参数的，该参数会作为useRef 创建出来的ref 对象的current 属性的值，并且该值在组件的生命周期中是不变的
   * 这也就类似于useDemo 在创建时不绑定数据一样，只有在第一次创建时会被赋值，而该值会一直保持不变
   * 但是我们可以主动修改它
   * 
   * 可以借助它的这个性质完成一些功能
   */
  return (
    <div>
      
    </div>
  )
}
