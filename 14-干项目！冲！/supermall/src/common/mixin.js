export const helloMixin={
    mounted(){
        // console.log("hello mixin! in mounted");
    },
    created(){
        // console.log("hello mixin! in created");
    }
}
import BackTop from'@/components/content/BackTop.vue'
export const backTopMixin={
    methods:{
        // 点击回到顶部
        backclick(){
            // 第一个scroll 是访问到了ref 属性为scroll 的标签对象，第二个scroll是访问到了scroll组件中的scroll属性，而该属性被我们设置为指向了我们创建的better-scroll 对象，我们在通过该对象调用它的内置方法scrollTo()，用于到达顶部
            // scrollTo()有三个参数，第一个是X轴的滚动位置，第二个是y轴滚动位置，第三个用于控制移动速度，传入一个毫秒数，会在该时间内转到指定位置
            this.$refs.scroll.scroll.scrollTo(0,0,2000)
        },
    },
    components:{
        // 我们可以在mixin 中注册组件，但是需要在mixin 文件中导入指定的.vue 文件，当然，在这里导入之后，无需再次在导入mixin 的文件中再次导入
        BackTop,
    },
    data(){
        return{
            isBackTopShow:false
        }
    }
}