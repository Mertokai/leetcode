// Input: nums = [1, 2, 3, 4];
// Output: [24, 12, 8, 6];

function productExceptSelf(nums: number[]): any {
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let pushed = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j == i) {
        continue;
      } else {
        pushed *= nums[j];
      }
    }
    result.push(pushed);
  }
  return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
