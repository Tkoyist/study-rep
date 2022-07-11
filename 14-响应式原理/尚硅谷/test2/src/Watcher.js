import Dep, { pushTarget, popTarget } from "./Dep";

export default class Watcher{
    constructor(target, expression, callback){
        console.log("我是Watcher类的构造器");
        this.id = uid++;
        this.target = target;
        // 1 给当前的watcher 对象添加一个target 属性,该属性指向传入的对象
        this.getter = parsePath(expression);
        // 2 getter 是一个获得器，能传入对象的指定路径数据，而该数据由expression 决定

        this.callback = callback;

        this.value = get()
    }
    update(){
        // 4 dep 数据更新时，根据dep 中存储的watcher 数组，依次调用他们的update 方法，对watcher 进行更新
        this.run()
    }

    addDep(dep) {// -- 在Dep 中调用这个方法，该方法会调用Dep 中的addSub 方法将当前watcher 添加到dep 实例中，但是为什么要这么绕一圈暂时不知道
        dep.addSub(this);
      }

    get(){ // -- get get 到当前watcher 依赖于那些数据
        // 3  用于收集依赖,Dep 全局的target 等于当前对象，即给某个用于收集依赖的函数指明需要收集的是当前watcher 对象的依赖
        // Dep.target = this;

        pushTarget(this)// -- 将当前watcher 实例推入target 栈中，并将全局target 指向栈顶元素
        
        // 4 Dep 的全局target对象等于该对象
        const obj = this.target;

        var value;
        // 用于存储返回值

        // 只要能找，就一直找
    try {
        // 调用getter 函数，即parsePath 函数返回的匿名函数，可以将传入的数据按照固定的格式逐层访问
        value = this.getter(obj);
      } finally {
        // Dep.target = null;
        // 当依赖收集完成，退出依赖收集阶段
        // -- 使target 清除，此时就没有watcher 处于依赖收集阶段了

        Dep.popTarget()
        // -- 现在我们不应该使得全局target 直接为null ，而是让其等于栈中的上一个数据
      }
      return value
    }
    run() {
        this.getAndInvoke(this.callback);
    }
    getAndInvoke(cb) {// -- 获取value oldvalue this 并调用回调
    // const value = this.get();
    
        const value = this.getter(this.target);// -- getter 属性指向parsePath 函数
        if (value !== this.value || typeof value == "object") {
          const oldValue = this.value;// -- 数据发生改变时，令oldValue = 当前值，而当前值更新为新值
          this.value = value;
          cb.call(this.target, value, oldValue);
        }
    }
}

// 1 该函数，根据传入的str 访问到对应的对象 例如传入 a.b.c.d 返回对应的 d 对象
function parsePath(str){
    var segments = str.split('.')
    // 2 先将str 中的每一层对象的对象名提取出来

    // 3 返回一个箭头函数，实现一个闭包，调用该函数可以获取需要的对象
    return (obj) => {
        for(let i = 0 , l = segments.length ; i<l ; i++){
            // 4 进行遍历，segments 数组中有多少数据，我们需要访问的对象就有多少层，我们访问的次数就有多少次

            if (!obj) return;
            // 9 如果某一层访问不到对应属性，即某一层的对应对象不存在该属性，则返回空对象

            obj = obj[segments[i]]
            // 5 一层层向内部访问，由于segments 中存储了每一层访问的属性名，所以每一次segments[i] 中保存的都是当前obj中我们需要的属性的属性名，所以我们每一次使得obj 等于它当前所在的对象层中的对应的我们需要的对象属性 
        }
        // 6 当遍历完成之后最后的obj 就是我们层层访问之后的我们真正需要的对象
        return obj

        // 7 该方法的使用：我们先传入需要的被解析的对象路径，如 a.b.c.d 
        // 8 该方法接受到路径之后会返回一个函数，我们将需要被访问的对象 即 a 对象传入函数，函数就会返回对应对象中对应路径指向的对象（即d）（也有可能是一个普通数据（倒数第二层的对象的属性））
        // 返回的函数能将所有对象按照指定的路径适配访问
    }

}