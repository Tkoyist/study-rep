<template>
  <div id="profile">
    <profile-nav-bar></profile-nav-bar>
    <profile-avatar></profile-avatar>
   <div class="bar">
     <money></money>
     <youhui></youhui>
     <jifen></jifen>
   </div>
    <message></message>


  </div>

</template>

<script>
  import ProfileNavBar from './childComs/ProfileNavBar'
  import ProfileAvatar from './childComs/ProfileAvatar'
  import Money from './childComs/money'
  import Youhui from './childComs/youhui'
  import Jifen from './childComs/jifen'
  import message from './childComs/message'
  export default {
    name: "Profile",
    components: {
      ProfileNavBar,
      ProfileAvatar,
      Money,
      Youhui,
      Jifen,
      message

    }
  }
</script>

<style scoped>
  #profile {
   padding-top: 44px;
  }
  .bar {
    display: flex;
    width: 100%;

  }
</style>
