<template>
    <div>
        <h2>这是用户页面</h2>
        <h3>用户cCCCCCCCCCCCCCCCCC</h3>
        <h2>{{userId}}</h2>
    </div>
</template>

<script>
export default {
    name:'user',
    computed:{
        userId(){
            return this.$route.params.userid
        }
    }
}
</script>

<style scoped>
    body{
        background:lightblue;
    }
</style>