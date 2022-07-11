<template>
  <div id="app">
    <hellovuex></hellovuex>
    <button @click="msgchange">修改消息</button>
     <button @click="msgchange2">修改第二轮</button>
     <button @click="activemsgc">action修改msg</button>
     <button @click="cnameapp">修改模块状态</button>
  </div>
</template>

<script>
import hellovuex from"./components/hellovuex.vue"

export default {
  name: 'App',
  components: {
    hellovuex
  },
  methods:{
    msgchange(){
      this.$store.commit("umsg")
      // 使用vuex 中的mutations 中的方法，并不是通过$store 直接访问，而是调用$store 的commit 方法，提交需要调用的mutatiuons 的名称，交给vuex 去调用
    },
    msgchange2(){
      this.$store.commit("changemsgbyoutter",'，前面的都不行，还是我来state修改最牛')
      // 调用store 中的方法且传入参数的格式 
    },
    activemsgc(){
      this.$store.dispatch('updatemsgbyp').then(()=>{
        console.log("promise 异步代码执行完毕");
      })
    },
    cnameapp(){
      this.$store.commit("cname")
      // 使用模块内部的mutation 使用方式和普通mutation 一致
    }
  }
}
</script>

<style>

</style>
