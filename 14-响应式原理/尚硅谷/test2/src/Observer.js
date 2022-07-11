import { def } from './utils.js';
import defineReactive from './defineReactive.js';
import {arrayMethods} from'./array.js'
import observe from './observe.js';
import Dep from'./Dep'

export default class Observer{
    //  该类目前的主要这作用体现在它的构造方法constructor 中
    //  构造方法主要做了两件事情
    //      先使用defineReactive 函数为传入的对象增加了一个属性 __ob__ 并为其赋值为构造方法创建的实例，这使得传入的对象有了__ob__属性，相当于给了他一个标识，告诉外界它的属性已经被侦测
    //      第二件事则是将传入的对象的属性全部进行侦测
    //          注意这里说的是全部属性,包括对象,即如果某个属性是一个对象,我们不仅要在之后使其属性对象的数据被侦测,当前的属性对象本身也要被侦测
    //          而不是像之前理解的,只侦测非对象属性,因为使一个原本指向一个对象的属性指向其他的对象,也是对属性的修改,也应当被拦截
    constructor(value){

        // 7 给每一个Observer 实例都创建一个Dep对象属性,这里给对象类型的所有数据都添加了Dep 实例，将Dep 实例添加到了对象的__ob__属性中
        this.dep = new Dep();


        def(value,'__ob__',this,false);
        // 这里的this 指向的是通过该构造方法创建的实例
        // 该代码就是给传入的对象 添加了一个属性__ob__，该属性的值就是当前创建的对象实例



        if(Array.isArray(value)){
            // 6 数组在js 中也是Object 类型，所以数组对象也能通过observe 的筛选进入当前页面，进入当前页面后，判断是普通对象还是数组对象

            Object.setPrototypeOf(value,arrayMethods)
            // 4 如果我们侦测的数据是一个数组，我们就将其原型修改为我们魔改过后的原型对象，而在这个原型对象中我们完成了对数组原生方法的魔改，使其能进行侦测，否则对其进行对象的遍历侦测操作

            this.observeArray(value)
            // 5 调用数组的observeArray 方法进行数组的专属遍历，在这个遍历过程中，会为当前数组对象添加__ob__属性
        }
        else{
            this.walk(value)
            // 遍历侦测，将obj 的属性全部进行了侦测，但还未对 obj 的对象属性的属性进行侦测
            // 侦测所有属性，包括对象属性

        }

    }
    // 对象专属遍历方法
    walk(value){
        // 用于遍历当前的对象中的属性，并他们都进行侦测
        for(let i in value){
            // in 关键字遍历获取元素的key 值，for 遍历获取 value 值
            defineReactive(value,i)
            // 对传入的数据全部进行数据劫持和依赖收集
        }
    }

    // 数组专属遍历方法
    observeArray(arr){
        for(let i = 0 ,l = arr.length ; i<l ;i++){
            // 定义一个变量l 等于数组的长度，这样就不用每一轮循环都去访问一次数组的length 属性，提高代码效率
            // 同时可以防止数组变化导致的数组长度变化
            // - 经过测试，js 不会出现遍历过程代码长度改变的问题，弹幕说是由于js 是单线程语言，而这个问题是一个并发修改问题

            // 现在对数组的每一个对象都进行侦测
            // defineReactive(arr[i])
            // 上面的方式看似成功了,但是我们一开始就说过defineReactive 无法侦测数组和对象,而数组的value 完全有可能是一个对象或者对象,所以我们需要对arr 的value 进行observe操作

            console.log('observeArray 方法执行，正在侦测数组数据');
            observe(arr[i])
            // 目前问题在这里 
            

        }
    }
}

