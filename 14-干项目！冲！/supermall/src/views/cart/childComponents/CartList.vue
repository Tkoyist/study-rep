<template>
    <div class='cart-list'>
        <scroll class="scroll-box" ref='scroll'>
            <cart-list-item v-for="item in goodslist" :key="item.index" :product='item'></cart-list-item>
        </scroll>

       
    </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll.vue'
import CartListItem from'./CartListItem.vue'

export default {
    data(){
        return {

        }
    },
    computed:{
        goodslist(){
            return this.$store.getters.cartLists
        }
    },
    components:{
        Scroll,
        CartListItem
    },
    activated(){
        // 不能出现 - 识别不了
        // this.$refs.cart-scroll.scroll.refresh()
        this.$refs.scroll.scroll.refresh()
    }
}
</script>

<style scoped>
.cart-list{
    /* 设置bs 容器区的父元素的高度 */
    height: calc(100vh - 44px - 49px - 40px);
}
.scroll-box{
    /* bs 使用的条件是存在两个嵌套的元素，且内部元素的高度大于外部元素，且外部元素要具有固定的高度，但是我们是无法在.vue 文件之外访问到组件的元素的class 的，我们只能在导入使用组件的时候，为组件的标签（即template 标签内部的最外层标签，即前面提到的外部容器的标签，为其设置一个固定的高度才能使用bs ） */
    /* height: 100vh -44px; */
    /* 这种方式不行 */

    height: 100%;
    /* 设置好内容区的父元素的高度，再设置内容器高度为100% 为目前最好的解决方案 */

    /* background-color: #bfa; */
    overflow: hidden;
    
}
/* .scroll-box div{ */
    /* 如果内容不够多，bs 还是不会生效，因为bs生效要求内容区高度大于容器区高度，所以我们在这里给内容区设置一个高度（大于容器区的高度） */
    /* height: 100vh; */
/* } */
</style>