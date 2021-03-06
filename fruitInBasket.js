/* In a row of trees, the i-th tree produces fruit with type tree[i].

You start at any tree of your choice, then repeatedly perform the following steps:

Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

What is the total amount of fruit you can collect with this procedure?



Example 1:

Input: [1,2,1]
Output: 3
Explanation: We can collect [1,2,1].
Example 2:

Input: [0,1,2,2]
Output: 3
Explanation: We can collect [1,2,2].
If we started at the first tree, we would only collect [0, 1].
Example 3:

Input: [1,2,3,2,2]
Output: 4
Explanation: We can collect [2,3,2,2].
If we started at the first tree, we would only collect [1, 2].
Example 4:

Input: [3,3,3,1,2,1,1,2,3,3,4]
Output: 5
Explanation: We can collect [1,2,1,1,2].
If we started at the first tree or the eighth tree, we would only collect 4 fruits.


Note:

1 <= tree.length <= 40000
0 <= tree[i] < tree.length */
var totalFruit = function(tree) {
  let res = 0
  if (!tree || !tree.length) return res
  let map = new Map()
  for (let i = 0, j = 0; j < tree.length; j++) {
      map.set(tree[j], (map.get(tree[j]) || 0) + 1)
      while (map.size > 2) {
          map.set(tree[i], map.get(tree[i]) - 1)
          if (map.get(tree[i]) === 0) map.delete(tree[i])
          i++
      }
      res = Math.max(res, j - i + 1)
  }
  return res
};

var totalFruit = function(array) {
  var isSeens = {};
  var isSeenCount = 0;
  var maxCount = 0;
  var left=0, right=0;
  while(right<array.length) {
    var char = array[right];
    if(isSeens[char] !== undefined) {
      isSeens[char]++;
    } else {
      isSeens[char] = 1;
      isSeenCount++;
      while(isSeenCount > 2) {
        var lChar = array[left];
        isSeens[lChar]--;
        left++;
        if(isSeens[lChar]===0) {
          delete isSeens[lChar];
          isSeenCount--;
        }
      }
    }
    maxCount = Math.max(maxCount, right-left+1);
    right++;
  }
  return maxCount;
};

var totalFruit = function(tree) {
  let blockLefts = [];
  for (let i = 0; i < tree.length; ++i)
      if (i === 0 || tree[i-1] !== tree[i])
          blockLefts.push(i);

  blockLefts.push(tree.length);
  let ans = 0, i = 0;
  search: while (true) {
      let types = new Set();
      let weight = 0;

      for (let j = i; j < blockLefts.length - 1; ++j) {
          types.add(tree[blockLefts[j]]);
          weight += blockLefts[j+1] - blockLefts[j];
          if (types.size >= 3) {
              i = j - 1;
              continue search;
          }

          ans = Math.max(ans, weight);
      }
      break;
  }
  return ans;
}