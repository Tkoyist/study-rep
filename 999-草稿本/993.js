var name = 0
function fun() {
  console.log(this.name);

}
function fun1() {
  var name = '1'
  fun()
}
fun1()