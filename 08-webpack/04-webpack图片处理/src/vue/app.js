export default{
    template:`
    <div>
        <h2>{{msg}}</h2>
    </div>
    `,
    data(){
        return{
            msg:"这是在vue 实例中的子组件中定义的msg数据"
        }
    }
}
// 但是目前还不够分离，模板代码（html代码）和数据的代码（js代码）在同一文件，应该实现分离