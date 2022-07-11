<template>
    <div class="bottom-bar">
        <div class="button-box">
            <check-button :isCheck="isAllcheck" class="check-button" @click.native="allChange"></check-button>
            <span> 全选</span>
        </div>

        <div class="total-price">
        合计：{{total}}
        </div>
        <div class="deal">
            去计算({{allcount}})
        </div>
    </div>
</template>

<script>
import CheckButton from'@/components/content/CheckButton.vue'
export default {
    components:{
        CheckButton
    },
    methods:{
        allChange(){
            if(this.isAllcheck == false){
                // 原本是无法通过mutation 之外的方式修改state ，但是这里state 存储的是对象（对象的引用），我们通过state 访问到应用后，是直接去堆空间中寻找对象的，此时与state 已经没有关系了，所以可以修改
               this.$store.state.cartList.forEach(item => item.isCheck = true)
            }
            else{
                this.$store.state.cartList.forEach(item => item.isCheck = false)
            }
        }
    },
    computed:{
        total(){
            return this.$store.state.cartList.filter(item => {
                return item.isCheck
            }).reduce((preValue,item)=>{
                return preValue + item.price * item.count
            },0).toFixed(2)
        },
        allcount(){
            return this.$store.state.cartList.filter( item =>{
                return item.isCheck
            }).reduce((pre,item)=>{
                return pre + item.count 
            },0)
        },
        isAllcheck(){
            // 高阶函数中，如果只有一句语句，且该语句时返回值的时候，可以省略{}和return 但是如果省略了return 却没有省略{},浏览器就无法识别该语句是返回语句，所以{}和return 必须一起出现
             if(this.$store.state.cartList.length == 0){
                 return false
            }
            else
                return !(this.$store.state.cartList.filter(item => !item.isCheck ).length)
            // 逻辑：将所有内容进行遍历，将所有isCheck 的值为false 的元素筛选出来，如果筛选出来的数组的长度为空，那说明所有的isCheck 都为true，那么就返回!length（number数据类型有值取其boolean均为true，否则均为false

        }
    }
}
</script>

<style scoped>
.bottom-bar{
    height: 40px;
    background-color:lightyellow;
    display: flex;
}
.check-button{
    display: inline-block;
    line-height: 40px;
}
.button-box{
    font-size: 18px;
    align-items: center;
}
.total-price{
    text-align: center;
    width: 50%;
    line-height: 40px;
    
    font-size: 18px;
}

.deal{
    flex: 1;
    text-align: center;
    background-color: var(--color-tint);
    line-height: 40px;
}
</style>