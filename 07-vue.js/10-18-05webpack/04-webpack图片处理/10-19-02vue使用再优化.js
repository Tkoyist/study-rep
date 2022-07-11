import * as bbb from"./src/js/bbb"

import "./src/css/stylef.css"

import Vue from 'vue'

// 主要操作在main2.js 和 src vue app.js中

// const app ={
//     template:`
//     <div>
//         <h2>{{msg}}</h2>
//     </div>
//     `,
//     data(){
//         return{
//             msg:"这是在vue 实例中的子组件中定义的msg数据"
//         }
//     }
// }
// 即便如此还是比较麻烦，如我所料，这部分代码也应单独作为一个模块封装再引入当前页面
// *详情请见 src vue app.js

const vue = new Vue({
    el:"#app",

    // template:`
    // <div>
    //     <h2>{{msg}}</h2>
    // </div>
    // `,
    // 现在这种方式来写模板，不仅更新麻烦，而且结构混乱
    // 我们需要一个方法将其分离出来

    // 我们可以使用组件化思想：
    // 之前说道，我们在这里的template 中写入的代码会替换到index 中el 指向的标签
    // 而我们用于替换的代码是html 标签，也就是我们可以使用其他的HTML标签
    // 而我们对实例内部的组件的使用，就是通过标签的方式，而且组件内部的HTML 代码模板是可以被我们所定义且直接使用的

    // 所以，我们定义一个组件，将需要的HTML代码封装进去，再在template 属性中使用该组件，该组件在编译的时候会直接去替代index的代码

    template:`<app/>`,
    // 在模板中直接引用子组件，该子组件已定义，可以直接使用

    // data:{
    //     msg:"来自cpm创建的vue 实例中的msg 数据"
    // },
    // 现在我们对数据的使用也是在组件中，所以定义也放到组件里

    components:{
        app
    }
})

console.log("在main中输出了aaa和bbb中的数据"+bbb.msg+bbb.msg1);