// METHOD 1

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

// METHOD 2
// Using a hash map to count occurrences

const majorityElementsMethod2 = (nums: number[]): number => {
  const countMap = new Map();
  const majorityCount = Math.floor(nums.length / 2);

  for (const num of nums) {
    const count = (countMap.get(num) || 0) + 1;
    countMap.set(num, count);

    if (count > majorityCount) {
      return num;
    }
  }

  return majorityCount;
};

console.log(majorityElements(nums169));
