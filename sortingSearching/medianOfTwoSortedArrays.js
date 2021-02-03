/* given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
follow up: the overall run time complexity should be 0(log(m+n))
example:
input: nums1 = [1, 3], nums2 = [2]
output: 2.00000
merged array = [1,2,3]median is 2
*/
var findMedianSortedArrays = function(nums1, nums2){
//combine this two arrays
//sort this combined arrays
//if length odd, 1/2length index is the median
//if length even, mean of 1/2 length index and 1/2 + 1 index
// this is another time complexity: o(nlogN) this question wants O(m+n)
/* i want to be able to solve this question first, then following the time complexity request.
*/
//combine using concat
let newArr = nums1.concat(nums2);
return median(newArr);
};
function median (arr){
  arr.sort((a,b) => a - b);
  let half = Math.floor(arr.length/2);
  if(arr.length%2){
    return arr[half];
  }
  else{
    return (arr[half-1] + arr[half])/2.0;
  }

}