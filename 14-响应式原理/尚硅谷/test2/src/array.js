// 获取到Array 的显式原型
const arrayPrototype = Array.prototype

import { def } from './utils.js';

// 要被改写的7个数组方法
const methodsNeedChange = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
];
// 首先这七个方法是被定义在Array 的显式原型中的，我们的改写也是对Array 的显式原型中的这七个方法进行的改写
// 但是我们当然需要保证这七个方法对于未被侦测的普通数据的使用，所以我们对原方法进行备份，进行判断，如果调用这七个方法的数据没有被侦测则使用原本的方法，如果被侦测则要进行我们想要的操作

// 我们创建一个类，该类的隐式原型指向Array 的显式原型，也就是使得该类可以直接访问到Array 中的那七个数组方法，也就是进行了原本方法的备份，再在我们创建的对象中进行数据侦测，然后我们将被侦测的数组对象的原型指向我们创建的这个对象
// 该数组使用这七个方法的操作就被我们拦截下来了，我们拦截下来之后就可以进行我们想要的操作，即数据侦测

// 以arrayPrototype为原型创建arrayMethods对象
export const arrayMethods = Object.create(arrayPrototype)
// 将我们创建的arrayMethods 对象暴露出去，让被侦测数组可以找到这个对象，使其原型指向该对象


methodsNeedChange.forEach(methodName =>{
    // 备份原本方法
    const original = arrayPrototype[methodName]
    // 我们在侦测魔改的数组原型方法中也是需要用到原本方法的，而且，我们希望魔改之后的方法能延续原本的方法名，所以我们设置一个变量original 用于存储原本的方法，在魔改方法需要使用原本方法的地方使用original ，再在魔改完成之后，将使得原本方法的方法名指向对应的魔改方法


    // 给魔改函数套外壳，为arrayMethods 方法创建属性，这些属性的key 即是原本的方法名，而这些属性的值，即方法体即是我们的魔改方法体
    def(arrayMethods,methodName,function(){
        console.log('正在执行被劫持魔改的 ' + methodName +' 方法');
        // 这里用一句输出暂时替代我们需要进行的魔改操作，我们会在这个魔改操作红完成数据侦测
        // 我一开始认为我们现在可以直接使用original 方法，直接执行原生方法
        // original()
        // 但是这样是不行的，我们不加前缀的执行方法，this 会是window ，即是window 调用了原生方法，但是我们希望是由被侦测的数组对象来调用 
        // 所以我们使用apply 方法，将this 指向我们希望的数组
    // console.log(this);
        // 我们这里输出this是毫无意义的，只有在有数组调用当前的这个函数（定义时是匿名函数，但通过def方法为其创建了一个引用）
        // 而我们在调用这个方法的时候，是通过 数组对象.原生数组名 调用到的当前方法，而this，理所当然也就是数组对象

        // 4 我们现在对七个原生方法中的三个特殊方法（会将数组中添加数据的方法）进行单独的特殊处理，因为我们需要保证新添加的数据也被侦测
        // 因为目前只有 observe（判断是不是对象） -> Obsever（判断是不是数组） -> arrayMethod（修改数组对象隐式原型）的方式进入当前页面，而对象类型的数据都会在observe 函数中添加__ob__ 属性
        // 所以一切有资格调用当前方法的数组对象都一定是存在 __ob__ 属性的，而ob 属性指向一个Observer 对象
        const ob = this.__ob__

        // 5 push unshift splice 可以插入新项，我们要对新项进行侦测，直接对其进行observe 包装,注意我们如何获取到新项，当我们使用方法放入新数据的时候，是要给方法传入数据的，而传入的数据是放在参数列表当中的
        let inserted=[]

        const args = [...arguments];
        // arguments 是类数组对象，本身不存在slice方法，我们先将其转化为数组
        switch(methodName){
            case'push':
            case'unshift':
                inserted = args
                // 获取到传入的数据并备份
                break;
            case'splice':
                inserted = args.slice(2)
                // 因为splice的参数列表中第三个参数才是我们需要插入的数据
                break;
        }
        
        // 6 上面是判断是否调用了那三个方法，如果调用了则获取他们的参数列表
        // 但是即使调用了，也有可能是没有传入任何参数的，所以我们获取到参数列表之后，先判断参数列表是否为空（即判断是否真的传入了参数）
        if(inserted.length != 0){
            // 7 判断调用三个方法的时候参数列表是否为空，如果不为空，我们就将传入的参数数据进行侦测
            ob.observeArray(inserted)
            // 8 我们已经确定确实传入了参数，现在对传入数据进行侦测，获取到ob（即当前数组的__ob__ 属性，是一个Observer 对象），再调用Observer 对象的数组侦测方法observeArray
            // 9 我们使用observeArray 方法进行数据侦测是因为inserted 肯定是一个数组，因为inserted 的数据来源于arguments ，而arguments 中的参数列表是以数组形式保存的 
            // 但这并不意味着我们只能在被侦测数组中插入数组,observeArray 方法会对传入的数组内数据逐一进行observe ,而observe 会为非对象数据，普通对象数据和数组对象数据分别进行不同的处理，使他们被侦测
            //  - observeArray 本身就是专门对数组类型数据进行处理，再根据数组内部的数据类型对数据进行不同方式的侦测，而我们传入push unshift splice 方法的数据不论是什么类型，都是以数组的形式传入arguments 的 ，我们对arguments 中提取出来的参数当然要使用observeArray 进行侦测
        }

        //  - 我们使用该方法只有一个方法，就是通过一个数组对象，去调用原生七方法，再通过七方法的引用值访问到这个方法，而通过这种方式使用该方法，this就是我们调用七方法的数组对象
        //  - arguments 也是同理，也是只能通过上述的方式访问到，而我们访问这些方法的时候，有部分方法是需要参数的（而且可能还不止一个参数），我们都通过这种方式将数据传入了
        // original.apply(this,arguments)

        ob.dep.notify()
        // 11 之前使用notify 监听了普通数据，这里再监听数组内部的普通数据，因为我们修改数组数据是使用数组七方法，而我们只有在当前页面能监听到通过数组七方法修改数组数据

        // 10 有些数组方法是存在返回值的，所以我们要使得魔改方法也返回魔改前方法的返回值，例如pop 会返回被删除的值
        return original.apply(this,arguments)

    },false)
    // false 设置其无法被枚举
})
