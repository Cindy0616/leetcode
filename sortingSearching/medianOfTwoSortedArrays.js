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
//another way
//since these two arrays are sorted, so only need to go through half way of each array.
/*
var findMedianSortedArrays = function( nums1 , nums2){
  let allLength = nums1.length + nums2.length;
  let middle = Math.floor(allLength/2);
  let even = allLength %2 === 0;
  let i = 0;
  let j = 0;
  last, previous;
  while( i + j < middle + 1){
    if (typeof last != 'undefined') {
      previous = last;
    }
    if ( nums1[i] < nums2[j] || j === nums2.length) {
      lst = nums1[i];
      i++;
    }else {
      last = nums2[j];
      j++;
    }
  }
  return even ? (previous + last)/2 : last;
}
*/
var findMedianSortedArrays = function( nums1 , nums2) {
  let allLength = nums1.length + nums2.length;
  let i = 0; let j = 0;
  let current, last;
  while ( i + j <= allLenght/2) {
    if ( current) {
      last = current;
    }
    let first = nums1[i];
    let second = nums2[j];
    if(first === undefined){
      current = second;
      j++;
    }else if( second === undefined ){
      current = first;
      i++;
    }else if(first < second) {
      current = first;
      i++;
    }else {
      current = second;
      j++;
    }
  }
  if(current === 0 || last == 0){ return 0 }
  return allLength %2 === 0 ? (last + current)/1 : current;
}
