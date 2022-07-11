<template>
  <div id="app">
    <!-- exclude 指向的是router 中的组件的name 属性，注意，不是routes 中name 属性，是router 中定义的组件被导出时，传出的name 属性 -->
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import"./assets/css/base.css";
</style>
