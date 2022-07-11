import observe from'./observe'
import Dep from './Dep'

export default function defineReactive(data,key,val = data[key]){// 为val 设置一个默认值，当val 未传入值的时候，说明无需改变值，只是用于劫持数据

  const dep = new Dep()
  // 7 这里是给非对象类型的数据添加了Dep 实例，因为当前位置是非对象类型数据的闭包的外部函数中，只要在这里定义，并且在get和set 函数中使用到了dep 那么dep就会一直保存在这个闭包空间中


    
    // 我们通过observe 方法调用Observer() ，在Observer 中递归的将一个对象的所有属性都defineReactive()（即使得他们都被侦测） ，而我们将一个对象的属性进行侦测的时候，我们可以对其进行observe() 操作，如果该属性是一个非对象数据，不会有任何关系，但是如果该属性是一个对象，那么observe 方法会将它的属性进行遍历侦测
    // 即使得该属性（是一个对象）的属性进行一次遍历侦测，如果该属性对象的属性中还有属性对象，那么又会被observe
    let childOb = observe(val)
    // -- 传入的数据劫持的数据也可能是一个对象，所以对该数据也要进行一次observe 操作
    // 我们在Observer() 构造函数中将最外层对象的属性全部遍历侦测后，每个属性都会来到当前函数进行侦测，在侦测过程中，我们对最外层对象的属性进行一次判断
    // 如果我们侦测操作的属性是一个对象的话,就进入observe -> Observer() -> defineReactive() 对该对象的属性全部进行侦测，并再对该对象的对象属性进行遍历
    // 总之，我们会对传入的数据进行判断，如果该数据是一个非对象数据，我们就会对其进行侦测，如果它是一个对象，我们先根据是否存在__ob__属性判断其是否被侦测，如果没有，再对它的所有属性进行递归侦测
    // 直到所有的对象属性都存在__ob__即他们的数据都被侦测过之后，递归侦测结束

    Object.defineProperty(data,key,{
      get(){
          console.log("正在访问:" + data +' 的 ' + key +' 数据');


        // 如果现在处于依赖收集阶段
        // -- 将依赖当前数据的watcher收集起来，target 指向当前处于活跃状态的watcher 处于活跃状态的watcher 同一时间只会存在一个，将该watcher 添加到当前数据的Dep 中
        if (Dep.target) {// -- 先判断当前的是否有watcher 处于活跃状态，因为只有第一次watcher 创建的时候，会去找到它所依赖的数据，将自己添加到那些数据的Dep 中，在其他情况下并不需要添加依赖
          dep.depend();
          if (childOb) {// -- childOb 存在说明当前的数据是一个对象类型数据，那我们就需要将当前数据的属性也全部添加依赖
            childOb.dep.depend();
            // -- childOb 指向observe 方法，而observe 方法会返回一个Observer 对象，Observer 实例存在dep 属性，dep 属性
          }
        }
        // dep.depend();



          return val
      },
      set(newValue){
          console.log("正在修改" + data +' 的 '+key+ ' 为 ' +newValue);
          val = newValue
          
        // 当我们将一个被侦测数据修改为一个对象的时候，我们也必须确保该对象被侦测，但是传入的对象是否被侦测（是否存在__ob__）是不确定的，所以我们也要对它进行判断，判断修改值是否为对象，是对象的话是否被侦测，没有被侦测的话，将其侦测
        childOb = observe(newValue)
        // 在这里当被侦测的数据发生改变的时候，通知dep数据被访问，因为defineReactive 方法会监听除了数组外的其他数据（借由我们前面的实现），所以一切非数组的内部数据发生改变都会触发这里的notify 方法
        dep.notify();
      }
    })
}
 
// 我们之前定义的defineReactive 方法就已经简单的完成了对数据的劫持和检测，即我们在修改和访问数据的时候，只要该数据被我们使用 defineReactive 方法修饰过，就能使其自动执行我们在defineReactive 中定义的代码
    
// - 但是，我们目前的defineReactive 方法是无法监听到嵌套的对象属性的，即如果存在对象中属性也是一个对象，而在对象中的对象中的数据，我们无法对其进行数据劫持
// - 我们现在就解决这个问题