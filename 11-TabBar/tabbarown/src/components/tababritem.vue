<template>
    <div class="tabbaritem" @click="activechange">
        <div v-if="isactive"><slot name="itemicon"></slot></div>
        <div v-else><slot name="itemiconactive"></slot></div>
        <div><slot name="itemtext"></slot></div>
    </div>
</template>

<script>
export default {
    computed:{
        isactive(){
            return this.$route.path.indexOf(this.path) != -1
        }
    },
    props:{
        path:String
        // 这个数据是来自于父组件的！虽然我们是在tabbaritem 进行的数据传入，但是该tabbatitem 本质是tabbar 的子组件，tabbaritem 将数据传输给tabbar ，我们再通过props 获取该数据
        // 注意，我们在使用子模板的时候，传入给props 中定义的数据来自于父组件使用子组件时的传入
    },
    methods:{
        activechange(){
            this.$router.push(this.path)
        }
    }
}
</script>

<style scoped>
    .tabbaritem{
        flex: 1;
        text-align: center;
        height: 49px;
        font-style: 14px;
    }

    .tabbaritem img{
        width: 24px;
    }
</style>