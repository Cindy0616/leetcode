//implement next permutation, which rearranges numbers into the lexicograhically next greater permutation of numbers. If such an arrangement is not possible, it must rearrange it as the lowest possibile order(ie, sorted in ascending order) The replacement must be in place and use only constant extra memory.//
//input : nums = [1,2,3]
// output : [1,3,2]
// input : nums = [3,2,1]
// output [1,2,3]

var nextPermutation = function(nums) {
  //iterate over from the right side to the point that inverse the order, which is the finding first decreasing point.
  //finding the number of just bigger than the point, but smallest bigger.
  //swap
  //reverse elment into ascending order
  /*
  finding the first decreasing index moving from the end to start
  [7, 2, 3, 1, 5, 4, 3, 2, 0] num1 is the first decreasing index going from the end backwards
  [7, 2, 3, 2, 5, 4, 3, 1, 0] num2 & num1 swap
  [7, 2, 3, 2, 0, 1, 3, 4, 5] reverse /sort to right
  */

//there are 3 functions 1, swap 2 sort/ reverse , 3 nextbigger
  for( let i = nums.length - 1; i > = 0; i--){
     //[       i - 2, i - 1 ,i]
     //i   >  i +1 if ( i  < i + 1 ) i will be the pointer
     if(nums[i] < nums[i + 1]){
       //here will be three differents functions
       const bbbigger = nextbigger(i);
       swap(i, bbbigger);
       reverse(i + 1);
       return;
     }
  }
  //initialization of 3 functions
  nums.reverse();
  function swap(i, j){
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  function reverse(idx) {
    let start = idx;
    let end = nums.length - 1;
    while( start < end){
      swap(start, end);
      start++;
      end--;
    }
  }
  function nextbigger(idx){
    for ( let i = nums.length - 1; i > idx; i--){
      if( nums[i] > nums[idx]){
        return i;
      }
    }
  }

}