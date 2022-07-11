<template>
    <div>
        <div class="goods-title">{{goods.title}}</div>
        <div class="goods-price">
            <span class="new-price">{{goods.newPrice}}</span>
            <span class="old-price">{{goods.oldPrice}}</span>
            <span class="discount">{{goods.discount}}</span>
        </div>
        <div class="columns">
            <span class="columnsItem" v-for="item in goods.columns" :key="item.index">{{item}}</span>
        </div>
        <div class="services">
            <span v-for="item in goods.services" :key="item.index">
                <img :src="item.icon" alt="">
                {{item.name}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    created(){
        // console.log(this.goods);
    }

}
</script>

<style scoped>
.goods-title{
    font-size: 17px;
    padding: 15px 0px 15px 10px;
}
.goods-price{
    height: 30px;
}
.new-price{
    color:var(--color-high-text);
    font-size: 26px;
    padding: 0px 10px 0px 10px ;
}
.old-price{
    font-size: 17px;
    /* 设置文字划线 */
    text-decoration: line-through;
    
}
.discount{
    display: inline-block;
    height: 25px;
    position: relative;
    top: -5px;
    
    /* 将文字行高设置与父元素高度一致，使其垂直据中 */
    line-height: 25px;

    /* 设置圆角，设置的值为圆角的半径（即对应圆角的大小，因为该设置本质上是将角换成了四分之一圆，将该圆的圆弧与原本的边相连接） */
    /* 我们可以为其设置为一个 xpx/ypx 即将原本的角转换为椭圆角，x,y分别代表该椭圆的水平和垂直边距 */
    border-radius: 15px ;

    background-color: var(--color-tint);
    margin: 0px 10px 0px 10px ;
    padding: 0px 10px 0px 10px ;

}

/* columns 设置 */
.columns{
    display: flex;
    padding: 20px 5px;
    text-align: center;
    font-size: 13px;
}
.columnsItem{
    flex:1;
    opacity: .5;
}
.columns span:first-child{
    text-align: left;
}
.columns span:last-child{
    text-align: right;
}

/* services 设置 */
.services{
    display: flex;
    padding: 10px 5px 30px 5px;
    text-align: center;
    border-top: 1px solid rgba(100 , 100, 100, .1);
    border-bottom: 5px solid rgba(100 , 100, 100, .1);
}
.services span{
    flex: 1;
    font-size: 13px;
}
.services span img{
    width: 10px;
}
.services span:first-child{
    text-align: left;
}
.services span:last-child{
    text-align: right;
}
</style>