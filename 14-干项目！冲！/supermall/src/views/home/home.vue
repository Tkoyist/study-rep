<template>
   <div id="home">
       <nav-bar class="home-nav">
           <div  slot="center">购物街</div>
       </nav-bar>  
        <tab-control :titles="titles" @tabclick="tabclick" ref="tabcontrol0" v-show="isTabFixed"></tab-control>
    <Scroll class="content" 
    ref="scroll" 
    @pullingup="loadMore"
    @scroll="scrollMove"
    :pull-up-load="true"
    :probe-type="3" 
    > 
        <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
        <home-recommend-view :recommends="recommends"></home-recommend-view>
        <feature-view ></feature-view>
        <tab-control :titles="titles" @tabclick="tabclick" ref="tabcontrol"></tab-control>
        <goods-list :goods="goodscomputed"></goods-list>
    </Scroll>
    <!-- @click只能监听原生标签，是不能监听组件的，需要监听组件，需要给事件添加.native 属性 -->
    <back-top @click.native="backclick" v-show="isBackTopShow"></back-top>
   </div>
</template>

<script>
import NavBar from"@/components/common/navbar/NavBar.vue"
import TabControl from"@/components/content/TabControl.vue"
import GoodsList from"@/components/content/GoodsList.vue"
import Scroll from"@/components/common/scroll/Scroll.vue"
import BackTop from"@/components/content/BackTop.vue"

import {debounce} from"@/common/utils.js"

import HomeSwiper from"./childComponents/HomeSwiper.vue"
import HomeRecommendView from"./childComponents/HomeRecommendView.vue"
import FeatureView from "./childComponents/FeatureView.vue"

import {getHomeMultdata,getHomeGoods} from"@/network/home.js"

export default {
    components:{
        NavBar,
        TabControl,
        GoodsList,
        Scroll,
        BackTop,

        HomeSwiper,
        HomeRecommendView,
        FeatureView,
        BackTop,
        GoodsList,
        TabControl

    },
    data(){
        return{
            banners:[],
            recommends:[],
            titles:['流行','新款','精选'],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]}
            },
            currentType:'pop',
            isBackTopShow:false,
            tabOffsetTop:0,
            isTabFixed:false,

        }
    },
    mounted(){
         // 调用防抖函数，对我们的请求函数进行封装，使得只有最后一个图片加载完成的时间才会触发
        const refresh = debounce(this.scrollRefresh,100)
        
        // 使用 this.$bus.$on（） 方法监听事件总线中的某个事件
        this.$bus.$on("imgLoadEnd",()=>{
            // 新问题，该方法调用太频繁，浪费资源，我们希望设置它在一段时间内只会调用固定的次数
            refresh()
            // this.scrollRefresh()
            // console.log("刷新scroll");
            // 在这里监听是没有意义的，这里只是监听获取到了多少次图片加载完成时间的触发，但是在防抖函数的处理下，时间触发很多次，但刷新代码只会执行一次
        } ) 
       
    },
    // 调用vue 的生命周期函数，我们需要在vue 创建之后立即发送网络请求，所以我们将其放入created() 生命周期函数中
    created(){
        this.getHomeMultdata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')

        // 在created 中不推荐访问 $refs,可能访问不到
        // this.$bus.$on("imgLoadEnd",()=>{
        //     // 我们在这里进行了太多的逻辑代码执行，这是不好的，推荐将下面的代码在methods 中封装实现，便于维护
        //     this.scrollRefresh()
        // } ) 
    },
    computed:{
        goodscomputed(){
            return this.goods[this.currentType].list
        }
    },
    methods:{
        getHomeMultdata(){
             getHomeMultdata().then(res =>{
            // console.log(res);
            // 请求多个数据
            this.banners = res.data.data.banner.list;
            this.recommends = res.data.data.recommend.list;
        })
        },
        getHomeGoods(type){
            // 每次对该方法的调用都会加载新的数据 
            getHomeGoods(type,this.goods[type].page+1).then(res=>{
            this.goods[type].list.push(...res.data.data.list)
            // 打印请求到的数据
            // console.log(this.goods[type].list);
            this.goods[type].page+=1

            // scroll 的上拉到底事件默认只能加载进行一次，想要多次加载，就需要在上一次加载完成之后调用一次 finishPullUp()方法
            this.$refs.scroll.scroll.finishPullUp( )
        })
        },
        tabclick(index){
            switch(index){
                case 0:
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }
            this.$refs.tabcontrol.activeindex = index
            this.$refs.tabcontrol0.activeindex = index

        },
        // 点击回到顶部
        backclick(){
            // 第一个scroll 是访问到了ref 属性为scroll 的标签对象，第二个scroll是访问到了scroll组件中的scroll属性，而该属性被我们设置为指向了我们创建的better-scroll 对象，我们在通过该对象调用它的内置方法scrollTo()，用于到达顶部
            // scrollTo()有三个参数，第一个是X轴的滚动位置，第二个是y轴滚动位置，第三个用于控制移动速度，传入一个毫秒数，会在该时间内转到指定位置
            this.$refs.scroll.scroll.scrollTo(0,0,2000)
        },
        // 监听滚动的位置
        scrollMove(position){
            // position.y 在移动后是一个负值！！！！！ 
            // 判断是否出现回到顶部按钮
            this.isBackTopShow = position.y>-1000?false:true

            // 判断什么时候实现tabcontrol 的吸顶效果
            this.isTabFixed = (-position.y) > this.tabOffsetTop
        },
        // 监听是否拉到底部
        loadMore(){
            console.log("加载更多");
           this.getHomeGoods(this.currentType)
        },
        // 将scroll 的refresh 函数封装
        scrollRefresh(){
            this.$refs.scroll.scroll.refresh()
        },
        // 写一个防抖函数

        // 轮播图图片记载完成事件响应函数
        swiperImgLoad(){

             // 获取tabcontrol 的offset 属性，用于获取tabcontrol 距离元素顶部的距离
        // - 但是组件是没有offset 属性的，所以我们可以访问到组件后，访问组件内部的最上方元素，获取其offset 值
        // - 组件有一个属性$el 可以获取组件中的元素
        // 但是在mounted 中访问offsetTop 的时候，可能图片还未加载完成，所以获取到的值存在不准确的情况
        // - 在tabcontrl 之前的图片，只有轮播图的图片最慢，当轮播图的图片加载完成之后，其他的图片基本加载完成，所以我们这里只监听轮播图的加载完成
        // console.log(this.$refs.tabcontrol.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop
        }        
        

    }
}
</script>

<style scoped>
    .home-nav{
        background-color: var(--color-tint);
    }
    .content{
        height: 1000px;
        /* 用于测试better-scroll 是否生效 */
        overflow: hidden;

    }
    #home{
        height: 100vh-98px;
    }
</style>