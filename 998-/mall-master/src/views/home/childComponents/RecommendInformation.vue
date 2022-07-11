<template>
  <div id="home-recommend">
    <div v-for="(item,i) in recommends" class="home-recommend-item" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendInformation",
    props :{
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  #home-recommend {
    display: flex;
    justify-content: space-around;
    padding: 20px 5px;
    font-size: 14px;
    text-align: center;
    border-bottom: 10px solid #eee;
  }
  .home-recommend-item {

  }
  .home-recommend-item img {
    width: 80px;
    height: 80px;
    margin-bottom: 4px;
  }
</style>
