export default function reducer(state,action){
  switch (action.type) {
    case 'INC':
      return state + action.number
    case 'DEC':
      return state - action.number
    default:
      return state
  }
}