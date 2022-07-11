<template>
  <div id="app">
    <router-view></router-view>
   <tabbar>
        <tabbaritem path="/home" activecolor="blue">
        <img slot="itemicon" src="./assets/img/tabbar/001.png" alt="">
        <img slot="itemiconactive" src="./assets/img/tabbar/007.png" alt="">
        <div slot="itemtext">首页</div>
      </tabbaritem>
        <tabbaritem path="/user">
        <img slot="itemicon" src="./assets/img/tabbar/002.png" alt="">
        <img slot="itemiconactive" src="./assets/img/tabbar/007.png" alt="">
        <div slot="itemtext">我的</div>
      </tabbaritem>
        <tabbaritem path="/cart">
        <img slot="itemicon" src="./assets/img/tabbar/003.png" alt="">
        <img slot="itemiconactive" src="./assets/img/tabbar/007.png" alt="">
        <div slot="itemtext">购物车</div>
      </tabbaritem>
        <tabbaritem path="/fenlei">
        <img slot="itemicon" src="./assets/img/tabbar/004.png" alt="">
        <img slot="itemiconactive" src="./assets/img/tabbar/007.png" alt="">
        <div slot="itemtext">分类</div>
      </tabbaritem>
   </tabbar>
  </div> 
</template>

<script>
import tabbar from"./components/tabbar/tabbar.vue"
import tabbaritem from"./components/tabbar/tabbaritems.vue"
import router from"./router/index"

export default {
  router,
  name: 'App',
  components: {
    tabbar,
    tabbaritem
  }
}
</script>

<style>
@import "./assets/css/base.css";
/* 引入css文件的专用格式 */
/* 这个是页面基础格式，而不是tabbar基础格式，所以仍然放在app.vue 文件中 */
</style>
