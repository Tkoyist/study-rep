<template>
    <!-- 倘若请求到的数据为空，即该商品不存在这些数据，那么我们不显示该组件 -->
    <div v-if="Object.keys(detailInfo).length !== 0 ">
        <div class="goods-desc">{{detailInfo.desc}}</div>
        <div class="img-text">{{detailInfo.detailImage[0].key}}</div>
        <div class="goods-img">
            <div v-for="item in detailInfo.detailImage[0].list " :key="item.index">
                <!-- 为了避免出现和首页一样的由于加载过慢导致的bs 失灵，我们再次监听图片加载完成，并在加载完成之后刷新bs,并再次使用防抖函数 -->
                <img :src="item" alt="" @load="imgLoad">
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    props:{
        detailInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return {
            count:0
        }
    },
    methods:{
        // 监听每次的图片加载完成
        imgLoad(){
            // 当图片加载完成之后，向外部传输数据，让外部刷新bs
            if(++this.count == this.detailInfo.detailImage[0].list.length)
            this.$emit("imgLoad")
        }
    }
}
</script>

<style scoped>
.goods-desc{
    padding: 10px;
}
.img-text{
    text-align: center;
    font-size: 15px;
    padding: 10px;
}
.goods-img{
    text-align: center;
}
.goods-img img{
    width: 90vw;
    margin: 5px;
}
</style>