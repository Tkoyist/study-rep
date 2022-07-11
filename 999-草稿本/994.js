var searchMatrix = function(matrix, target) {
  let bottom = 0,top = matrix.length,mid
  while(bottom<top){
    console.log(bottom,top);
      mid = bottom+((top - bottom)>>1)
      if(matrix[mid][0] == target)return true
      else if(matrix[mid][0] > target)top = mid
      else bottom = mid + 1
  }
  return bottom
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],0));