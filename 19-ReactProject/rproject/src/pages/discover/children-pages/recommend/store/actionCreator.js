// import {dispatch} from 'react-redux'

import * as actionType from './contant'
import {
  getTopBanners,
  getHotRecommends
} from '@/services/recommend'

// 现在我们创建一个action构造器，专门用于生成发送网络请求的action ，这种action需要是函数形式，而不是对象，thunk 会自己识别函数式的action 并直接执行
export const getTopBannerAction = ()=>{
  // 本函数作为一个action 构造器需要返回一个action，由于当前的action 用于返回数据，所以返回的action为一个函数，在函数中进行网络请求
  return function(dispatch){
    getTopBanners().then(res=>{
      dispatch(changeTopBannerAction(res.banners))
    })
  }
}

export const changeTopBannerAction = (bannerData)=>{
  return {
    type:actionType.CHANEG_TOP_BANNER,
    bannerData
  }
}


export const changeHotRecommendsAction = (hotRecommendsData)=>{
  return {
    type:actionType.CHANEG_HOT_RECOMMENDS,
    hotRecommendsData
  }
}

export const getHotRecommendsAction = (limit)=>{
  // 用于请求热搜数据的action，在该action 中请求到数据之后，还要在action 内部调用修改热搜数据的action，将请求到的数据存入redux
  return function(dispatch){
    getHotRecommends(limit).then(res=>{
      dispatch(changeHotRecommendsAction(res.result))
    })
  }

}