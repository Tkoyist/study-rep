<template>
  <van-swipe :autoplay="3000" indicator-color="white" class="vanSwiper">
    <van-swipe-item v-for="(item,i) in banners" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'vant';
  import 'vant/lib/index.css';

  Vue.use(Swipe).use(SwipeItem);

  export default {
    name: "MainSwiper",
    props:{
      banners:Array,
      default () {
        return []
      }
    },
    methods :{
      imageLoad(){
        this.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
