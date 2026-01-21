// Hashing & Maps

// • [1] Two Sum problem — Easy

let nums = [2, 7, 11, 15],
  target = 9;

const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];

    if (map.has(comp)) {
      return [map.get(comp), i];
    }

    map.set(nums[i], i);
  }

  return null;
};

console.log(twoSum(nums, target));

// • [2] Group anagrams — Medium --------------------------------------------

let input = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = (str) => {
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    const key = str[i].split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str[i]);
  }

  return Array.from(map.values());
};

console.log(groupAnagrams(input));

// • [3] Find duplicates in an array — Easy ------------------------------------------

let numbers = [1, 2, 3, 1, 3, 6];

const findDuplicates = (nums) => {
  const map = new Map();
  const duplicates = [];

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [key, value] of map) {
    if (value > 1) {
      duplicates.push(key);
    }
  }

  return duplicates.sort((a, b) => a - b);
};

console.log(findDuplicates(numbers));
