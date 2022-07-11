<template>
     <div>
        <h2>{{msg}}</h2>
        <h2>这是在.vue 文件中实现了三类型代码分离之后的组件文字</h2>
        <h2>{{msg}}</h2>
    </div>
</template>



<script>
export default {
    name:'app',
    data(){
        return{
            msg:"这是在vue 实例中的子组件中定义的msg数据"
        }
    }

        // 目前只是定义了，但还没有使用，我们还是需要在main.js 文件中导入再使用
        // 现在的app.vue文件就是一个完整的组件了，包含了组件的模板数据和操作，我们在其他文件中导入该文件之后就可以直接定义并使用该组件了
        // 之后照例要去webpack.config.js文件中进行配置

}
</script>

<style>
    *{
        color: red;
    }
</style>