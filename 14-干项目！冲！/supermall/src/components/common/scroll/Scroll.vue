<template>
    <!-- 在vue中，img 标签存在一个事件@load 在img 标签中的图片加载完成之后，就会触发该事件 -->
    <div class="wrapper" ref="wrapper" >
        <div class="content">
            <slot></slot>
        </div>
    </div>
    <!-- 
        将滚动也单独封装成一个组件，在组件内部实现滚动功能，直接将需要滚动的
        元素放入该组件的插槽中，在需要滚动的地方使用该组件，将需要滚动的元素放入插槽中，就可以实现滚动
     -->
</template>

<script>
import Bscroll from"better-scroll"
export default {
    props:{
        probeType:{
            type:Number,
            default(){
                return 0;
            }
        },
        pullUpLoad:{
            type:Boolean,
            default(){
                return false
            }
        }

    },
    data(){
        return{
            scroll:null,
            // 当我们设置一个props 数据的时候，就相当于已经为当前组件定义了该属性的数据，如果我们再在data 中重复定义（用于取初值，那是毫无意义的）
            // props 数据本就存在默认值，我们无需二次定义
            // pullUpLoad
            
        }
    },
    mounted(){
        // 使用class 获取到标签可能出现获取到的是导入插槽的同class 标签，可能会出错，所以我们推荐使用ref 属性获取标签
        // 当我们给一个标签绑定属性ref并赋值的时候，可以使用this.$refs.refname 在js 标签中精确获取到某个标签
        this.scroll=new Bscroll(this.$refs.wrapper,{
            click:true,
            // 实时监听滚动事实上十分占用内存，所以我们不应该将这个值写死，尤其这还是一个功能性公用组件，
            // 我们应当将其设置为一个变量值，由使用者决定是否监听
            probeType:this.probeType,
            // pullUpLoad 用于监听是否拉倒了底部
            // 和上面一样，如果并不需要监听是否拉倒了底部，设置死了监听，可能影响网页速度，所以我们也由外部决定是否监听
            pullUpLoad:this.pullUpLoad
        })

        this.scroll.on("scroll",(position)=>{
            // 我们获取到了position,但我们不是为了在此处使用，我们是要在外部使用，所以我们要想办法将position数据传出
            // 即子组件向父组件发送信息,使用this.$emit
            this.$emit("scroll",position)
        })
        
        // 监听上拉到底事件，监听到之后执行回调函数
        this.scroll.on("pullingUp",()=>{// 注意大小写！
            // 监听到上拉到底事件发生之后，向父组件传输事件，告诉其该事件的发生
            this.$emit("pullingup")
        })
    },
    methods:{}
        
}
</script>