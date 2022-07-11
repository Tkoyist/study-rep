<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="navBarLeft" class="left" @click="backHome">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="navBarCenter" class="center">
        <div v-for="(item,i) in datas" :class="{active:currentIndex === i}" @click="itemClick(i)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "DetailNavBar",
    data() {
      return {
        datas: ['商品', '参数', '评论', '推荐'],
        currentIndex:0
      }
    },
    components: {
      NavBar
    },
    methods :{
      backHome() {
        this.$router.back()
      },
      itemClick(i) {
        this.currentIndex = i;
        this.$emit('itemClick',i)
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: #fff;
    color: #666666;
    box-shadow: 0px 1px #c0c0c0;
  }
  .center {
    display: flex;
  }
  .center > div {
    flex: 1;
  }
  .left {
    padding-top: 6px;
  }
  .active {
    color: var(--color-tint);
  }
</style>
