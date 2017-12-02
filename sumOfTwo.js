/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = nums.reduce((map, val, index) => map.set(target - val, index), new Map())

  for(let i = 0; i < nums.length; i++) {
    const val = nums[i]

    if (map.has(val) && map.get(val) !== i) {
      return [i, map.get(val)]
    }
  }

  return []
};

