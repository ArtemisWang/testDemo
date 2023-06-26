var majorityElement = function (nums) {
  const hash = new Map();
  hash.set(nums[0], 1);
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    if (hash.has(nums[i])) {
      let tmp = hash.get(nums[i]);
      if (tmp + 1 > n / 2) return nums[i];
      hash.set(nums[i], tmp + 1);
    } else {
      hash.set(nums[i], 1);
    }
  }
  return nums[0];
};

