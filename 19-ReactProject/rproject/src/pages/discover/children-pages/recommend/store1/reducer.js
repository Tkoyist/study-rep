import * as actionType from'./contant'
// 使用这种方式能在不修改导入数据的名字的前提下，将一个文件中的所有导出数据作为 as 之后的对象的属性一次性导入，这样使用常量就变得异常的轻松

const defaultState = {
  topBanner:[]
}

export default function reducer(state=defaultState,action){
  switch (action.type) {
    case actionType.CHANEG_TOP_BANNER:
      return state
    default:
      return state
  }
}