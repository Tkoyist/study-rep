// import {fromJS} from 'immutable'
//  fromJS 会对数据进行深层次的比较，有多少层嵌套就进行多少次深层比较，以当前的数据来看是没有必要的，所以我们直接使用浅层比较的接口map ，它只会对当前对象的下一层进行比较而不会再进行更深层次的比较
import {Map} from 'immutable'

import * as actionType from './contant'

// 之前我们使用Map 的时候是创建了一个 immutable 的实例，再使用该实例的map 方法的，但是现在没有这样使用，是因为当前我们是通过模块化的方式使用Map ，本身immutable 模块导出的就是一个实例，我们直接使用该实例的 Map 方法
const defaultState=Map({
  topBanners:[],
  hotRecommends:[]
})

/**
 * 在redux 当中使用 immutableJs
 * 
 * - 安装包 yarn add immutable
 * - 导入需要的接口
 * - 使用接口处理初始数据
 * - 更改获取数据接口和修改数据接口，修改为immutable 提供的接口
 * 
 * 首先，初始数据当然就是 defaultState 我们当然需要使用 immutableJs 对 defaultState 进行处理，将其转化为 immutableJs 的数据结构，然后对数据的获取和修改都使用 immutableJs 的API 进行
 */

function reducer(state=defaultState,action){
  switch (action.type) {
    case actionType.CHANEG_TOP_BANNER:
      return state.set('topBanners',action.bannerData)
      // 修改获取数据的方式，修改为immutable 提供的 set 接口，并直接将set 的返回值返回，set 的返回值就是修改之后的数据

    case actionType.CHANEG_HOT_RECOMMENDS:
      return state.set('hotRecommends',action.hotRecommendsData)

    default:
      return state
      
  }
}
export default reducer