// import{ combineReducers }from'redux'
// import { reducer as recommendReducer } from'../pages/discover/children-pages/recommend/store'
// // as 的使用和Python 类似，取别名

// const cReducer = combineReducers({
//   recommend:recommendReducer
// })

// export default cReducer 


// import {combineReducers} from 'redux'
import {combineReducers} from 'redux-immutable'
// 在redux-immutable 包中，为我们准备好了可以直接使用的 combineReducers 函数，使用方法与redux 包中的combineReducers 一样，不同之处在于
// 使用redux-immutable 中的 combineReducers 函数，获取到的返回值不再是普通对象，而会是immutable 对象
// 经过我们的修改之后，最外层的store 也变成了immutable 对象，现在我们需要使用的数据变成了immutable 对象内部的immutable 对象
// 那么对其内部的数据的使用也是需要改变的，需要使用get 接口获取到store 内部的分store 对象，再次使用get 接口获取到分store 内部的数据

// import {Map} from'immutable'


import {reducer as recommendReducer} from '../pages/discover/children-pages/recommend/store'
// import { fromJS } from 'immutable'


export default combineReducers({
  // 前面我们已经使用immutable 对合并前的store 当中的数据进行了更新优化，使得每次更新（以前是深拷贝）的时候都尽可能使用原本的对象，而不去拷贝新的对象节约性能
  // 但是在当前函数中，我们获取到的合并完成的reducer 也是会在更新中重新拷贝，那么之前的immutable 的更新优化就变得没有意义了，所以我们需要对合并之后的reducer 也进行一些处理
  // 首先想到的当然也是使用 Map 将其包裹起来
  // 但是这样是不行的，因为combineReducers 内部是会使用Object.keys() 方法获取到传入函数内部的参数对象的所有key 但是，当我们使用immutable 对对象进行处理之后，是无法通过这种方式进行遍历的，换言之combineReducers 无法正确的运行
  // 所以，想要使用的话，我们需要使用到另外一个模块 redux-immutable
  recommend:recommendReducer
  // 表明当前的reducer 是属于recmmend 的，我们在state当中的recmmend 属性中可以直接访问到来自recmmendReducer 的state
})