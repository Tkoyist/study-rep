import {
  ADD_NUMBER,
  INCREMENT,
  SAGADATA,
  SUB_NUMBER,
  CHANGESTATE
}from './constants.js'

const defaultState = {
  counter : 0
}

export default function reducer(state = defaultState,action){
  switch(action.type){
    case ADD_NUMBER:
      return {...state,counter:state.counter+action.num}
    case SUB_NUMBER:
      return {...state,counter:state.counter-action.num}
    case INCREMENT:
      return {...state,counter:state.counter+1}
    case SAGADATA: 
    
    case CHANGESTATE:
      return {...action.data}
      // 我们是通过action发起了数据修改指令，然后将修改的数据放入action 当中，再在reducer 中接受来自action，此时就能获取到action中保存的数据，再将action中的数据直接解构作为返回值返回
    default:
      // 默认情况下直接返回传入的state
      return state
  }
} 