export default {
    addCart(state,goodItem){
        // 解析逻辑，遍历购物车，如果发现有相同商品，则将该商品count+1 ,并且直接结束函数
        // 如果遍历完成还未找到相同商品，则说明这是一个新商品，那我们就为其添加属性count 并添加该商品进入购物车 
        for(let item of state.cartList){
          if(item.iid == goodItem.iid){
            item.count += 1
            return 0
          }
        }
        goodItem.count = 1
        state.cartList.push(goodItem)
      }
    
}