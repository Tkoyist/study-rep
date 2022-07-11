import React, { memo } from 'react'

import {
  headerLinks
}from'@/common/local-data.js'

import {Input} from'antd'
import { SearchOutlined }from'@ant-design/icons'
import { NavLink } from 'react-router-dom'
import {
  HeaderWrapper,
  ContentLeft,
  ContentRight
} from './style'

export default memo(function ZLAppHeader() {
  // 页面显示
  function showSelectList(item,index){
    if(index<3){
      return <NavLink to={item.link} >
        {item.title}
        <i className="sprite_01 icon"></i>
        </NavLink>
    }else{
      return <a href={item.link}>
        {item.title}
        </a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
      <ContentLeft>
      {/* 
        在left 中我们需要一个网易云音乐的图标，点击该图标能使得网页回到主页
        回到主页是一个路由跳转，所以当然是想到了Link 但是由于是一个图标，我们难以使用精灵图，（因为精灵图的本质是背景图片，而Link不方便设置背景图片）
        所以我们这里直接使用a 标签，反正我们也是使用的hash 跳转
        精灵图是一个图片下载优化方案，当我们需要使用大量的小图标的时候，如果每个图标都单独下载，显然是十分浪费时间的，比较缓慢，所以提出了精灵图这一解决方案，将大量的小图标放到一张图片上（该图片即精灵图），然后使用css 样式在需要使用图片的位置将精灵图设置为元素背景，然后通过调节精灵图的位置，以及元素的长宽使我们需要的元素显示特定的图片
       */}
      <a href="#/" className='logo sprite_01'> </a>
      <div className="select-list">
        {
          headerLinks.map((item,index)=>{
            return <div className="select-item" key={item.title}>
              {showSelectList(item,index)}
            </div>
          })
        }
      </div>
      </ContentLeft>
      <ContentRight>
        <Input className='search' placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined/>}/>
        <div className='center'>创作者中心</div>
        <div>登录</div>
      </ContentRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
