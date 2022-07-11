export default function reducer(state = initState,action){
  if(action.type = 'add')return{...state,conut:state.count+1}
}

let initState={
  count:1
}