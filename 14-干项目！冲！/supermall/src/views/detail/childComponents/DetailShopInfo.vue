<template>
    <div class="shop-box">
        <div class="logo-name">
            <div class="logo-box">
                <img :src="shop.logo" alt="">
            </div>
            <span>{{shop.name}}</span>
        </div>
        <div class="shop-data">
            <div class="shop-data-left">
                <div>
                    <div>
                        {{sellsValue}}
                    </div>
                    <div>
                        总销量
                    </div>
                </div>
                <div>
                    <div>
                        {{shop.goodsCount}}
                    </div>
                    <div>
                        全部宝贝
                    </div>
                </div>
            </div>
            <div class="shop-data-right">
                <table>
                    <tr v-for="item in shop.score" :key="item.index">
                        <td>{{item.name}}</td>
                        <td class="score" :class="{'betterScoreColor':item.isBetter}">{{item.score}}</td>
                        <td class="better" :class="{'better-better':item.isBetter}">{{item.isBetter?'高':'低'}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="shop-bottom">
        <div class="enter-shop">进店逛逛</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        shop:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        sellsValue(){
            return this.shop.sells<10000?this.shop.sells:(this.shop.sells/10000).toFixed(1)+'万';
        },
    },
}
</script>

<style scoped>
/* 设置店铺名称和店铺logo */
.logo-name{
    position: relative;
    margin:30px 0px 30px 5px ;
    height: 50px;
}
.logo-box{
    display: inline-block;
    height: 50px;
    width: 50px;

    border-radius: 25px;
    border:1px solid rgba(100, 100 ,100, .5) ;
    overflow: hidden;

    margin-right: 15px;
}
.logo-box img{
    width: 50px;
    height: 50px;
}
.logo-name span{
    display: inline-block;

    height: 50px;
    line-height: 50px;

    /* 开启相对定位，使得文字上移，使得文字与图片齐平 */
    position:absolute;
    bottom: 0px;
}

/* 设置店铺左侧及顶部信息 */
.shop-data{
    margin: 25px 5px 25px 5px;
    display: flex;
}
.shop-data div{
    flex: 1;
}
.shop-data-left{
    display: flex;
    text-align: center;

    border-right: 1px solid rgba(100, 100 ,100, .5);
}
.shop-data-left span{
    flex:1;
}
.shop-data-left div div:first-child{
    font-size: 20px;
    margin-bottom: 10px;
}
.shop-data-left div div:last-child{
    font-size: 10px;
}

/* 店铺右侧信息 */
.shop-data-right{
    padding: 0px 5px 0px px;
    font-size: 10px;
    position: relative;
    left: 25px;
}
.score{
    display: inline-block;
    width: 80px;
    text-align: center;
    color: greenyellow;
}
.betterScoreColor{
    color: red;
}
.better{
    color: white;
    background-color:greenyellow;
}
.better-better{
    background-color: red;
}
.shop-bottom {
    text-align: center;
    margin-top: 10px;
  }
.enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>