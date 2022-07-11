import app from'./src/vue/app.vue'

new Vue({
    el:"#app",
    template:"<app/>",
    // 文件解析这个代码的时候，会去解析里面的标签 
    components:{
        app
    }
}
)

// 我们在本地安装webpack才会产生 ndoe_modules 文件夹