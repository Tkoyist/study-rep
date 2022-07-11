<template>
    <div class="goodsbox" @click="goodsClick">
      <!-- 在vue中，img 标签存在一个事件@load 在img 标签中的图片加载完成之后，就会触发该事件 -->
        <img v-lazy="goodsitems.show.img" alt="" @load="imgLoad">
        <!-- 现在即开启了图片的懒加载 -->
        <div class="goodsinfo">
            <p>{{goodsitems.title}}</p>
            <span class="price">{{goodsitems.price}}</span>
            <span class="collect">{{goodsitems.cfav}}</span>
        </div>
    </div>

</template>

<script>
export default {
    props:{
        //  我们在GoodsList 中使用Item 标签的时候，需要为其传入包括图片，名称，收藏数等一系列数据，而这些数据是来自于我们向服务器请求的数据
        //  我们向服务器请求而来的是一个数组，数组内部有多个对象，对象中包含了我们需要的各类信息，其中就包括商品编号 iid 可以用于向服务器请求商品详情数据
        goodsitems:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
      imgLoad(){
        this.$bus.$emit("imgLoadEnd")
      },
      goodsClick(){
        // 详情页是需要经常用到返回操作的，所以我们这里使用push 而不使用 replace
        // 我们在路由的定义页面为Detail 设置了一个可传入属性iid,在这里我们可以为该属性传入一个值
        // 相当于为详情页中传入了一个id 数据，该数据来源于外部，用于确定详情页中显示什么数据，我们就可以根据拿到的id去服务器请求对应数据
        this.$router.push('/detail/'+this.goodsitems.iid)
        // iid 来源于GoodsList 传入的商品对象，我们获取到iid 传输给详情页路由页面，由详情页去向服务器请求数据并展示
        // 所以我们现在将iid 作为动态路由数据传入给路由页面,在路由页面可以通过 this.$route.params. 访问到数据

        // 而this.$router.push 是直接跳转到我们指向的路由页面
        // 所以这里是当goodslistitem 被点击的时候，跳转到detail 页面，并传入该goodslistitem 对应的iid 
      }
    }
}
</script>

<style scoped>
.goodsbox {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goodsbox img {
    width: 100%;
    border-radius: 5px;
  }

  .goodsinfo {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goodsinfo p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goodsinfo .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goodsinfo .collect {
    position: relative;
  }

  .goodsinfo .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>