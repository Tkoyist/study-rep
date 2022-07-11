<template>
  <div class="tab-control">
    <div class="tab-control-item">
      <div v-for="(item,i) in title" :key="i" :class="{active:currentIndex=== i}" @click="itemClick(i)">
        <span >{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",

    data() {
      return {
        currentIndex: 0
      }
    },
    methods:{
      itemClick(index) {
        this.currentIndex = index
        this.$emit('getTabControlIndex',index)
      }
    },
    props :{
      title:{
        type:Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #fff;
    position: sticky;
    top:44px;
    z-index: 999;
  }
  .tab-control-item {
    display: flex;
  }
  .tab-control-item > div {
    flex:1;
  }
  .tab-control-item span{
    font-size: 16px;
    padding: 10px;
  }
  .active {
    color:var(--color-tint);
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }

</style>
