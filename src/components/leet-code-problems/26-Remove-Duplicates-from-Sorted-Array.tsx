let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicates = (nums: number[]): number => {
  if (nums.length === 0) return 0;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeDuplicates(nums));
