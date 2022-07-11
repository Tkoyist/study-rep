// 1. 导入Toast 组件对象
import Toast from'./Toast'

// 2 .创建toast 插件对象
const obj = {}

// 3. 为插件对象添加install 方法，方法会在被调用时自动传入参数Vue,所以我们无需导入Vue 对象，可以直接使用
obj.install = function(Vue){
    
    
    // 但是现在只是为toast 的使用做好了逻辑代码（js代码准备）但模板还没有通过install 方法导入到我们需要的位置
    // 5. 在我们需要使用插件的位置放入html 模板
    // document.body.appendChild(Toast,$el)
    // 这种方式是不行的，我们对插件的安装是在vue 实例挂载之前，所以在安装插件的时候，是不存在$el 的
        // ① 创建组件构造器
        const toastContrustor = Vue.extend(Toast)
        // ② 使用组件构造器创建一个组件对象
        const toast = new toastContrustor()
        // ③ 将组件对象，手动挂载某个元素，即给组件创建一个根元素
        toast.$mount(document.createElement('div'))
        // ④ 将包含组件的根元素添加到我们需要的HTML 文件中
        document.body.appendChild(toast.$el)

    
    // 6. 在安装中为Vue 的显示原型添加$toast 对象，赋值为Toast 组件
    // Vue.prototype.$toast = Toast;
    // 这里不应该直接等于toast（组件对象），而应该等于我们上面创建的toast 组件对象，toast 组件对象我们已经在该方法中将其html代码挂载在了需要的地方，而如果我们使用Toast ，是无法获取到html 代码的
    Vue.prototype.$toast = toast

    // 现在可以在任何地方直接使用this.$toast.show()方法进行显示了
 } 


// 4. 导出obj 对象，即导出插件对象，由于是default 导出，所以使用者可以在外部自定义名字
export default obj


// 我们使用插件导入的目标，希望可以直接通过
//   this.%toast.show('需要显示的内容',显示的时间)
// 直接完成toast 的文字显示和自动消失
// 而这种访问实现的本质，是在当前的Vue 的隐式原型（即Vue 方法的显式原型）中添加了一个对象$toast （$store也是该原理，将vuex 赋值为一个Vue 对象并添加到了vue 实例的隐式原型中）
// 所以this.$toast 本质是访问到了当前Vue 实例的隐式原型的show 方法，所以插件对象中必定存在show 方法

// 我们说道，安装插件本质就是调用插件对象的install 方法，而我们又说道，安装插件是向当前的Vue 实例的隐式原型（即Vue 方法的显式原型）中添加了一个对象属性
// 所以install 方法中，一定存在 Vue.prototype.$toast = 
// 为Vue 的显示原型中添加$toast 对象