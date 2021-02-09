/* gicen a string "s", return longest palindromic substring in s
input: s = " babad"
output: " bab"
note: "aba"is also a valid answer
constraints:
1 <= s.length <= 1000;
s consist fo only digits and english letters( lower case and /or upper-case)*/

var longestPalindrome = function(s){
  var max = "";
  for ( var i = 0; i < s.length ; i ++){
    for ( var j = 0; j < 2; j++){
      let left = i;
      let right = i + j;
      while ( s[left] && s[left] === s[right]){
        left--;
        right++;
      }
      if( (right - left -1) > max.length ){
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
}