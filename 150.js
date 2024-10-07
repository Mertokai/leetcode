// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */

  encode(strs) {
    let result = "";
    for (let s of strs) {
      result += `${s.length}#${s}`;
    }
    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let result = [];
    let i = 0;
    while (i < str.length) {
      if (str[i] === "#") {
        let num = parseInt(str.slice(0, i));
        result.push(str.slice(i + 1, i + 1 + num));
        i++;
      } else {
        i++;
      }
    }
    return result;
  }
}

console.log(new Solution().encode(["neet", "code", "love", "you"]));
console.log(new Solution().decode("4#neet4#code4#love3#you"));
