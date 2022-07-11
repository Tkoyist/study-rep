<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="navBarLeft"></slot>
    </div>
    <div class="center">
      <slot name="navBarCenter"></slot>
    </div>
    <div class="right">
      <slot name="navBarRight"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    color:#fff;
    background: var(--color-tint);
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  .left,
  .right
  {
    width: 60px;
  }
  .center {
    width: 100%;
  }

</style>
