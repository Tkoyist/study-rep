<template>
    <div id="titlebox">
        <div v-for="(item,index) in titles" :key="item.index" 
        :class="{active: index == activeindex }"
        @click="changeactive(index)"
        >
            <span>
                {{item}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            activeindex : 0
        }
    },
    methods:{
        changeactive(index){
            this.activeindex = index
            this.$emit('tabclick',index)
        }
    }
}
</script>

<style scoped>
    #titlebox{
        display: flex;
        font-size: 18px;
        text-align: center;
        /* border-top: 8px solid#eee; */
        border-bottom: 8px solid#eee;
        padding: 10px 0px;
        /* 使用btter-scroll 之后吸顶效果的失效，因为使用bs 之后，我们的滑动是由bs 完成，与浏览器的下拉框没有关系，而sticky 的吸顶效果的决定是来自于浏览器的下拉框，所以此时吸顶效果失效 */
        /* position: sticky; */
        /* top: 44px; */
        background-color: #fff;
        /* z-index: 9; */


    }
    #titlebox div{
        flex:1;
    }

    .active{
        color: var(--color-high-text);
    }
</style>