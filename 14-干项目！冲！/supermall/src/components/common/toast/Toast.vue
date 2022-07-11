<template>
    <div class="toast" v-show="isShow">
        <div>{{message}}</div>
    </div>
</template>

<script>
export default {
    // 我们不需要再通过组件方式使用，所以也不需要再由外界传入什么数据了
    // props:{
    //     message:{
    //         type:String
    //     },
    //     isShow:{
    //         type:Boolean,
    //         default(){
    //             return false
    //         }
    //     }
    // }
    data(){
        return{
            message:'',
            isShow:false
        }
    },
    methods:{
        // 我们使用 $toast.show() 时就是访问到了这里的show 方法
        show(message,time){
            this.message = message,
            this.isShow = true
            setTimeout(()=>{
                this.isShow = false
                this.message = '' 
            },time)
        }
    }
}
</script>

<style scoped>
.toast{
    padding: 10px 15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    font-size: 20px;
    color:#fff;
    background-color: rgba(0, 0, 0, .55);

    /* 我们添加tosat 的时候，是将其添加了根组件之下，在层级关系中与整个页面详情是同一层，所以普通情况下无法下显示，需要我们加上z-index */
    z-index: 9;
}
</style>