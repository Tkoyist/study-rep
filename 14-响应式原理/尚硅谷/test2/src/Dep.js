var uid = 0
export default class Dep{
    constructor(){
        console.log('Dep构造函数');

        this.id = uid++
        // uid本质上完成了一个闭包，我们每次来到当前语句都会获取一个全新的id

        // 1 用一个数组存存储自己的订阅者，本质存放的是watcher 实例
        this.subs = []
    }
    // 添加订阅者
    addSub(sub){
        this.subs.push(sub)
    }
    
    depend(){// -- 被defineReactive 的getter 使用，用于将watcher 添加到dep 中
        if(Dep.target){// -- 如果有watcher 处于活跃状态，Dep.target 只会在Watcher 的 get 方法中被修改，在watcher 开始依赖收集时将target 指向当前watcher ，当watcher 依赖收集完成之后腾出target 给下一个需要进行依赖收集的watcher 使用
            // this.addSub(Dep.target)
            Dep.target.addDep(this)// -- 构造方法中的this 都是指向当前创建的实例，这里也是如此
            // -- addsub 会调用传入的dep 实例的addSub 方法，将watcher 实例添加入Dep 中
        }
    }
    // 通知更新
    notify(){
        console.log("我是notify");

        const subs = this.subs.slice()

        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
            // 2 调用所有订阅者的ypdate 方法，告诉他们当前dep 所在位置的数据发生改变了 
          }
    }
}

Dep.target = null;
// 提前为Dep 声明好target 属性

const TargetStack = [];
// TargetStack 用于保存target ，是一个栈 ，为什么需要这个栈呢，当出现父子组件的情况下，如果父组件渲染到一半的时候进入子组件的渲染，全局的target只有一个，那么全局target 就会从指向父组件变成指向子组件，当子组件渲染完毕，target 会等于null ，渲染会结束吗，但是父组件是没有渲染完成的，所以这种情况是错误的，应当让子组件渲染完成之后继续渲染父组件，那么就使用栈来保存target，每当一个组件渲染完成就出栈，每当有新的嵌套子组件只要渲染就入栈

export function pushTarget(_target) {
  TargetStack.push(Dep.target);
  Dep.target = _target;//每次入栈都使全局target 指向栈顶
}

export function popTarget() {
  Dep.target = TargetStack.pop();
}  