import React, { memo } from 'react'

import ZLTopBanner from'./c-cpns/top-banner/index'
import ZLHotRecommend from'./c-cpns/hot-recommend/index'
import  ZLNewAlbum  from "./c-cpns/new-album";
import  ZLRanking  from "./c-cpns/ranking";
import { 
  RecommendWrapper,
  RecommendLeft,
  RecommendRight,
  Content
} from './style'

function ZLRecommend(props) {




  return (
    <RecommendWrapper>
      <ZLTopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <ZLHotRecommend/>
          <ZLNewAlbum/>
          <ZLRanking/>
        </RecommendLeft>
        <RecommendRight>

        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(ZLRecommend)
