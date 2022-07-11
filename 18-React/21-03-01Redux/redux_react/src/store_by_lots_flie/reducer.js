
import conuter_reducer from'./counter/counter_reducer'
import home_reducer from'./home/home_reducer'

export  function reducer0(state={},action){
  // 我们在这里拟定 store state 的初始值，将其初始值设置为一个空对象
  // 这样第一次传入各个单独reducer 的数据就是undefined,那么他们就会使用他们在自己文件中定义的初始值
  // 注意一定要是空对象而不能是undefined 值,否则子reducer 是无法获取到值的
  return ({
    // 返回值是一个对象，对象中的数据来自于不同文件中的不同的reducer，对象中包含多个属性，每个属性分别对应来自不同reducer 当中的state 数据
    // 每次进行一次action处理之后,都会同时获取到来自不同reducer 中的state 数据,对其进行收集和组合后返回
    counterInfo:conuter_reducer(state.counterInfo,action),
    homeInfo:home_reducer(state.homeInfo,action)
    // 将每一个子state的数据作为参数传入子reducer，这样，每个reducer 都能对各自的数据进行处理，然后返回给主reducer 由主reducer进行归纳返回
  })
}


// redux 中为我们封装了专门的函数用于处理来自不同的子reducer 中的数据，将不同的state与他们的处理函数进行合并
import {combineReducers} from'redux'

const reducer = combineReducers({
  // 该函数用于将来自不同的子store 中的state数据进行归纳处理，需要传入一个对象作为参数

  // 在对象中，我们直接将state 中的子state 作为key 将处理它的reducer 函数作为value一一对应，然后传入combineReducers 函数，函数会自动实现我们上面的功能，包括执行函数和赋值 
  counterInfo:conuter_reducer,
  homeInfo:home_reducer
})

export default reducer