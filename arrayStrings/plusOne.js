/* given a non-empty array of decimal digits representing a non-negative integer, incremenet one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
You may assume the integer does not contain any leading zero, except the number 0 iteself.

input digits =[1,2,3]
output [1,2,4]
explanationL the array represents the integer 123

input digits = [4,3,2,1];
output: [4,3,2,2]
explanationL the array represents the integer 4321
*/
var plusOne = function(digits){
  for (var i = digits.length - 1; i >= 0; i--){
    if(digits[i] === 9) {
      digits[i] = 0;
    }else {
      digits[i]++;
      return digits;
    }
  }
  return digits.unshift(1);
}