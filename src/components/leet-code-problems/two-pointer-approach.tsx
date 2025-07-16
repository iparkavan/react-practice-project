let arr = [1, 2, 4, 6, 10],
  x = 8;

const hasPairWithSum = (arr: number[], target: number) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) return true;
    else if (sum < target) left++;
    else right--;
  }

  return false;
};

console.log(hasPairWithSum(arr, x));

const string = "hello";

const reverseString = (str: string) => {
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // [arr[left], arr[right]] = [arr[right], arr[left]]
    let temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
    left++;
    right--;
  }

  return arr.join("");
};

console.log(reverseString(string));
