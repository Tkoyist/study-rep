<template>
    <div class="recommend">
        <div v-for="item in recommends" :key="item.index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
        
    </div>
</template>

<script>
export default {
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 15px;
    padding: 20px 0px 20px;
    border-bottom: 10px solid #eee;
}

.recommend div{
    flex: 1;
}
.recommend div img{
    width: 70px;
    margin-bottom: 10px;

}
</style>