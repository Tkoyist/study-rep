import React, { memo } from 'react'

import {renderRoutes} from'react-router-config'
import {HashRouter} from'react-router-dom'
import {Provider} from'react-redux'

import routes from'./router/index'
import store from'./store'

import AppHeader from'@/components/app-header'
// import AppFooter from'@/components/app-footer'
import AppBottom from'@/components/app-bottom'

export default memo(function App() {
  return (
    <Provider store={store}>
      {/* 该组件用于进行redux 的数据共享 */}
      <HashRouter>
          <AppHeader/>
          {renderRoutes(routes)}
          {/* <AppFooter/>
          
          */}
          <AppBottom/>
      </HashRouter>
    </Provider>
    )
})
