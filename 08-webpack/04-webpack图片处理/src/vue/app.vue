<template>
     <div>
        <h2>{{msg}}</h2>
        <h2>这是在.vue 文件中实现了三类型代码分离之后的组件文字</h2>
        <h2>{{msg}}</h2>
        <h1>aaaaaaaaaaaaaaaaa</h1>
        <h1>
            
        </h1>
        <ccpn></ccpn>
    </div>
</template>



<script>
import ccpn from './ccpn.vue'
// 导入子组件文件，但是目前还未声明，仍无法使用

export default {
    name:'app',
    components:{
    // 在组件属性中声明组件
    ccpn
    },
    data(){
        return{
            msg:"这是在vue 实例中的子组件中定义的msg数据"
        }
    }

        // 目前只是定义了，但还没有使用，我们还是需要在main.js 文件中导入再使用
        // 现在的app.vue文件就是一个完整的组件了，包含了组件的模板数据和操作，我们在其他文件中导入该文件之后就可以直接定义并使用该组件了
        // 之后照例要去webpack.config.js文件中进行配置


        // 现在我们尝试为这个组件按照之前的方式添加一个子组件
        // - 创建.vue 文件,添加需要的数据
        // - 导入当前组件（父组件）
        // - 导入之后再模板中使用组件

}
</script>

<style scoped>
    *{
        color: red;
    }
</style>