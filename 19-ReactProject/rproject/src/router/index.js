import React from'react'
import { Redirect } from 'react-router-dom'

import ZLDiscover from'@/pages/discover'
import ZLFriends from'@/pages/friend'
import ZLMine from'@/pages/mine'
import ZLRecommend from"@/pages/discover/children-pages/recommend"
import ZLSongs from"@/pages/discover/children-pages/songs"
import ZLRanking from"@/pages/discover/children-pages/ranking"
import ZLDjradio from"@/pages/discover/children-pages/djradio"
import ZLArtist from"@/pages/discover/children-pages/artist"
import ZLAlbum from"@/pages/discover/children-pages/album"

const routes = [
  // {
  //   path:'/',
  //   exact:true,
  //   component:ZLDiscover
  // },
  /**
   * 需求：在之前，我们是直接使空url 指向首页的路由，但是这样可能会导致一些问题（我们需要在Link处为Link 指定exact，否则会出现同时匹配上多个路由页面，将路由的问题放在了外部解决，这是不好的），所以我们使空路由不再指向首页，而是为首页指定一个单独的页面
   * 这样会导致一个问题，当我们直接进入空url 的页面中时，会发现由于没有路由页面匹配，所以没有显示
   * 为了解决这个问题，所以我们单独开辟了一个路由匹配，使空url 也匹配进入首页，这样固然是可以的，上面就是这种方案
   * 但是我们提出了一个新的解决方案：路由重定向，使空url 路由直接重定向到首页的组件上
   */
  {
    path:'/',
    exact:true,
    // 路由重定向，更改一个url 原本指向的组件，使其指向一个新的路由页面
    // 不在绑定component 属性，而是绑定一个render 函数
    render:()=>
      // 在render 函数中使用 Rediret 重定向组件，在其to 属性中直接指定需要定向到的路由页面
      <Redirect to="/discover"/>
    
  },
  {
    path:'/discover',
    component:ZLDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        // 我们进入discover 页面时大多时进入了其子路由当中的页面，如果我们为discover 绑定了exact ，那么进入discover 的子路由不会被视作discover 路由触发，即discover 不会处于活跃状态，没有active 属性
        // 所以我们不能将其绑定为exact
        render: () => (
          <Redirect to="/discover/recommend"/>
          // 同样使用重定向，直接转到推荐页面
        )
      },
      {
        path: "/discover/recommend",
        component: ZLRecommend
      },
      {
        path: "/discover/ranking",
        component: ZLRanking
      },
      {
        path: "/discover/songs",
        component: ZLSongs
      },
      {
        path: "/discover/djradio",
        // exact: true,
        component: ZLDjradio
      },
      {
        path: "/discover/artist",
        component: ZLArtist
      },
      {
        path: "/discover/album",
        component: ZLAlbum
      },
      // {
      //   path: "/discover/player",
      //   component: ZLPlayer
      // }
    ]
  },
  {
    path:'/mine',
    component:ZLMine
  },
  {
    path:'/friend',
    component:ZLFriends
  }
]
export default routes