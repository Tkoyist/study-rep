import React, { memo } from 'react'
import { HeaderWrapper } from "./style";

const ZLThemeHeaderRCM = memo(function (props) {
  const {title,keywords = []} = props
  // 给keywords 赋一个初始值，这样即使keywords 的值为undefined 也不会报错，除了可以这样做，我们还可以直接使用函数组件的defaultProps 属性，在该属性当中为数据添加初始值
  return (
    <HeaderWrapper className='sprite_02'>
      <div className='left'>
        <h3 className='title'>{title}</h3>
        <div className='keyword'>
          {
            keywords.map((item,index)=>{
              return(
                <div className='item' key={item}>
                  <a href="todo">{item}</a>
                  <span className='divider'>|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='right'>
        <a href="todo">更多</a>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  )
})
ZLThemeHeaderRCM.defaultProps={
  keywords:[]
  // 为keywords 添加初始值，使得其即使没有传入值也不会报错
}

export default ZLThemeHeaderRCM