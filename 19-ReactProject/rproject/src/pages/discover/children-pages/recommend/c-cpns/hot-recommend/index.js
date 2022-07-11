// 第三方库
import React, { memo,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

// 导入的组件
import ZLThemeHeaderRCM from "@/components/theme-header-rec";
import { getHotRecommendsAction } from "../../store/actionCreator";
import {HotRecommendWrapper} from'./style'
import ZLSongsCover from '@/components/songs-cover'

// 其他导入
import {HOT_RECOMMENDS_LIMIT} from'@/common/contants'


export default memo(function ZLHotRecommend() {
  // state

  // redux hooks
  const dispatch = useDispatch()
  const hotRecommends = useSelector(state=>(
    state.get('recommend').get('hotRecommends')
  ))
  
  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMENDS_LIMIT));
  }, [dispatch])
  

  return (
    <HotRecommendWrapper>
      <ZLThemeHeaderRCM title='热门推荐' keywords={['华语','流行','民谣','摇滚','电子']}></ZLThemeHeaderRCM>
      <div className="recommend-list">
        {
          hotRecommends.map(item=>{
            return(
              <ZLSongsCover key={item.id} info={item}/>
            )
          })
        }

      </div>
    </HotRecommendWrapper>
  )
})
