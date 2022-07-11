var findMin = function(nums) {
  let left = 0,right = nums.length-1,mid = (left+right)>>1
  while(left<=right){
    console.log(left ,right )
      if(nums[mid] > nums[left]){
          left = mid + 1 
      }else{
          right = mid - 1
      }
      mid = (left+right)>>1
  }
  return mid
};

findMin([3,4,5,1,2])