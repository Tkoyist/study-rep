<template>
  <div id="detail">
    <detail-nav-bar @itemClick="itemClick" ref="bar"></detail-nav-bar>
    <scroll class="content" ref="wrapper"
            :probeType="3"
            @scrollPosition="getScrollPosition"
            :pullUpLoad="true">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goodsInfo" ref="baseinfo"></detail-base-info>
      <detail-shop-info :shop="shopInfo" ref="shopinfo"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" ref="goodsinfo"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="paramInfo"/>
    </scroll>
    <detail-bottom-bar @addCart = "addCart"></detail-bottom-bar>
    <back-top @click.native="backTopClick" v-show="isMore1000"></back-top>
  </div>
</template>

<script>
  import DetailNavBar from  './childComs/DetailNavBar'
  import DetailSwiper from './childComs/DetailSwiper'
  import DetailBaseInfo from './childComs/DetailBaseInfo'
  import DetailShopInfo from './childComs/DetailShopInfo'
  import DetailGoodsInfo from './childComs/DetailGoodsInfo'
  import DetailParamInfo from './childComs/DetailParamInfo'
  import DetailBottomBar from './childComs/DetailBottomBar'
  import Scroll from 'components/common/scroll/Scroll'

  import {getDetailData,Goods,Shop,GoodsParam} from 'network/detail'
  import {backTopMixin} from '@/common/mixin'
  export default {
    name: "Detail",
    data() {
      return {
        iid:null,
        topImages:[],
        goodsInfo:{},
        shopInfo:{},
        detailInfo:{},
        paramInfo:{},
        scrollY:[],
        currentIndex:0
      }
    },
    mixins:[backTopMixin],
    created () {
      this.iid = this.$route.params.iid
      console.log(this.iid)
      this.getDetailData()
    },
    methods :{
     // 网络请求
     //  获取轮播图数据
      getDetailData() {
        getDetailData(this.iid).then(res => {
          console.log(res.result)
          const data = res.result;
          this.topImages = res.result.itemInfo.topImages
          //获取商品基本信息
          this.goodsInfo = new Goods(res.result.itemInfo,res.result.columns, data.shopInfo.services)
          // console.log(this.goodsInfo)
          //获取店铺信息
          this.shopInfo = new Shop(data.shopInfo)
          //商品详细信息
          this.detailInfo = data.detailInfo;
          //商品参数信息
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        })
      },
      addCart() {
        //获取购物车需要展示的信息，对象的形式
        const product = {};
        product.image = this.topImages[0];
        product.title = this.goodsInfo.title;
        product.desc = this.goodsInfo.desc;
        product.price = this.goodsInfo.realPrice;
        product.iid = this.iid;
        product.newPrice = this.newPrice;

        //将商品添加购物车里 vuex
        this.$store.dispatch('addCart',product).then(res => {
          console.log(res)
        })
      },
      getScrollPosition(position) {
        let i = 0;
        if(-position.y >= 0 && -position.y < this.scrollY[1]) {
            i = 0;
        }
        if(-position.y >= this.scrollY[1] && -position.y < this.scrollY[2]) {
          i = 1;
        }
        if(-position.y >= this.scrollY[2] && -position.y < this.scrollY[3]) {
          i = 2;
        }
        if(-position.y >= this.scrollY[3]) {
          i = 3;
        }
        // this.currentIndex = i;
        this.$refs.bar.currentIndex = i;


        this.isMore1000 = -position.y > 1000;


      },
      debounce(func,delay) {
        let timer = null
        return function () {
          if(timer) clearTimeout(timer)
          timer = setTimeout(()=> {
            func()
          },delay)
        }
      },
      imageLoad() {
        this.$refs.wrapper.scroll.refresh();
        const refresh = this.debounce(() =>{
          this.scrollY.push(0);
          this.scrollY.push(this.$refs.baseinfo.$el.offsetTop);
          this.scrollY.push(this.$refs.shopinfo.$el.offsetTop);
          this.scrollY.push(this.$refs.goodsinfo.$el.offsetTop);
        },20);
        refresh()
      },
      itemClick(i) {
        this.$refs.wrapper.scroll.scrollTo(0,-this.scrollY[i],200)
      }
    },

    components :{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailBottomBar
    },
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index:999;
    background-color: #fff;
  }
  .content {
    margin-top:44px;
    height: calc(100vh - 44px);
  }
</style>
