<template>
    <div id="tabbar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
    }
}
</script>

<style scoped>
    #tabbar{
        display: flex;
        background-color: #f6f6f6;
        box-shadow: 0px -1px 3px rgba(100, 100, 100, .2);
        width: 100%;
        position: fixed;
        bottom: 0px;
    }
</style>