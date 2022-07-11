<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/home" tag="button" replace active-class="active">Home</router-link> |
      <router-link to="/about" tag="button" replace active-class="active">About</router-link> -->

      <h2>我们是app组件</h2>
      <router-link to="/home" tag="button" >Home</router-link> |
      <router-link to="/about" tag="button" >About</router-link>
      <!-- <router-link :to="'/user/' + id" tag="button" >user</router-link> -->


     <!-- <div>
        <button @click="homeclick">home</button>
        <button @click="aboutclick">aobout</button>
     </div> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  // 定义的方法是由当前组件使用的，所以定义也应当在当前的组件中，而不是在其父组件中
    methods:{
    homeclick(){
      this.$router.push('/home')
      console.log("home");
    },
    aboutclick(){
      this.$router.push('/about')
      console.log("about");
    }
  },
  data(){
    return{
      id:"tkoyist"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.active {
  color: red;
}
</style>
