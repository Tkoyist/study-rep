// function fun(){

// }
// console.log(typeof (()=>{}));
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof 1);
// console.log(typeof 'A');
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);

// console.log(+0 === -0);

// var nextPermutation = function(nums) {
//   let i = nums.length-1
//   for(;i>0;i--){
//     if(nums[i]<nums[i+1])break
//   }
  
//   for(let j=nums.length-1;j>=0;j--){
//     console.log(nums[i],nums[j]);
//     if(nums[j]>=nums[i]){
//       let temp = nums[j]
//       nums[j] = nums[i]
//       nums[i] = temp
//       let left = i+1,right = nums.length-1
//       while(left<right){
//         temp = nums[left]
//         nums[left] = nums[right]
//         nums[right] = temp
//         left++
//         right--
//       }
//       break
//     }
//   }
//   return nums
// };
// console.log(nextPermutation([3,2,1]));

// console.log(+0/10);
// console.log(10/0);


// import axios from 'axios'

// export const postTest = ()=>{
//   rerturn axios.request({
//     url:'',
//     method:'',
//   }
//   )
  // 这里只负责发送请求获取promise对象


// let a = ()=>{
//   console.log(this);
// }
// a()
// function b(){
//   b.call(this)
// }
// b()