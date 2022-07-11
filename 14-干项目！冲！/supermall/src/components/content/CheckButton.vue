<template>
  <div class="check-button" >
    <img src="@/assets/img/cart/tick.svg" alt="" :class="{check: isCheck}">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isCheck:{
        type:Boolean,
        default:true
      }
    }
  }
</script>

<style scoped>
.check-button{
 display: flex;
 justify-content: center;
 align-items: center;

}
  .check-button img{
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border:2px solid #c0c0c0;
    /* vertical 垂直的，该属性设置了元素的垂直对其方式，middle 表示将其与父元素垂直中线对齐 */
    /* vertical-align: middle; */
    /* 不知道为什么居中没有生效 */
    width: 20px;
  }
  .check {
    border:2px solid var(--color-tint) !important;
    background-color: var(--color-tint);

  }
</style>
