/*Given a string s, find the length of the longest substring without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.*/

var lengthOfLongestSubstring = function(s) {
  //keep track of the most recent index of each letter.
  const seen = new Map();
  //keep track of the starting index of the current substring.
  let start = 0;
  //keep track the maximum substring length.
  let maxlen = 0;
  for ( var i = 0; i < s.length; i++){
    //if the current char was seen, move the start to (1+ the least index of this char)
    //max prevent moving backward, start can only move forward
    if(seen.has(s[i])){
      start = Math.max(seen.get(s[i])+1, start)
    }
    seen.set(s[i], i);
    maxlen = Math.max(i - start + 1, maxlen)
  }
  return maxlen;
}
