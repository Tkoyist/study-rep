import * as bbb from"./src/js/bbb"

import "./src/css/stylef.css"
// 解析和渲染css文件需要引入新的loader 在终端下载loader，在webpack.config.js中配置loader

import Vue from 'vue'
// 引入vue文件，不用指明位置，这是node 语法
// 现在导入vue文件之后,我们就可以在这里正常使用vue了

const vue = new Vue({
    el:"#app",

    template:`
    <div>
        <h2>{{msg}}</h2>
    </div>
    `,
    // 我们可以在 template 属性中选择需要放到html文件中的代码
    // template 中定义的数据在编译的时候会直接替换HTML中的挂载标签

    data:{
        msg:"来自cpm创建的vue 实例中的msg 数据"
    }
})
// 我们在这里创建了vue 实例，但没有挂载，在之后我们将其导入到一个html文件中之后，可以直接挂载使用

console.log("在main中输出了aaa和bbb中的数据"+bbb.msg+bbb.msg1);