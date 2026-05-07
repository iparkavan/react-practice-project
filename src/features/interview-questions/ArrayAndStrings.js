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
  // let map = new Map();
  // let left = 0;
  // let maxLength = 0;

  // for (let right = 0; right < str.length; right++) {
  //   if (map.has(str[right])) {
  //     left = Math.max(left, map.get(str[right]) + 1);
  //   }

  //   map.set(str[right], right);
  //   maxLength = Math.max(maxLength, right - left + 1);
  // }

  // return maxLength;

  const set = new Set();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
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

// • [9] Merge two sorted arrays without extra space — Medium

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];

const mergeWithoutExtraSpace = (arr1, arr2) => {
  let n = arr1.length;
  let m = arr2.length;

  const nextGap = (gap) => {
    if (gap <= 1) return 0;
    return Math.ceil(gap / 2);
  };

  let gap = nextGap(n + m);

  while (gap > 0) {
    let i = 0;
    let j = gap;

    while (j < n + m) {
      // Case 1: both pointers in arr1
      if (i < n && j < n) {
        if (arr1[i] > arr1[j]) {
          [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
        }
      }

      // Case 2: i in arr1, j in arr2
      else if (i < n && j >= n) {
        if (arr1[i] > arr2[j - n]) {
          [arr1[i], arr2[j - n]] = [arr2[j - n], arr1[i]];
        }
      }

      // Case 3: both in arr2
      else {
        if (arr2[i - n] > arr2[j - n]) {
          [arr2[i - n], arr2[j - n]] = [arr2[j - n], arr2[i - n]];
        }
      }

      i++;
      j++;
    }

    gap = nextGap(gap);
  }
};

mergeWithoutExtraSpace(arr1, arr2);

console.log(arr1, arr2);

// • [10] 3Sum

const array = [-1, 0, 1, 2, -1, -4];

const threeSum = (arr) => {
  const set = new Set();
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        set.add([arr[i], arr[left], arr[right]].toString());
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return [...set].map((item) => item.split(",").map(Number));
};

console.log(threeSum(array));

// ----

function threeSum(nums) {
  nums.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// • [11] Container With Most Water

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const maxWater = (height) => {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const width = right - left;
    const area = h * width;

    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

console.log(maxWater(height));

// • [12] Trapping Rain Water

let height = [4, 2, 0, 3, 2, 5];

const trappingWater = (height) => {
  let left = 0;
  let right = height.length - 1;

  let maxLeft = 0;
  let maxRight = 0;

  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        water = water + maxLeft - height[left];
      }

      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        water = water + maxRight - height[right];
      }

      right++;
    }
  }

  return water;
};

console.log(trappingWater(height));

// • [13] Group Anagrams

let str = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = (str) => {
  const map = new Map();

  for (let char of str) {
    const key = char.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(char);
  }

  return Array.from(map.values());
};

console.log(groupAnagrams(str));

// • [14] • Subarray Sum Equals K

let nums = [1, 2, 1, 2, 1],
  k = 3;

function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;

  const map = new Map();
  map.set(0, 1);

  for (let num of nums) {
    sum += num;

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

console.log(subarraySum(nums, k));

// • [15] • Maximum Sum Subarray of Size K

let nums = [10, 2, 3, 1];
let k = 2;

const MaxSubArraySizeK = (nums, k) => {
  let minWindow = 0;

  for (let i = 0; i < k; i++) {
    minWindow += nums[i];
  }

  let maxSum = minWindow;

  for (let i = k; i < nums.length; i++) {
    minWindow += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, minWindow);
  }

  return maxSum;
};

console.log(MaxSubArraySizeK(nums, k));

// • [16] • Product of Array Except Self

let nums = [1, 2, 3, 4];

const productExceptItself = (nums) => {
  let result = new Array(nums.length).fill(1);

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;

  // let result = []

  // for (let i = 0; i < nums.length; i++) {

  //     let count = 1

  //     for (let j = 0; j < nums.length; j++) {

  //         if (nums[j] !== nums[i]) {
  //             count *= nums[j]
  //         }
  //     }
  //     result.push(count)
  // }

  // return result
};

console.log(productExceptItself(nums));
