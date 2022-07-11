function fun(head){
  let left = head
  let right = left.next.next
  return foo(left,right)
}
function foo(left,right) {
  left.next.next = left
  right.next = left.next
  if(right.next == null){
    return right
  }
  foo(right,right.next.next)
}
