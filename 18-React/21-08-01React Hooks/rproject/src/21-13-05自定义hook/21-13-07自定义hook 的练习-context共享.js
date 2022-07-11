import React from 'react'

export default function HookDemoShare() {
  /**
   * 我们之前即使使用了useContext 这个hook，但是对context 的使用依然存在一些麻烦的地方
   * 当我们希望在一个组件中使用context 的时候，我们需要将创建的context的实例导入当前的文件夹当中，如果组件很多，那么这种重复的工作就不得不多次进行
   * 这显然是一个程序员所不能容忍的，我们当然要想办法将这些重复代码抽离出来
   * 方案就是
   * 将context 的引入直接放入一个单独的文件夹当中，文件夹导出一个自定义hook 该hook 专门用于为组件添加useContext 
   * 在需要使用context 的文件中直接使用该自定义hook 即可
   */
  return (
    <div>
      
    </div>
  )
}
