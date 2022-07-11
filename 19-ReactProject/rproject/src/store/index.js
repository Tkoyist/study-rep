// import {applyMiddleware, createStore,compose} from'redux'
// import reducer from'./reducer'
// import thunk from'redux-thunk'


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer,composeEnhancers(
//   applyMiddleware(thunk)
//   ))
// // 第一个参数是经过我们合并的reducer，第二个参数是对reducer的增强，即放入我们需要的中间件，例如 thunk 和saga,thunk 的作用是使得action 可以是一个函数，当action 是一个函数的时候，thunk会要求直接执行该函数
// // composeEnhancers 是redux 开发工具的接口

// export default store


import {createStore,applyMiddleware,compose} from'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
    ))

export default store