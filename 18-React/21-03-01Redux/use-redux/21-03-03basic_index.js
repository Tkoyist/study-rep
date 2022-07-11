/**
 * - 安装 redux 
 *    yarn add redux
 * - 导入 redux
 *    * 导入模块不能使用es6 的方式，
 */
import redux from'redux'
// const redux = import('redux')

// 初始数据，或者叫初始状态，这个状态只有第一次reducer 时会用到，并且数据不会发生改变，之后的状态改变只是以初始状态为蓝本进行的特异化复制，类似setState 方法
const initState = {
  counter : 0
}

// reducer
// 创建reducer ，在reducer 中预先确定接受的action 和需要进行的数据操作的映射关系
// 即预先决定好什么样的action 会带来什么样的操作，并且预先就决定好监听哪个数据，并将需要监听的数据作为参数传入
function reducer(state = initState,action){
  // 由于首次接受更新的时候state 是没有值的，所以我们在创建reducer 的时候为其赋一个初值作为默认值，如果后续传入了其他值则会直接使用其他值，不会使用默认值
  // 而在之后的状态更新中,我们只需要接收由dispatch 传来的上一次处理完成的state 和本次需要进行处理的action 直接完成数据的改即可
  // 整个redux 和初始状态之间的联系只存在于这里,通过默认参数的形式在第一次状态变更中获取到初始状态,之后的所有state都只是对该数据的特异化复制

  // 我们就可以在当前的函数中根据传来的action 的类型和数据进行相应的更新
  switch(action.type){
    case 'INCREMENT':
      // 先对其他属性通过对象结构的方式直接复制u，再指定的修改我们需要修改的数据
      return {...state,counter:state.counter+1}
      // 注意reducer 是一个纯函数，和setState一样是不会直接修改数据的
    case 'DECREMENT':
      return {...state,counter:state.counter-1}
    case 'ADD_NUMBER':
      return {...state,counter:state.counter-action.num}
  }
}

// store
// 根据reducer创建store，传入一个reducer 作为参数创建store
// 创建store 并不是一个普通的对象，而是来自于redux 模块中的createStore 方法，通过特定的方法进行的创建

const store = redux.createStore(reducer)
// 这样就将reducer 和 store 进行了绑定
// 之后操作redux 也将通过store

// 此处创建的 store 包含三个api
// disptach:用于派发action
// subscribe:用于为state更新添加回调函数
// getState:用于获取state当中的数据

// action
// 创建action action 是一个对象，对象中包含了本次数据的修改方式与修改值
const action1 = {type:'INCREMENT'}
const action2 = {type:'DECREMENT'}
const action3 = {type:'ADD_NUMBER',num:5}


// 使用action 修改store 中的数据（派发action）
// 通过创建好的store 的dispatch 方法进行该操作（注意我们是通过对象的方法进行的该操作，dispatch 方法是store 对象的属性）

// 使用dispatch 方法派发更新的时候，就会去执行reducer 函数，并把参数action和上一次处理完成的store作为参数传入，然后由于第一次处理是没有前面的store 的，所以我们创建reducer 时需要一个默认初值
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)

// 添加订阅，使用 redux 的 subscribe 方法订阅state的修改，当state 修改时执行回调
// subscribe 方法也是store自带的，它接受一个回调函数作为参数，每当state发生改变时，都会调用参数回调函数
// 该方法的返回值也是一个函数，执行该函数会取消对应的state监听，即调用该函数之后，state的改变不会在执行该回调
store.subscribe(()=>{
  console.log('state change...',store.getState().counter);
  // 获取到store 中的数据进行展示
  // 通过store 中的getState() 方法获取state
  console.log(store.getState().counter);
})

// 派发action
store.dispatch(action1)