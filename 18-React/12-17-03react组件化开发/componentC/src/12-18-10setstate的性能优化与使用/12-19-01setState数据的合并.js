/**
 * setState  修改state 时会将修改前后的state进行合并而不是进行覆盖，即原本存在的属性，在新的state中不存在，那么就会保留该属性，
 * 因为在react 内部就是使用了 assign 方法对更新前后的state 进行了合并，而不是直接的覆盖
 */