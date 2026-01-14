// ---------------------- [1] findTheSubArray ----------------------

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

// ---------------------- [2] FizzBuzz ----------------------

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

// ------------------------- [3] ROTATE AN ARRAY K TIMES -------------------------

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

// ----------------- [4] FIRST NON REPEATING CHARACTER IN A STRING -----------------

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

// --------------------- [5] MERGE SORTED ARRAY ---------------------

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3;
let nums2 = [2, 5, 6],
  n = 3;

const mergeSortedArray = (nums1, nums2, m, n) => {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
  return nums1;
};

console.log(mergeSortedArray(nums1, nums2, m, n));

// ------------------- [6] Find all pairs with a given sum — Easy ----------------------

let arr = [1, 5, 7, -1, 5, 2, 4];
let sum = 6;

const findPairs = (arr, target) => {
  const seen = new Set();
  const pairs = new Set();
  const result = [];

  for (let num of arr) {
    const comp = target - num;

    if (seen.has(comp)) {
      const pair = [num, comp].sort((a, b) => b - a);
      const key = pair.join(",");

      if (!pairs.has(key)) {
        pairs.add(key);
        result.push(key);
      }
    }

    seen.add(num);
  }

  return result;
};

console.log(findPairs(arr, sum));

// • [7] Longest substring without repeating characters — Medium

let string = "abcabcbb";

const lengthOfLongestSubString = (str) => {
  let map = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    if (map.has(str[right])) {
      left = Math.max(left, map.get(str[right]) + 1);
    }

    map.set(str[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubString(string));

// • [8] Move all zeros to the end of the array — Easy

let number = [0, 1, 3, 0, 12];

const moveZerosTowardsLeft = (nums) => {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // const temp = nums[i]
      // nums[i] = nums[pos]
      // nums[pos] = temp
      // pos++
      [nums[i], nums[pos]] = [nums[pos], nums[i]];
      pos++;
    }
  }
  return nums;
};

console.log(moveZerosTowardsLeft(number));
