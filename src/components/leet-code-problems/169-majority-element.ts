let nums169 = [2, 2, 1, 1, 1, 2, 2];

const majorityElements = (nums: number[]): number => {
  let count = 0;
  let majority = 0;

  for (const num of nums) {
    if (count === 0) {
      majority = num;
    }

    count += num === majority ? 1 : -1;
  }

  return majority;
};

console.log(majorityElements(nums169));
