// // (1) findTheSubArray

let numsArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const findTheSubArray = (nums) => {
  let curSum = nums[0];
  let maxSoFar = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]);
    maxSoFar = Math.max(maxSoFar, curSum);
  }

  return maxSoFar;
};

console.log(findTheSubArray(numsArray));

// // (2) FizzBuzz

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    // console.log(i)
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(15);

// (3) ROTATE AN ARRAY K TIMES

const nums = [1, 2, 3, 4, 5];
const k = 2;

// const rotateAnArray = (nums, k) => {
//     let n = nums.length
//     k = k % n
//     return nums.slice(-k).concat(nums.slice(0, n - k))
// }

const rotateAnArray = (nums, k) => {
  let n = nums.length;
  k = k % n;

  const reverse = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);

  return nums;
};

console.log(rotateAnArray(nums, k));

// (4) FIRST NON REPEATING CHARACTER IN A STRING

let str = "Leetcode";

const findTheFirstNonRepeatingChar = (str) => {
  const count = new Map();

  for (let i = 0; i < str.length; i++) {
    count.set(str[i], (count.get(str[i]) || 0) + 1);
  }

  for (let i = 0; i < str.length; i++) {
    if (count.get(str[i]) === 1) {
      return str[i];
    }
  }

  return null;
};

console.log(findTheFirstNonRepeatingChar(str));
