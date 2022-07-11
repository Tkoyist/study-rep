export default {
        // 我们说过在actions 中一般进行异步操作，而添加购物车本身也是一个异步操作，也存在成功和失败，所以推荐返回一个promise 对象，由使用者决定请求成功和失败之后的操作
        // 因此我们将addCart 放入action 中进行操作

        // action 内部传入的第一个参数不是state 对象，而是上下文，一般指向 store 对象
        // 千万注意这里不要搞错了，不要像在mutation 中引用直接使用state 使用不了的
        addCart(context,goodItem){
            return new Promise((resolve,reject)=>{
                for(let item of context.state.cartList){
                    if(item.iid == goodItem.iid){
                      item.count += 1
                      resolve('当前商品数量+1')
                    }
                  }
                  goodItem.count = 1
                  context.state.cartList.push(goodItem)
                  resolve('添加新商品')
            })
            
        }
}