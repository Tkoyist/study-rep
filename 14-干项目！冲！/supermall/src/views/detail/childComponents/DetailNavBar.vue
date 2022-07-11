<template>
    <nav-bar>
        <div slot="left" class="back" @click="backClick">
            <img src="@/assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="title">
            <div class="titleItem"
            v-for="(item,index) in title" :key="item.index"
            :class="{active:index == currentIndex}"
            @click=" titleClick(index)"
            >{{item}}</div>
        </div>
    </nav-bar>
</template>

<script>
import NavBar from"@/components/common/navbar/NavBar.vue"

export default {
    components:{
        NavBar
    },
    data(){
        return{
            title:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        titleClick(index){
            this.currentIndex = index
            // 将该事件传出
            this.$emit("titleClick",index)
        },
        backClick(){
            this.$router.back()
        }
    } 

}
</script>

<style scoped>
.title{
    display: flex;
    font-size: 13px;
    color: black;
}
.titleItem{
    flex:1;
    
}
.active{
    color: var(--color-high-text);
}
.back{
    margin-top: 6px;
}
</style>