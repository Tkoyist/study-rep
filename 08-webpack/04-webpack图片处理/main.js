import * as bbb from"./src/js/bbb"

import "./src/css/stylef.css"

import Vue from 'vue'

// import app from'./src/vue/app'
// 直接导入组件文件，在后面就可以使用该文件中的组件

// 我们在 .vue 类型文件中实现了html css js 代码的分离，就不再需要app.js文件了
// import app from'./src/vue/app.vue'
import app from'./src/vue/app.vue'
// **在当前版本下导入.vue文件不需要写后缀，写了反而会报错
// 但是目前是解析不了的 .vue 文件也需要相应的loader
// vue-loader vue-template-loader
// npm install vue-loader@2.6.14 vue-template-compiler@2.6.11 --save-dev

// 报错了，vue-template-compiler的版本必须与我们安装的vue 的版本一致
// 

new Vue({
    el:"#app",
    template:"<app/>",
    // 文件解析这个代码的时候，会去解析里面的标签 
    components:{
        app
    }
}
)