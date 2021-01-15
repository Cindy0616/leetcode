/*Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.*/
// var threeSum = function (nums) {
//   var result = [];
//   //edge case if length smalled than3  then return empty array
//   if (nums.length < 3) {
//     return [];
//   }
//   //sort the nums let is in order
//   nums.sort((a, b) => a - b);


//   /*

//   	for (var i = 0; i < nums.length - 2; i++) {
// 		if (nums[i] > 0) {
// 			return rtn;
// 		}
// 		if (i > 0 && nums[i] == nums[i - 1]) {
// 			continue;
// 		}
// 		for (var j = i + 1, k = nums.length - 1; j < k;) {
// 			if (nums[i] + nums[j] + nums[k] === 0) {
// 				rtn.push([nums[i], nums[j], nums[k]]);
// 				j++;
// 				k--;
// 				while (j < k && nums[j] == nums[j - 1]) {
// 					j++;
// 				}
// 				while (j < k && nums[k] == nums[k + 1]) {
// 					k--;
//         }

//         */
//   //irration over nums
//   for (var i = 0; i < nums.length - 1; i++) {
//     // if i larger than zero after sorted , no solution can make to 0
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       continue;
//     }

//     //set the pointer left and right
//     left = i + 1;
//     right = nums.length - 1;

//     //check pointer and all sum = 0 put into answer array
//     while (left < right) {
//       if (nums[i] + nums[left] + nums[right] === 0) {
//         result.push([nums[i], nums[left], nums[right]]);

//         //also check if consecutive two elements are equal , move to following one
//         while (left < right && nums[left] === nums[left + 1]) {
//           left++;
//         }
//         while (left < right && nums[right] === nums[right - 1]) {
//           right--;
//         }
//         left++;
//         right--
//       }
//       //if the sum too small or too big, both move to next one.
//       else if (nums[i] + nums[left] + nums[right] < 0) {
//         left++;
//       }
//       else {
//         right++;
//       }
//     }
//   };
// }


var threeSum = function(nums) {
	var rtn = [];
	if (nums.length < 3) {
		return rtn;
	}
	nums = nums.sort(function(a, b) {
		return a - b;
	});
	for (var i = 0; i < nums.length - 2; i++) {
		if (nums[i] > 0) {
			return rtn;
		}
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		for (var leftp = i + 1, rightp = nums.length - 1; leftp < rightp;) {
			if (nums[i] + nums[leftp] + nums[rightp] === 0) {
				rtn.push([nums[i], nums[leftp], nums[rightp]]);
				leftp++;
				rightp--;
				while (leftp < rightp && nums[leftp] == nums[leftp - 1]) {
					leftp++;
				}
				while (leftp < rightp && nums[rightp] == nums[rightp + 1]) {
					rightp--;
				}
			} else if (nums[i] + nums[leftp] + nums[rightp] > 0) {
				rightp--;
			} else {
				leftp++;
			}
		}
	}
	return rtn;
};
var threeSum = function(nums) {
  var result = [];
  //edge cases
  if (nums.length < 3) {
    return [];
  }
  //sort nums in order
  nums.sort((a, b) => a - b);
  //iterate over
  for ( var i = 0; i < nums.length - 2; i++){
    //edge cases
    if ( nums[i] > 0 ){
      return [];
    }
    if( i > 0 && nums[i] === nums[i - 1]){
      continue;
    }
    for (var leftp = i + 1; rightp = nums.length - 1; leftp < rightp; ){
      if(nums[i] + nums[leftp] + nums[rightp] ==== 0) {
        result.push([nums[i], nums[leftp], nums[rightp]]);
        leftp++;
        rightp--;
        //check pointer
        while(leftp < rightp && nums[leftp] === nums[leftp - 1]){
          leftp++;
        }
        while(leftp < rightp && nums[rightp] === nums[rightp + 1]){
          rightp--;
        }
      }
      //some inpossible case
      else if(nums[i] + nums[leftp] + nums[rightp] > 0){
        rightp--;
      }else {
        leftp++;
      }
    }
  }
  return result;
}