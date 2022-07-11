import React from 'react'

export default function ComplexHookState() {
  /**
   * 没什么好说的，再复杂也是数据，直接操作就行了
   * 
   * 唯一需要注意的就是，不要直接接操作state，然后调用setState，那样是无效的，setState 会判断当前的State 和传入setState 的参数是否一致，如果一致的话，是不会重新渲染的
   */
  const [friends, setFriends] = useState()
  return (
    <div>
      
    </div>
  )
}
