// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

function topKFrequent(nums: number[], k: number): any {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let counter = 0;
    let number = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (number === nums[j]) {
        counter++;
      }
    }
    map.set(number, counter);
  }
  let bebek = Array.from(map.values())
    .sort((a, b) => b - a)
    .slice(0, k);
  return Array.from(map.keys()).filter((key) => bebek.includes(map.get(key)!));
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
