import {createStore,applyMiddleware,compose} from'redux'
// 导入中间件函数 applyMiddleware
 
import thunkMiddleware from'redux-thunk'
// 导入我们需要的中间件

import reducer from'./reducer.js'
import saga from'./saga' 
// 导入我们预先定义的处理判断处理action的生成器函数



// 使用 redux-saga 的方式网络请求state
// 1 安装redux-saga  yarn add redux-saga
// 2 导入 createSagaMiddleware 函数，该函数是saga 中间件的创建函数，注意是创建函数，是用于创建saga中间件的
import createSagaMiddleware from'redux-saga'
// 3 使用导入的 createSagaMiddleware 函数创建sagamiddleware 中间件
const sagaMiddleware = createSagaMiddleware()



// 应用中间件,直接将我们需要使用的中间件作为参数传入，applyMiddleware函数会对将这些中间件添加到redux 中
// 4 将我们创建的saga中间件放入applyMiddleware 函数中，将中间件与store 绑定
const storeEnhancer =  applyMiddleware(thunkMiddleware,sagaMiddleware)
// 该中间件是在action 发出,但是还没有到达reducer 之前对其进行拦截和处理，先对其进行判断，如果判断出其值为一个函数，就直接执行该函数，我们就可以在函数中获取到网络数据

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// composeEnhancers 是一个函数，接受其他类型的Enhancer作为参数，函数会将redux 开发工具需要使用的Enhancer 与参数Enhancer 相结合，然后返回两者的组合Enhancer 
// 注意是一个函数
// 如果不存在多个中间件的同时使用，则可以直接传入开发工具的中间件，详情可以在redux devtools 官方处获取

const store = createStore(reducer,composeEnhancers(storeEnhancer))
// 想要使用redux开发工具，需要在创建store 的时候就通过传入参数的方式为创建的store 绑定redux 开发工具的Enhancer
// 但是我们在这里第二个参数是中间件的Enhancer，想要同时传入两个Enhancer，就需要使用方法将两者合并，合并之后传入createStore 方法


// 创建好sagaMiddleware 之后还需要将其运行
sagaMiddleware.run(saga)
// 使用run 方法运行，运行时需要传入一个生成器函数作为参数，这个生成器函数内部就包含了saga中间件截取到action之后需要进行怎么样的处理

export default store;