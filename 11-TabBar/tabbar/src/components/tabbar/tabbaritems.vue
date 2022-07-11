<template>
    <div class='tab-bar-item' @click="routerchange">
        <div v-if="!isactive"><slot name="itemicon" ></slot></div>
        <div v-else><slot name="itemiconactive"></slot></div>
        <div :style="activestyle"><slot name="itemtext" ></slot></div>
        
    </div>
</template>

<script>
export default {
    name:"tabbaritem",
    data(){
        return{
            // path:"/cart"
            // 路径应该来源于外部，来源于容器组件，因为我们在容器组件中才创建了不同的 tabaritem 实例，才有机会创建输出数据
        }
    },
    computed:{
        isactive(){
            return this.$route.path.indexOf(this.path) != -1
            // $route.path 包含了很多信息，我们不能让其完全等于传入的path 
            // 我们需要的是判断它里面是否包含了我们传入的path ，如果包含了就说明在当前标签
            // 而indexOf 如是找不到数据会返回-1 否则返回所在位置，所以只要不等于-1就表示找到了，所以令indexOf 的值与-1 做比较，不等于则表示存在，妙啊
        },
        activestyle(){
            return this.isactive?{color:this.activecolor}:{}
        }
    },
    props:{
        // 使用props关键字，该属性指向一个对象，我们可以在对象中规定需要从父组件获取什么类型的数据，以及该数据的key 值，以及默认值等
        // 父组件使用该组件的时候，在标签中添加一个属性，该属性的key 即为我们设置的key ,它的值则由父组件决定

        path:String,
        activecolor:{
            type:String,
            default:"red"
        }

    },
    methods:{
        routerchange(){
            this.$router.push(this.path)
            // 事件响应函数内部修改路由指向，指向一个动态路径
        }
    }
}
</script>

<style scoped>
.tab-bar-item{
  flex:1;
  /* 使得多个元素均等分布 */
  text-align: center;
  /* 使得元素内容居中 */
  height: 49px;

  font-style: 14px;
}

.tab-bar-item img{
    width: 24px;
}
/* .active{ */
    /* color: red; */
    /* 字体颜色也不应当写死，我们也可以由外界传入决定 */
    /* 但是我们是无法在css中获取数据的，我们只能使用元素的内联样式进行修改 */
/* } */
</style>