<template>
   <div>
        <h1>he.lo!vuex！</h1>
        <h2>{{$store.getters.getname}}</h2>
        <h2>{{$store.state.a.name}}</h2>
        <h2>{{$store.state.msg}}</h2>
        <h2>{{$store.getters.msgaftergetter}}</h2>
        <h2>{{$store.getters.msgsecond}}</h2>
        <h2>{{$store.getters.msgthird("，这是从调用getters 的外部组件中获取的数据，可能是动态数据哦")}}</h2>
       
   </div>
</template> 


<script>
export default {
    
}
</script>