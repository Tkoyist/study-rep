<template>
    <div>
        <h2>这是主页</h2>
        <h3>主页面bbbbbbbb</h3>

        <router-link to="/home/msg">msg</router-link>
        <router-link to="/home/news">news</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'home'
}
</script>

<style scoped>
    body{
        background:lightblue;
    }
</style>