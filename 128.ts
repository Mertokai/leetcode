// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  const sortedArr = Array.from(new Set(nums)).sort((a, b) => a - b);
  let longest = 0;
  let counter = 1;

  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i - 1] + 1) {
      counter++;
    } else {
      longest = Math.max(longest, counter);
      counter = 1;
    }
  }

  return Math.max(longest, counter);
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
