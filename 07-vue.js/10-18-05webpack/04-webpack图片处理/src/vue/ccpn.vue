<template>
     <div>
        <h1>{{cmsg}}</h1>
    </div>
</template>



<script>
export default {
    name:'app',
    data(){
        return{
            cmsg:"这是在vue 实例中的子组件的子组件中中定义的cmsg数据"
        }
    }

}
</script>

<style scoped>
    *{
        color: red;
    }
</style>