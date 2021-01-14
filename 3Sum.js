/*Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.*/
var threeSum = function (nums) {
  var result = [];
  //edge case if length smalled than3  then return empty array
  if (nums.length < 3) {
    return [];
  }
  //sort the nums let is in order
  nums.sort((a, b) => a - b);

  //irration over nums
  for (var i = 0; i < nums.length - 1; i++) {
    // if i larger than zero after sorted , no solution can make to 0
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    //set the pointer left and right
    left = i + 1;
    right = nums.length - 1;

    //check pointer and all sum = 0 put into answer array
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        //also check if consecutive two elements are equal , move to following one
        while (left < right && nums[left] === numes[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--
      }
      //if the sum too small or too big, both move to next one.
      else if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      }
      else {
        right++;
      }
    }
  };