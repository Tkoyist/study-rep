<template>
  <div class="item-box">
    <div class="check-button-box">
      <!--给vue组件做事件监听的时候必须使用@事件.native -->
      <check-button @click.native="changeCheck" :isCheck='product.isCheck'></check-button>
    </div>
    <div class="img-box">
      <img :src="product.image" alt="">
    </div>
    <div class="info-box">
      <div class="title">{{product.title}}</div>
      <span class="price">￥{{product.price}}</span>
      <span class="count">X{{product.count}}</span>
    </div>
  </div>
</template>

<script>
import CheckButton from"@/components/content/CheckButton"
export default {
  props:{
    product:{
      type:Object
    }
  },
  data(){
    return{
    }
  },
  methods:{
    changeCheck(){
      this.product.isCheck = !this.product.isCheck
    }
  },
  components:{
    CheckButton
  }
}
</script>

<style scoped>
/* 设置根容器 */
.item-box{
  height: 150px;
  padding: 10px 5px;
  display: flex;
}

/* 设置checkbutton */
.check-button-box{
  flex-shrink: 0;
  width: 20px;
   display: flex;
   /* 设置为flex 内部的button 容器才会被拉长 */
  /* align-content: center; */
}

/* 设置图片 */
.img-box{
  /* 设置，不允许图片容器由于flex 布局容器不足而变小 */
  flex-shrink: 0;
  width: 110px;
  border-radius: 10px;
  overflow: hidden;
}
.img-box img{
  width: 110px;
}

/* 设置商品详细信息容器 */
.info-box{
  padding: 0px 0px 0px 10px ;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 设置title */
.title{
  height: 20px;
  font-size: 20px;
  overflow: hidden;
}

/* 设置price */
.price{
  font-size: 25px;
  color:var(--color-high-text);
}

/* 设置count */
.count{
  text-align: right;
}
</style>