import Compile from './Compile'
export class Vue{
    constructor(options){
        // options 参数，本质是一个对象，对象中包含了我们创建vue所需的数据
        this.$options = options || {}
        // 获取data属性中的data 数据
        this._data = options.data
        // 响应式监听
        // 模板编译,compile 类专门用于编译模板,需要两个参数，第一个参数是被挂载的模板，第二个参数是挂载的位置
        new Compile(options.el,this);
    }
}