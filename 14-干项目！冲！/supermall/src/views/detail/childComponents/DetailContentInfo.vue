<template>
    <div class="content-box">
        <div class="content-title">
            <span>用户评价</span>
            <span>更多</span>
        </div>
        <div class="user-box">
            <div class="user-photo">
                <img :src="rate.user.avatar" alt="">
            </div>
            <div class="user-name">
                {{rate.user.uname}}
            </div>
        </div>
        <div class="msg-box">
            <div class="msg-msg">{{rate.content}}</div>
            <div class="msg-params">
            <span class="msg-date">{{rate.created | transformDate}}</span>
            <span class="msg-style">{{rate.style}}</span>                
            </div>
        </div>
        <div class="img-box">
            <div class="img-content" v-for="item in rate.images" :key="item.index">
                <img :src="item" alt="">
            </div>
        </div>
    </div>
</template>

<script>
// 导入定义在untils 中的日期转换函数
import {timestampToTime} from"@/common/utils.js"

export default {
    props:{
        rate:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    // 过滤器，我们在vue 中使用某个数据的时候使用{{需过滤数据 | 过滤器函数}} 会直接显示过滤后的数据
    // 过滤器会接受传入数据，将数据进行过滤函数的执行之后，将过滤函数的返回值作为过滤结果返回
    // 在实例中的 filters 属性中创建过滤器，我们可以在过滤器中筛选掉不需要的数据使其不显示，也可以对数据进行加工再显示
    filters:{
        transformDate(value){
            return timestampToTime(value)
        }
    }
}
</script>

<style scoped>
.content-box{
    padding: 0px 10px 0px 10px;
}
.content-title{
    height: 60px;
    line-height: 60px;

    border-bottom: 1px solid rgba(100, 100, 100, .2);
    
    display: flex;
}
.content-title span{
    flex: 1;
}
.content-title span:first-child{
    font-size: 20px;
    text-align: left;
}
.content-title span:last-child{
    font-size: 15px;
    text-align: right;
}

/* 设置用户信息样式 */
.user-box{
    padding: 15px 0px 5px 0px ;
}
.user-photo{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    overflow: hidden;

    display: inline-block;
}
.user-photo img{
    width: 50px;
}
.user-name{
    display: inline-block;
    font-size: 15px;
    position: relative;
    bottom: 20px;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;

}

/* 设置评论内容的样式 */
.msg-params{
    font-style: 13px;
    color: rgba(100, 100, 100, .7);
    padding: 15px 0px;
}
.img-content{
    display: inline-block;
    height: 100px;
    overflow: hidden;
}
.img-content img{
    height: 100px;
    margin-right: 5px;
}
</style>