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

// • [4] Longest consecutive sequence — Medium

let sequence = [100, 4, 200, 1, 3, 2];

const findLongestConsecutive = (nums) => {
  if (nums.length === 0) return 0;

  const set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
};

console.log(findLongestConsecutive(sequence));

const findTheLongestConsecutiveSecquence = (nums) => {
  if (nums.length === 0) return 0;

  const set = new Set(nums);
  let longest = 0;
  let longestSequence = [];

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let current = nums[i];
      let length = 1;
      let sequence = [current];

      while (set.has(current + 1)) {
        current++;
        length++;
        sequence.push(current);
      }

      longest = Math.max(longest, length);
      longestSequence = sequence;
    }
  }

  return longestSequence;
};

console.log(findTheLongestConsecutiveSecquence(sequence));

// • [5] Check if two strings are isomorphic — Easy

let s = "egg";
let t = "add";

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;

  const mapS = new Map();
  const mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (mapS.has(charS) && mapS.get(charS) !== charT) return false;

    if (mapT.has(charT) && mapT.get(charT) !== charS) return false;

    mapS.set(charS, charT);
    mapT.set(charT, charS);
  }

  return true;
};

console.log(isIsomorphic(s, t));

// let s = "paper";
// let t = "title";

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const mapS = new Map();
  const mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    if (mapS.has(s[i]) && mapS.get(s[i]) !== t[i]) return false;
    if (mapT.has(t[i]) && mapT.get(t[i]) !== s[i]) return false;

    mapS.set(s[i], t[i]);
    mapT.set(t[i], s[i]);
  }

  return true;
}

console.log(isIsomorphic(s, t));
