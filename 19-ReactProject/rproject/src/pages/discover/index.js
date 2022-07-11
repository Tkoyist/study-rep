import React, { memo, useEffect } from 'react'
import {NavLink} from'react-router-dom'
import{ renderRoutes }from'react-router-config'

import {dicoverMenu} from'@/common/local-data'
import request from'@/services/request'

import {
  DiscoverWrapper,
  TopMenu
} from'./style'

export default memo(function ZLDiscover(props) {
  // useEffect(() => {
  //   request({
  //     url:'/banner'
  //   }).then(res=>{
      // console.log(res);
      // axios 返回的是一个promise 对象，所以我们需要使用then 获取数据操作
    // });
    // request 是经过我们封装的axios 实例，它被定义了一些基础功能，首先使用常量指定数据接口地址，以及最迟响应时间，并在原型对象中添加了一些代码用于对返回结果的一些基本处理
    // 但是该函数只指向了所有数据的接口，如果我们需要使用某个指定接口的数据，那么需要我们在使用该函数的时候传入一个对象，在对象的url 属性中添加上拼接的url，使其访问指定接口的数据
  // }, [])

  const { route } = props;
  // 该语句相当于
  // const route = props.route
  // 该route 获取到的是当前路由页面的路由配置对象，即 router 当中的 discover 相关的对象
  // 可以获取到props 中的route 属性，该route 属性直接指向当前路由页面所对应的路由配置对象，这样我们就不需要想办法去获取routes 中的具体的route了
  // 这个功能是由 renderRoutes 附带的，便于我们更好地使用renderRoutes，当然我们也可以使用传统的方法直接获取的根routes 然后找到对应的子routes ，但是那样不便于维护
  return (
    <div>
      <DiscoverWrapper>
        <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map(item=>{
              return(
                <span key={item.title} className="item">
                  <NavLink to={item.link}>{item.title}</NavLink>
                </span>
              )
            })
          }
        </TopMenu>
        </div>
        {renderRoutes(route.routes)}
      </DiscoverWrapper>
    </div>
  )
})
