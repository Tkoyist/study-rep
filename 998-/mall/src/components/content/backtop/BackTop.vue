<template>
  <div class="backTop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
  .backTop {
    z-index: 9999;
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
  .backTop img{
    width: 50px;
    height: 50px;
  }
</style>
