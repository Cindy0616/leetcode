/* Given an array of non-negative integer nums. you are initialy positioned at the first index of the array. each element in the array represents your maximum jump length at the position. determine if you are able to rach the last index.
input: nums = [2, 3, 1, 1, 4]
output: boolean( true )
explanation: jump 1 step from index 0, to 1, then steps to the last index.

input: nums = [3, 2, 1, 0, 4]
output: false
explanation: you will always arrive at index 3 no matter what. its maximum jump length is 0;
which makes it impossible to reach the last index.
*/
var canJump = function(nums) {
//initially index = 0;
//p = index  =>//p = 0
//val = nums[p]  =>//val = 3
// p = p + val  =>//p = 3
// val = nums[p]  =>//val = 0;
// p will stay here not move
//if( p  === nums.length - 1)
let pointerVal = nums[0];
let size = nums.length

for ( let i = 1; i < nums.length; i ++) {
  if(pointerVal < i ){
    return false;
  }
   pointerVal = Math.max(nums[i]+ i, pointerVal);
}
return true;
}