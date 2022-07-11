<template>
  <div id="cart">
    <cart-nav-bar></cart-nav-bar>
    <scroll class="content"
            ref="wrapper"
            :probeType="3"
            :pullUpLoad="true">
      <cart-goods-list></cart-goods-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>

</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  import CartNavBar from './childComs/CartNavBar'
  import CartGoodsList from  './childComs/CartGoodsList'
  import CartBottomBar from './childComs/CartBottomBar'
  export default {
    name: "Cart",
    components: {
      CartNavBar,
      CartGoodsList,
      Scroll,
      CartBottomBar
    },
    activated() {
      this.$refs.wrapper.scroll.refresh();
    }

  }
</script>

<style scoped>
  .content {
    margin-top: 44px;
    height: calc(100vh  - 49px - 84px - 44px);
    overflow: hidden;
  }
</style>
