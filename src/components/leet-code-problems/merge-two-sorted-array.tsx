let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
// let nums1 = [1], m = 1, nums2 = [], n = 0
// let nums1 = [0], m = 0, nums2 = [1], n = 1

const mergeSortedArray = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) => {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }

  return nums1;
};

console.log(mergeSortedArray(nums1, m, nums2, n));
