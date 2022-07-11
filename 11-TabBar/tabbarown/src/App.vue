<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbaritem path="/home">
        <img slot="itemicon" src="./assets/img/tabbar/001.png" alt="">
        <img slot="itemiconactive" src="./assets/img/tabbar/006.png" alt="">
        <div slot="itemtext">首页</div>
      </tabbaritem>
      <tabbaritem path="/user">
        <img slot="itemicon" src="./assets/img/tabbar/002.png" alt="">
        <img slot="itemiconactive" src="./assets/img/tabbar/006.png" alt="">
        <div slot="itemtext">我的</div>
      </tabbaritem>
      <tabbaritem path="/cart">
        <img slot="itemicon" src="./assets/img/tabbar/003.png" alt="">
        <img slot="itemiconactive" src="./assets/img/tabbar/006.png" alt="">
        <div slot="itemtext">购物车</div>
      </tabbaritem>
      <tabbaritem path="/fenlei">
        <img slot="itemicon" src="./assets/img/tabbar/004.png" alt="">
        <img slot="itemiconactive" src="./assets/img/tabbar/006.png" alt="">
        <div slot="itemtext">分类</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbaritem from"../src/components/tababritem.vue"
import tabbar from"../src/components/tabbar.vue"
export default {
  name: 'App',
  components: {
    tabbaritem,
    tabbar
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
