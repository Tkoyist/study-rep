<template>
    <div id="detail">
        <detail-nav-bar id="detail-nav-bar" @titleClick="titleChange" ref="nav" ></detail-nav-bar>
    <scroll class="scrollBox" ref="scroll" :probeType="probe"  @scroll="scrolling">
        <detail-swiper :topimgs="topImg"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="Shop"></detail-shop-info>
        <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
        <detail-item-params ref="param" :itemParams="itemParams"></detail-item-params>
        <detail-content-info ref="content" :rate="contentInfo"></detail-content-info>
        <detail-goods-list ref="recommend" :goods="recommend"></detail-goods-list>
    </scroll>
        <back-top @click.native="backclick" v-show="isBackTopShow"></back-top>  
        <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>

        <!-- <toast :message='toastMsg' :isShow='isToastShow'></toast> -->
    </div>
</template>

<script>
import DetailNavBar from"./childComponents/DetailNavBar.vue"
import DetailSwiper from"./childComponents/DetailSwiper.vue"
import DetailBaseInfo from"./childComponents/DetailBaseInfo.vue"
import DetailShopInfo from "./childComponents/DetailShopInfo.vue"
import DetailGoodsInfo from"./childComponents/DetailGoodsInfo.vue"
import DetailItemParams from"./childComponents/DetailItemParams.vue"
import DetailContentInfo from"./childComponents/DetailContentInfo.vue"
import DetailGoodsList from"./childComponents/DetailGoodsList.vue"
import DetailBottomBar from"./childComponents/DetailBottomBar.vue"

import {getDetailData,Goods,Shop,getRecommend} from"@/network/detail.js"

import Toast from'@/components/common/toast/Toast'
import Scroll from '../../components/common/scroll/Scroll.vue'
// import BackTop from'@/components/content/BackTop.vue'
import {helloMixin,backTopMixin} from"@/common/mixin.js"



