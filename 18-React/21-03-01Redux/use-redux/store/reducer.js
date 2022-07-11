import {
  ADD_NUMBER,
  INCREMENT,
  SUB_NUMBER
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
    default:
      // 默认情况下直接返回传入的state
      return state
  }
} 