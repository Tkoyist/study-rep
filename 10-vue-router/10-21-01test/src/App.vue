<template>
  <div id="app">
    <div id="nav">
      <h2>我们是app组件</h2>
      <router-link to="/home" tag="button" >Home</router-link> |
      <router-link to="/about" tag="button" >About</router-link>
      <router-link :to="'/user/' + id" tag="button" >user</router-link>
      <!-- <router-link to="/profile"  tag="button" >profile</router-link> -->

      <router-link :to="{path:'/profile',query:{name:'Tkoyist',password:123} }"  tag="button" >profile</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
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

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