export default {
    name:'detail',
    data(){
        return{
            iid: null,
            topImg:[],
            goods:{},
            Shop:{},
            detailInfo:{},
            itemParams:{},
            imgLoadRefresh:null,
            contentInfo:{},
            recommend:[],
            partTop:[0,-1000,-1200,-1300],
            probe:3,
            currentIndex:0,
            // isToastShow:false,
            toastMsg:''

        }
    },
    created(){
        // 访问正处于活跃的路由界面，获取iid 数据并保存
        this.iid = this.$route.params.iid

        // 获取服务器数据
        // 我发现一个问题，我们第一次打开一个商品详情页的时候，能请求到数据，但是返回主页再次点击就无法获取到了
        // 我认为这是因为我们设置了路由页面不刷新，所以我们退出再进入也不会再次调用created 函数，内部的请求数据的代码也不会再次运行
        // 我认为的解决方案:监听页面的改变,每次改变重新发送请求获取数据
        // 实际的解决方案，我们使用keep-alive 的时候使用exclude 将detail 页面排除在外
        getDetailData(this.iid).then((res)=>{
            // 获取数据之后将topimg 数据保存
            // console.log(res);
            this.topImg = res.data.result.itemInfo.topImages

            // 获取到商品信息，创建保存数据的对象
            this.goods = new Goods(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services)
            // 获取到商店信息，创建封装数据的对象
            this.Shop = new Shop(res.data.result.shopInfo)

            // 获取商品细节信息，由于信息种类少，这里就不再进行封装
            this.detailInfo = res.data.result.detailInfo

            // 获取商品参数信息，信息种类少不予封装
            this.itemParams = res.data.result.itemParams

            // 获取评论信息，有些商品没有评论信息，所以我们做一个判断，有评论信息我们才去请求信息
            if(res.data.result.rate.cRate != 0){
                this.contentInfo = res.data.result.rate.list[0]
            }
        })
        // 获取推荐信息
            getRecommend().then(res => {
                // console.log(res);
                this.recommend = res.data.data.list
            })

    },
    mounted(){
        this.$bus.$on("detailImgLoad",this.$refs.scroll.scroll.refresh())

        // $el 是一个组件的根组件，即template 内部的最外层元素
        //  - 在vue 实例中组件内部的Dom 元素在mounted 周期之前都是无效的，还未生成，所以我们的$el 和$refs 在mounted 之前都会报错
        //  - 我们是在mounted 中调用了这个函数，在mounted 中时，我们异步在服务器请求的数据是还未送到的，所以我们是找不到对应的数据的
        //      所以在mounted 中也是无效的
        // this.partTopT[1] = this.$refs.param.$el.offsetTop
        // this.partTopT[2] = this.$refs.content.$el.offsetTop
        // this.partTopT[3] = this.$refs.recommend.$el.offsetTop

        this.$refs.scroll.scroll
    },
    methods:{
        imgLoad(){
            // 使用ref访问到html 标签，再访问该标签的scroll 属性（是一个bs 对象，再调用该对象的refresh 方法）
            this.$refs.scroll.scroll.refresh()


            // 想法是在Refresh 函数雨欣之后获取各个组件的y 坐标，这个想法是很好的，但是我们是在mounted 中调用了这个函数，在mounted 中时，我们异步在服务器请求的数据是还未送到的，所以我们是找不到对应的数据的
            // 此时虽然已经有了
            this.partTop[1] = -this.$refs.param.$el.offsetTop+44
            this.partTop[2] = -this.$refs.content.$el.offsetTop+44
            this.partTop[3] = -this.$refs.recommend.$el.offsetTop+44
        },
        titleChange(index){
            this.$refs.scroll.scroll.scrollTo(0,this.partTop[index],100)
            // console.log(this.$refs.recommend.$el.offsetTop);
        },
        addCart(){
            // 获取购物车需要的信息
            const good = {}
            good.image = this.topImg[0]
            good.title = this.goods.title
            good.desc = this.goods.desc
            good.price = this.goods.realPrice
            good.iid = this.iid
            good.isCheck = false

            // 将数据传入vuex 
            // this.$store.commit('addCart',good)
            // 使用dispaych 提交action 事件，否则无法监听
            // 由于我们在action 中将addCart 函数的返回值设置为了Promise 所以我们使用该函数的时候，要为其定义.then 和 .catch
            this.$store.dispatch('addCart',good).then(res => {
                // res 的值是我们在promise 传入给resolve 函数的参数

                // 将传给toast 组件的msg 更改为res
                // this.isToastShow = true
                // this.toastMsg = res
                
                // // 我们要求toast 一段时间后自动消失，所以使用延时器
                // setTimeout(()=>{this.isToastShow = false},1000)


                // 我们现在不不再使用之前的组件化方法进行toast 操作，而尝试通过使用将toast 插件化再使用
                // 访问vue 实例的$toast 插件对象的show 方法，并将我们需要的参数message 和 time 传入 
                this.$toast.show(res,1000)
            })
        },
        scrolling(postion){
            // 监听当滚动到一定的高度之后显示回到顶部按钮
            this.isBackTopShow = postion.y>-1000?false:true


            // if(postion.y > this.partTop[1]){
            //     console.log('0');
            // }
            // else if(postion.y < this.partTop[1] && postion.y>this.partTop[2])
            // {
            //     console.log('1');
            // }
            // else if(postion.y < this.partTop[2] && postion.y >this.partTop[3]){
            //     console.log('2');
            // }
            // else{
            //     console.log('3');
            // }
            // 我们自己写的方法看似简单，但是扩展性太弱，每次nav bar 修改的时候，都要对if else 进行修改

            // 下面看看老师的方法
            const postiony = postion.y

            // 之前我认为在需要this.partTop 的地方直接使用this.partTop 即可，不明白为什么老师非要创建一个const 占用空间
            // 刚才想明白了,我们直接使用this.partTop 的时候,解析器需要去对应的地址寻找,如果是偶尔访问,没什么关系,因为访问并不占取多少cpu ,但是在当前的情况下,我们需要大量的使用该数据,如果每次我们都用直接寻找访问的方法去访问,势必影响代码运行速度,所以这种时候我们选择在块级作用域中定义该数据,后面我们在使用的时候,解析器只需要在块级作用域中寻找,能提高效率
            const length = this.partTop.length

            // 对partTop 数组进行遍历，遍历的对每个partTop 数据区间进行判断，当postiony 的值处在相应区间的时候进行下一步操作
            // for(let i in partTop){
                // 第一个问题，我们使用in 对数组进行遍历的时候，获取到索引值i 是一个String 类型的数据，我们对其进行+1 操作的时候，是String 类型的+1
                // 所以在这种情况下，不适合使用 in 
            for(let i = 0 ;i<length;i++){
                // if(postiony > this.partTop[i] && postiony < this.partTop[i+1]){
                    // if 也是存在问题的，即最后一个i+1 是一个undefined 值，所以最后一个判断永远无法实现
                    // 所以需要将这两种情况分开处理
                if(this.currentIndex!=i && ((i < length-1 && postiony < this.partTop[i] && postiony > this.partTop[i+1]) || (i === length-1 && postiony < this.partTop[i]))){
                    // 将整个if 判断分成两个部分，两个部分分别代表自己的情况，将两种情况使用或判断连接起来，即如果不是对最后一个区间的遍历，则要求需要引入i+1进行判断，此时便是 true || false ,判断为true，如果是对最后一个区间的遍历判断，那么前面的条件是无法满足的，此时进入后面的判断，会无需i+1 进行判断，此时的判断结果为false || true,判断为true
                    this.currentIndex = i
                    // 是可以通过$refs 直接访问子组件数据的，但是ref 值似乎不能访问 - 符号
                    this.$refs.nav.currentIndex = this.currentIndex
                }

            // - 讲讲老师的hack做法（和我一开始的想法很一致，但是当时没有那么做的动力，因为认为加大了代码量，但是现在想想虽然代码量加大，但是性能会提升）
            


            // 先创建一个块级数组，再将我们需要的数据深拷贝进入该块级作用域，首先我们不希望这个方法对外部数据进行太多的操作，其中我们在内部定义数据，该数组我们是需要在后面大量频繁使用的，将其定义在块级作用域中定义，我们对其的访问使用效率高
            // const partTopLet = this.partTop.concat()
            //     // 题外话，这里的深拷贝并不是真正的深拷贝，如果内部存在引用数据类型，那么也只会将引用复制进去，不算完全的深拷贝

            //     // 在数组最后方加上一个最大值
            //     partTopLet.push(Number.MAX_VALUE)

                // 由于在数组最后加上了一个极大数，所以我们进行的遍历数量需要-1
                // for(let i = 0 ;i<length-1;i++){
                //     // 只需要进行普通判断即可
                //     if(this.currentIndex!=i && (postiony > this.partTop[i] && postiony < this.partTop[i+1])){
                //         this.currentIndex = i
                //         this.$refs.nav.currentIndex = this.currentIndex
                //     }
                // }
            }
        }
    },
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailItemParams,
        DetailContentInfo,
        DetailGoodsList,
        DetailBottomBar,
        Toast
        // BackTop
    },
    mixins:[helloMixin,backTopMixin]
       
}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 9;
    background-color: white;
    /* vh 视口高度 100vh 100%视口高度 */
    height: 100vh;
}
.scrollBox{
    /* calc 中计算符号之间必须要空格，否则无法生效 */
    height: calc(100% - 44px);
    overflow: hidden;
}
#detail-nav-bar{
    position: relative;

}
</style>