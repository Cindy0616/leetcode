/*Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.
*/
var maxArea = function(height) {
  let max =0;
  let i = 0;
  let j= height.length -1;
  while ( i < j) {
    let minHeight = height[i] < height[j] ? height[i++]: height[j--];
    //console.log(minHeight)
    //1 7 3 8 4 5 2 6  49
    let area = (j -i + 1) * minHeight;
    max = Math.max( max, area)
  }
  return max;
}


//height = [1,8,6,2,5,4,8,3,7]
//maxArea(height)