// 导入第三方库
import React, { memo,useEffect,useRef,useState,useCallback } from 'react'

// 导入功能性相关模块
import {useDispatch, useSelector} from 'react-redux'
import {getTopBannerAction} from '../../store/actionCreator'

// 导入组件
import {
 BannerWrapper,
 BannerControl,
 BannerLeft,
 BannerRight
}from'./style'
import { Carousel } from 'antd';

export default memo(function ZLTopBanner() {
  // state
  const [actindex, setactindex] = useState(0)

  // redux 相关的hook
  const dispatch = useDispatch()
  const {topBanners} = useSelector(state=>{
    // useSelector 是与redux 相关的hook ，我们说redux 需要向外暴露数据获取接口和数据修改接口，useSelector 就是数据获取的接口
    // 它接受一个回调作为参数，回调参数会在特定的时候被调用，调用时会将总store 的state 作为参数传入该回调，然后调用该回调函数
    return{
      topBanners:state.get('recommend').get('topBanners')
    }
  } )
  // useDispatch 也是redux 相关的hook ，它会返回disptach 以供直接使用，由于store 在一个项目当中会被汇总，所以本质上所有的分store 都是可以共用同一个disptach 的
  useEffect(() => {
    // useEffect 是生命周期函数相关的hook ，第一个参数接受一个回调函数，每当组件刷新，并且绑定的数据发生改变的时候，便会执行，第二个参数是一个数组，我们可以在数组当中决定当前的hook 绑定的数据
    dispatch(getTopBannerAction())
    // 我们在不为其绑定一个数据的情况下，它会疯狂的调用，疯狂的获取数据，这太顶了，这种请求数据获取一次就可以了，所以为其赋一个基本不会改变的值 dispatch
  },[dispatch])
  
  // 其他hook
  const bannerRef = useRef()
  const bannerChanged = useCallback(
    // usecallback 接受一个函数作为参数，返回经过处理之后的函数
    // 它返回的函数将会持续保存使用，以免每一次组件刷新都将函数删除然后重新创建，浪费性能
    (from,to) => {
      setactindex(to)
    },[]
  )

  // 其他业务逻辑
  const bgImage = topBanners[actindex]&&(topBanners[actindex].imageUrl+'?imageView&blur=40x20')
  // 当数据还没有请求到的时候topBanners[actindex] 指向的是undefined ，那么就会直接报错，显然是不行的，所以加上了这样的一个判断，这样写之后，只有topBanners[actindex] 有值的情况下才会执行后面的代码，才会去获取数据
  
  return (
    <div>
      <BannerWrapper bgImage={bgImage} >
        {/* BannerWrapper 需要获取轮播图当前活跃的图片的url，本来以为会有现成的API 直接输出当前活跃的图片，但是是没有的 */}
        {/* 但是antd 提供了API，提供了回调函数，会在轮播图切换前后调用回调函数，我们可以在回调函数中修改传入的url */}
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel  effect="fade" autoplay ref={bannerRef} beforeChange={bannerChanged}>
              {
                topBanners.map((item,index)=>{
                  return(
                    <div key={item.imageUrl} className='banner-item'>
                      <img className="image" src={item.imageUrl} alt="" />
                    </div>
                  )
                })
              }
            </Carousel>
          </BannerLeft>
          <BannerRight>

          </BannerRight>
          <BannerControl>
            <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
            {/* 
              这两个按钮都是要对当前组件当中的 BannerLeft 组件当中的轮播图进行操作，而 Carousel 轮播图本身是带有这些操作接口的，我们需要的就是获取到这些接口然后使用 
              为了实现这个目标，我们需要获取到 Carousel 组件本身，所以我们使用ref 来获取，使用 hook useRef 直接创建一个ref 然后将其绑定到 Carousel 上，再通过该ref 访问到组件，以获取组件内部的接口
            */}
            <button className='btn right' onClick={e => bannerRef.current.next()}></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  )
})
