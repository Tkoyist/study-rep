<template>
  <div class="nav-bar">
    <nav-bar>
      <div slot="navBarCenter">购物车({{cartLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {mapGetters} from 'vuex'
  export default {
    name: "CartNavBar",
    components: {
      NavBar
    },
    computed: {
      ...mapGetters([
        'cartLength'
      ])

    }
  }
</script>

<style scoped>

</style>
