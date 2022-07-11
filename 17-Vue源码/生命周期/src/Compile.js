export default class Compile{
    // 该类主要用于编译模板
    // 即创建模板，第一个参数el 我们是知道的，是一个真实dom的选择器，该选择器选中的dom 在之后会被vue 替换为其他的模板（.vue 文件）
    constructor(el,vue){
        // vue实例
        this.$Vue = Vue
        // 获取到el 指向的真实dom 节点
        this.$el = document.querySelector(el)
        // 如果用户传入了挂载点
        if(this.$el){
            // 调用函数，让节点变为fragment
            this.node2Fragment(this.$el)
        }
    }
    node2Fragment(el){
        
    }
}