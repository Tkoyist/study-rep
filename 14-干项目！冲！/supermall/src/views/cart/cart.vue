<template>
    <div class="cart-box">
        <nav-bar class="nav-bar">
            <div slot="center">购物车（{{cartLength}}）</div>
        </nav-bar>


        <cart-list>
            
        </cart-list>

        <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
import NavBar from"@/components/common/navbar/NavBar.vue"
// import { mapGetters } from'vuex'

import CartList from'./childComponents/CartList.vue'
import CartBottomBar from'./childComponents/CartBottomBar.vue'


export default {
    
    components:{
        NavBar,
        CartList,
        CartBottomBar
    },
    computed:{
        // 新语法
        // ...mapGetters(['cartLength','cartLists'])
        // 失败了，不知道为什么

        cartLength(){
            // 对state 中的length 数据进行封装，将其封装到getters 中，再对当前文件中的cartLength进行封装
            return this.$store.getters.cartLength
        },
        cartLists(){
            return this.$store.getters.cartLists
        }
    }
}
</script>

<style scoped>
.nav-bar{
    background-color: var(--color-tint);
    /* 字体加粗 */
    font-weight: 500;
}
</style>