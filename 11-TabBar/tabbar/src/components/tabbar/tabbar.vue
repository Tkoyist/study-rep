<template>
    <div id="tab-bar">
      <!-- <div class='tab-bar-item'>
          <img src="../../assets/img/tabbar/001.png" alt="">
          首页
      </div>
      <div class='tab-bar-item'>
          <img src="../../assets/img/tabbar/002.png" alt="">
          <div>分类</div>
      </div>
      <div class='tab-bar-item'>
          <img src="../../assets/img/tabbar/003.png" alt="">
          购物车
      </div>
      <div class='tab-bar-item'>
          <img src="../../assets/img/tabbar/004.png" alt="">
          我的
      </div> -->
      <!-- 我们不适合在这里将组件内部需要的小组件全部定义，这样既不方便修改，代码复用性也太低，所以我们需要将tabbar 内部的代码抽离 -->
      <!-- 我们应当定义一个插槽，由调用者决定需要输入的内容 -->
      <slot></slot>
    </div>
</template>


<script>

export default {
    name:'tabbar',
}
</script>


<style scoped>
#tab-bar{
  display: flex;
  /* 为下面的flex:1 做准备 */

  background-color:#f6f6f6;
  /* 为组件设置背景颜色 */
  position: fixed;
  /* 开启固定定位，根据窗口定位 */
  width: 100%;
  bottom: 0px;

  box-shadow: 0px -1px 1px rgba(100, 100, 100, .2);
  /* 阴影的三个参数代表 阴影的x轴偏移量 y轴偏移量 阴影宽度  */
}


</style>