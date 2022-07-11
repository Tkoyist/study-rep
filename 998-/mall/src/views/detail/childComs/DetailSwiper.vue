<template>
  <van-swipe :autoplay="3000" indicator-color="white" class="vanSwiper">
    <van-swipe-item v-for="(item,i) in topImages" :key="i">
      <a>
        <img :src="item" alt="" @load="">
      </a>
<!--      <img :src="item" alt="">-->
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'vant';
  import 'vant/lib/index.css';

  Vue.use(Swipe).use(SwipeItem);
  export default {
    name: "DetailSwiper",
    props:{
     topImages:{
       type:Array,
       default() {
         return []
       }
     }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .vanSwiper {
    height: 300px;
    overflow: hidden;
  }
  img {
    width: 100%;
  }
</style>
