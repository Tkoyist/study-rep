import store from'./store/index.js'

import {addAction,inAction} from'./store/actionCreators.js'

// 订阅数据
 store.subscribe(()=>{
   console.log(store.getState());
 })

// 派发更新
store.dispatch(addAction(10))
store.dispatch(addAction(15)) 
store.dispatch(addAction(154))
store.dispatch(inAction())