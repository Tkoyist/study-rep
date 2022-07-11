<template>
    <div class="goods">
        <detail-goods-list-item v-for="item in goods" :key="item.index"
        :goodsitems="item">
        </detail-goods-list-item>
    </div>
</template>

<script>
import DetailGoodsListItem from './DetailGoodsListItem.vue'

export default {
    components:{
        DetailGoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.goods{
    padding-top: 44px;
    border-top: 3px solid rgba(100, 100, 100, .5);
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>