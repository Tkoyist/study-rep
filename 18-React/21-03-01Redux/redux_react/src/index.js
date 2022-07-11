import React from 'react'
import ReactDOM from'react-dom'
import App from './App_by_react_redux'

// 使用react_redux 库进行redux 和react组件的连接

// 1 安装库 yarn add react_redux

// 2 导入库和需要使用的store
import {Provider} from'react-redux'
import store from'./store/index'

// 3 使用，将store 作为context 的数据传入整个组件
// <Provider store={store}><App/></Provider>
// 使用导出的组件直接将App 组件包裹起来，这样App 组件中就可以直接通过context 的方式访问到 store

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))