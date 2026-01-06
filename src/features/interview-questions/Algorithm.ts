// // ___________first character of the string should be in uppercase________

// const capatilize = (str) => {

//     return str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
// }

// console.log(capatilize('i am global'))

// // __________Merge_Sorted_Arrays__________________

// const mergeSortedArrays = (arr_1, arr_2) => {
//     // return [...arr_1, ...arr_2].sort((a, b) => a - b)

//     let i = 0, j = 0
//     let sortedArray = []

//     while (i < arr_1.length && j < arr_2.length) {
//         if (arr_1[i] < arr_2[j]) {
//             sortedArray.push(arr_1[i])
//             i++
//         } else {
//              sortedArray.push(arr_2[j])
//             j++
//         }
//     }

//     while (i < arr_1.length) {
//         sortedArray.push(arr_1[i])
//         i++
//     }

//     while (j < arr_2.length) {
//         sortedArray.push(arr_2[j])
//         j++
//     }

//     return sortedArray

// }

// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

// // ____________________Insertion_sort___________________

// const arr = [6, 2, 3, 5, 4, 1]

// const insertionSort = (arr) => {

//     for (let i = 1; i < arr.length; i++) {
//         let noToInsert = arr[i]
//         let j = i - 1

//         while (j >= 0 && arr[j] > noToInsert) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         }
//         arr[j + 1] = noToInsert
//     }

//     return arr

// }

// console.log(insertionSort(arr))

// // ____________Recursive_BinarySearch_____________

// const arr = [-5, 2, 4, 6, 10], t = 10

// const recursiveBinarySearch = (arr, target) => {
//     return search(arr, target, 0, arr.length - 1)
// }

// const search = (arr, target, leftIndex, rightIndex) => {
//     if (leftIndex > rightIndex) {
//         return -1
//     }

//     let midIndex = Math.floor((leftIndex + rightIndex) / 2)

//     if (target === arr[midIndex]) {
//         return midIndex
//     }

//     if (target < arr[midIndex]) {
//         return search(arr, target, leftIndex, midIndex - 1)
//     } else {
//         return search(arr, target, midIndex + 1, rightIndex)
//     }

// }

// console.log(recursiveBinarySearch(arr, t))

// //_____________Binary_search______________

// const arr = [-5, 2, 4, 6, 10], t = 2

// const binarySearch = (arr, t) => {

//     // binary search works only on sorted array
//     // if it is not in an order
//     const sorted = arr.sort((a, b) => a - b)

//     let leftIndex = 0
//     let rightIndex = arr.length - 1

//     while(leftIndex <= rightIndex) {
//       const middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//       if (t === arr[middleIndex]) {
//           return middleIndex
//       }

//       if (t < arr[middleIndex]) {
//           rightIndex = middleIndex - 1
//       } else {
//           leftIndex = middleIndex + 1
//       }
//     }

//     return -1

// }

// console.log(binarySearch(arr, t))

// // ____________Linear_Search_____________

// const arr = [-5, 2, 10, 4, 6], t = 12

// const linearSearch = (arr, t) => {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === t) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(linearSearch(arr, t))

// //__________________Factoial________________________-

// const n = 5

// const factorial = (n) => {
//     if (n === 0) {
//         return 1
//     }

//     return n * factorial(n - 1)
// }

// console.log(factorial(n))

// // FIND THE LEFT DIAGNOAL AND RIGHT DIAGNOAL

// const numbers = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];

//   // Initialize arrays for left and right diagonals
//   let leftDiagonal = [];
//   let rightDiagonal = [];

//   // Get the size of the 2D array (assuming square matrix)
//   const n = numbers.length;

//   // Step 1 & 2: Extract left and right diagonal values
//   for (let i = 0; i < n; i++) {
//     leftDiagonal.push(numbers[i][i]);          // Left diagonal values
//     rightDiagonal.push(numbers[i][n - 1 - i]); // Right diagonal values
//   }

//   // Step 3: Merge left and right diagonals into a single array
//   const mergedDiagonals = [...leftDiagonal, ...rightDiagonal];

//   // Step 4: Sum all values in the merged array
//   const sum = mergedDiagonals.reduce((total, num) => total + num, 0);

//   console.log("Left Diagonal:", leftDiagonal);
//   console.log("Right Diagonal:", rightDiagonal);
//   console.log("Merged Array:", mergedDiagonals);
//   console.log("Sum of all diagonal values:", sum);

// //_______________BINARY_SEARCH___________________

// const a = '1010'
// const b = '1101'

// const binarySearch = (a, b) => {

// 	let result = ''
// 	let carry = 0
// 	const maxLength = Math.max(a.length, b.length)

// 	a = a.padStart(maxLength, '0')
// 	b = b.padStart(maxLength, '0')

// 	for (let i = maxLength - 1; i >= 0; i--) {

// 		let sum = parseInt(a[i]) + parseInt(b[i]) + carry

// 		carry = Math.floor(sum / 2)

// 		result = (sum % 2) + result

// 		if (carry) {
// 			result = carry + result
// 		}
// 	}

// 	return result
// }

// console.log(binarySearch(a, b))

// //___________CUSTOM_DEEPCOPY_DEEPCLONE___FUNCTION___________

// const deepCopy = (item) => {

// 	if (item === null || typeof item !== 'object') {
// 		return item
// 	}

// 	if (Array.isArray(item)) {

// 		let arrayCopy = []

// 		for (let i = 0; i < item.length; i++) {
// 			arrayCopy[i] = deepCopy(item[i])
// 		}

// 		return arrayCopy
// 	}

// 	if (typeof item === 'object') {
// 		let objCopy = {}

// 		for (const key in item) {
// 			if (item.hasOwnProperty(key)) {
// 				objCopy[key] = deepCopy(item[key])
// 			}
// 		}

// 		return objCopy
// 	}

// }

// const obj = {
// 	name: 'ParkAvan',
// 	age: 27,
// 	address: {
// 		city: 'Perambalur',
// 		pin: 621212
// 	},
// 	hobbies: ['Badminton', 'Reading', 'Acting'],
// 	greet: () => {
// 		console.log('Captain Miller')
// 	}
// }

// const objCopy = deepCopy(obj)

// // console.log(objCopy)

// objCopy.address.city = 'Chennai'
// obj.hobbies.push('Dancing')

// console.log('obj =>', obj)
// console.log('objCopy =>', objCopy)

// //_________THROTTLE_FUNCTION___________

// const useThrottle = (cb, delay) => {

// 	let last = 0

// 	return (...args) => {
// 		let now = new Date().getTime()
// 		if (now - last < delay) return
// 		last = now
// 		cb(...args)
// 	}
// }

// const onResize = () => {
// 	console.log('Window Resizing: ', new Date().toLocaleTimeString())
// }

// const throttle = useThrottle(onResize, 2000)

// window.addEventListener('resize', throttle)

// //______DEBOUNCE_FUNCITON______________

// const useDebounce = (cb, delay) => {
// 	let timeOutId;

// 	return (...args) => {
// 		if (timeOutId) clearTimeout(timeOutId)

// 		timeOutId = setTimeout(() => {
// 			cb(args)
// 		}, delay)
// 	}
// }

// const search = (result) => {
// 	console.log("Searching For: ", result)
// }

// const debounce = useDebounce(search, 1000)

// console.log(debounce('Captain'))
// console.log(debounce('Captain Miller'))

// ___________fIBONACCI_NUMBER__________

// const fib = (n) => {
// 	// let arr = [0, 1]

// 	// for (let i = 2; i <= n; i++) {
// 	// 	arr.push(arr[i - 1] + arr[i - 2])
// 	// }

// 	// return arr[n]

// 	if (n <= 1) return n

// 	return fib(n - 1) + fib(n - 2)
// }

// console.log(fib(6))

// ______________FIND_THE_INTERSECTION_OF_TWO_ARRAY

// const arr_1 = [1, 2, 2, 1]
// const arr_2 = [2, 4, 2, 5]

// const findTheIntersectionOfTwoString = (arr_1, arr_2) => {

// 	const set_1 = new Set(arr_1)

// 	const result = arr_2.filter((item, index) => set_1.has(item))
// 	return [...new Set(result)]
// }

// console.log(findTheIntersectionOfTwoString(arr_1, arr_2))

// //___________BEST_TIME_BUY_AND_SELL________________

// const input = [2, 5, 6, 1, 8, 9, 4]

// const maxProfit = (prices) => {

//     let min = prices[0]
//     let profit = 0

//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] < min) {
//             min = prices[i]
//         }

//         profit = Math.max(profit, prices[i] - min)
//     }

//     return profit
// }

// console.log(maxProfit(input))

//___________ROTATE_AN_ARRAY_BY_K____________________

// METHOD_1

// const nums = [1, 2, 3, 4, 5, 6]
// const k = 2

// const rotateAnArrayByK = (nums, k) => {

//     const n = nums.length

//     k = k % n

//     const reverse = (start, end) => {
//         while (start < end) {
//             [nums[start], nums[end]] = [nums[end], nums[start]]
//             start++
//             end--
//         }
//     }

//     reverse(0, n - 1)
//     reverse(0, k - 1)
//     reverse(k, n - 1)

//     return nums

// }

// console.log(rotateAnArrayByK(nums, k))

// METHOD_2

// const array = [35, 35, 6, 2, 5, 2, 4, 7]

// const rotateAnArray = (arr, k) => {
//     const n = arr.length

//     k = k % n

//     // //METHOD_1

//     return [...arr.slice(-k),...arr.slice(0, n - k)]

//     // //METHOD_3
//     // const rotated = arr.splice(n - k, n)
//     // arr.unshift(...rotated)
//     // return arr
// }

// console.log(rotateAnArray(array, 3))

// // _____________Find_THE_SECOND_LARGEST_NUMBER_IN_THE_ARRAY_________

// const array = [10, 34, 34, 10, 22, 4,3]

// const findTheSecondLargestNumber = (arr) => {
//     // const unique = [...new Set(arr)].sort((a, b) => b - a)
//     // return unique.length >= 2 ? unique[1] : -1

//     let first = -Infinity  // 10 => 34
//     let second = -Infinity // -1 => 22

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > first) {
//             second = first
//             first = arr[i]
//         } else if (arr[i] > second && arr[i] < first) {
//             second = arr[i]
//         }
//     }

//     return second
// }

// console.log(findTheSecondLargestNumber(array))

// //____________TWO_SUM________________________________________

// let nums = [2,7,11,15], target = 9

// const twoSum = (nums, target) => {
//     // const hashMap = {}
//     const hashMap = new Map()

//     for (let i = 0; i < nums.length; i++) {
//         const comp = target - nums[i]

//       if (hashMap.has(comp)) {
//           return [hashMap.get(comp), i]
//       }

//       hashMap.set(nums[i], i)
//     }
// }

// console.log(twoSum(nums, target))

// // // _________________MERGE_THE_BOTH_STRINGS_ALTERNATIVELY

// const str_1 = 'suriya'
// const str_2 = 'park'

// const mergeAlternatively = (str_1, str_2) => {

//     let mergedStr = ''

//     let maxLength = Math.max(str_1.length, str_2.length)

//     for (let i = 0; i < maxLength; i++) {

//         if (i < str_1.length) mergedStr += str_1[i]

//         if (i < str_2.length) mergedStr += str_2[i]
//     }

//     return mergedStr

// }

// console.log(mergeAlternatively(str_1, str_2))

// // ______INT_TO_ROMAN_______________________________________

// const intIntoRoman = (num) => {
//     const romanMap = [
//         { value: 1000, symbol: 'M' },
//         { value: 900, symbol: 'CM'},
//         { value: 500, symbol: 'D' },
//         { value: 400, symbol: 'CD' },
//         { value: 100, symbol: 'C' },
//         { value: 90, symbol: 'XC' },
//         { value: 50, symbol: 'L' },
//         { value: 40, symbol: 'XL' },
//         { value: 10, symbol: 'X' },
//         { value: 9, symbol: 'IX' },
//         { value: 5, symbol: 'V' },
//         { value: 4, symbol: 'IV' },
//         { value: 1, symbol: 'I' }
//     ];

//     let roman = ''

//     for (let i = 0; i < romanMap.length; i++) {
//         const { value, symbol } = romanMap[i]

//         while (num >= value) {
//             roman += symbol
//             num -= value
//         }
//     }

//     return roman
// }

// console.log(intIntoRoman(6))

// // ______________FLATERN_THE_ARRAY__________________________

// const array = [1, 3, 2, [5, 6, [6, 9, [45], 7], 2], 4, 6, 7, [6, [7, 8 ],7, 8], 8]

// const flaternTheArray = (arr) => {
//     let flatArray = []

//     arr.forEach((item, index) => {
//         if (Array.isArray(item)) {
//             flatArray = flatArray.concat(flaternTheArray(item))
//         } else {
//             flatArray.push(item)
//         }
//     })

//     return flatArray
// }

// console.log(flaternTheArray(array))

// // ________________FIND THE MISSING NUMBER_______________
// const array = [1, 2, 3, 5, 6]

// // METHOD_1
// const findTheMissingNumber = (arr) => {
//     let n = arr.length + 1

//     // Total sum fo the lenth + 1
//     const totalSum = n * (n + 1) / 2

//     // toalSum of the array actual lenth
//     const arraySum = arr.reduce((acc, curr) => acc + curr, 0)

//     return n
// }

// // //  METHOD_2
// // const findTheMissingNumber = arr => {
// //     let n = arr.length + 1

// //     const numberSet = new Set(arr)

// //     for (let i = 1; i <= n; i++) {
// //         if (!numberSet.has(i)) {
// //             return i
// //         }
// //     }
// // }

// console.log(findTheMissingNumber(array))

// //___________FIND THE BOTH STRINGS ARE ANAGRAMS___________

// const string_1 = "listen";
// const string_2 = "silent";

// const areAnagrams = (str_1, str_2) => {
//   str_1 = str_1.replace(/\s+/g, "").toLowerCase();
//   str_2 = str_2.replace(/\s+/g, "").toLowerCase();

//   // check the wheather the string length are equal
//   if (str_1.length !== str_2.length) {
//     return false;
//   }

//   // // create a frequency pattern to store the alphabats counts
//   const frequency_1 = {};
//   const frequency_2 = {};

//   for (const char of str_1) {
//     frequency_1[char] = (frequency_1[char] || 0) + 1;
//   }

//   for (const char of str_2) {
//     frequency_2[char] = (frequency_2[char] || 0) + 1;
//   }

//   // check whether both frequency counts are equal
//   for (const char in frequency_1) {
//     if (frequency_1[char] !== frequency_2[char]) {
//       return false;
//     }
//   }

// // METHOD 2 USINg new Map()
// const frequency_1 = new Map()
// const frequency_2 = new Map()

// for (const char of str_1) {
//     frequency_1.set(char, (frequency_1.get(char) || 0) + 1)
// }

// for (const char of str_2) {
//     frequency_2.set(char, (frequency_2.get(char) || 0) + 1)
// }

// for (const char of frequency_1.keys()) {
//     if (frequency_1.get(char) !== frequency_2.get(char)) return false
// }

//   return true;
// };

// console.log(areAnagrams(string_1, string_2));

// _____________FIND THE FIRST NON_REPEATING CHARACTER_____
// const string = 'swiss'

// const nonRepeatingCharacter = (str) => {
//     const frequencyMap = new Map()

//     for (const char of str) {
//         frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
//     }

//     for (const char of str) {
//       if (frequencyMap.get(char) === 1) return char
//     }

//     return null

//     // for (let i = 0; i < str.length; i++) {
//     //     if (frequencyMap[str[i]]) {
//     //         frequencyMap[str[i]]++
//     //     } else {
//     //         frequencyMap[str[i]] = 1
//     //     }
//     // }

//     // for (let i = 0; i < str.length; i++) {
//     //     if (frequencyMap[str[i]] === 1) {
//     //         return str[i]
//     //     }
//     // }

//     // return null
// }

// console.log(nonRepeatingCharacter(string))

// // ____________CHECK THE STRING CONTAINS BALANCE PARENTHESE____
// const string = '(())((()))(())(())'

// const balancedParenthese = (str) => {

//     const stack = []

//     for (let char of str) {
//         if (char === '(') {
//             stack.push(char)
//         } else if (char === ')') {
//             if (stack.length === 0)  {
//                 return false
//             }

//             stack.pop()
//         }
//     }

//     return stack.length === 0
// }

// console.log(balancedParenthese(string))

// ________________REMOVE_DUPLICATES____________________

// const array = [1, 2, 3, 4, 3, 2, 1, 5, 4]

// const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 7, 5, 8, 8, 9];

// const removeDuplicates = (arr) => {

//     let uniqueArr = []
//     let seen ={}

//     for (let i = 0; i < arr.length; i++) {
//         if (!seen[arr[i]]) {
//             uniqueArr.push(arr[i])
//             seen[arr[i]] = true
//         }
//     }

//     return uniqueArr
// }

// console.log(removeDuplicates(numbers))

// const eliminateDuplicate = (arr) => {
//     // return [...new Set(arr)] // FIRST METHOD

//     // return arr.filter((item, index, arr) => arr.indexOf(item) === index) //SECOND METHOD

// //   return arr.reduce((acc, item) => {
// //       if (!acc.includes(item)) {
// //           acc.push(item)
// //       }
// //       return acc
// //   }, [])  // THIRD METHOD

// //   return arr.reduce((acc, item) => acc.includes(item) ? acc : [...acc, item], []) // THIRD METHOD

// }

// console.log(eliminateDuplicate(array))

// _______________FIND_THE_LONGEST_WORD__________________
// const string = 'Find the longest word in this string'

// const longestWord = (sentence) => {
//     const words = sentence.split(' ')

//     let longest = ''

//     for (const word of words) {
//         if (word.length > longest.length) {
//             longest = word
//         }
//     }
//     // console.log(words)
//     return longest
// }

// console.log(longestWord(string))

// _______________PALAINDROME_WITH_STRING_______________

// const string = 'Malayalam'

// const isPalindrome = (str) => {

//     // const reversed = str.split('').reverse().join('').toLowerCase()
//     // return str.toLowerCase() === reversed

//     const reversedString = (rev) => {
//         let reversed = ''

//         for (let i = rev.length - 1; i >= 0; i--) {
//             reversed += rev[i]
//         }

//         return reversed
//     }

//     const lowerCase = str.toLowerCase()

//     return lowerCase === reversedString(lowerCase)

// }

// console.log(isPalindrome(string))

// ______________REVERSE_STRING________________________
// const string = 'Captain Miller'

// const reverseString = (str) => {
//     let reversed = ''

//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]
//     }

//     return reversed
// }

// console.log(reverseString(string))

// _____________CHECKNOOFSTRING________________________

// const string = 'parkavan'

// const checkNoOfString = (str) => {

//     const obj = {}
//     // const hashMap = new Map()

//     for (let i = 0; i < str.length; i++) {
//         if (obj.hasOwnProperty(str[i])) {
//             obj[str[i]]++
//         } else {
//             obj[str[i]] = 1
//         }

//         // if (hashMap.has(str[i])) {
//         //     hashMap.set(str[i], hashMap.get(str[i]) + 1)
//         // } else {
//         //     hashMap.set(str[i], 1)
//         // }
//     }

//     return obj
//     // return hashMap
// }

// console.log(checkNoOfString(string))

// _________________Palindrome__________________

// const pali = 12321

// const isPalindrome = (pali) => {

//     if (pali < 0) {
//         return false
//     }

//     let num = pali
//     let rem = 0

//     while (num > 0) {
//         rem = (rem * 10) + num % 10
//         num = Math.floor(num / 10)
//     }

//     return rem === pali

// }

// console.log(isPalindrome(pali))

//______________________SORT METHOD_______________________

// const array = [9, 8, 7, 4, 2, 1, 0, -1,-2]

// const mergeSort = (arr) => {

//     if (arr.length < 2) {
//         return arr
//     }

//     const mid = Math.floor(arr.length / 2)
//     console.log(mid)
//     const leftArray = arr.slice(0, mid)
//     const rightArray = arr.slice(mid)

//     return merge(mergeSort(leftArray), mergeSort(rightArray))
// }

// const merge = (left, right) => {
//     const sortedArray = []

//     while(left.length && right.length) {
//         if (left[0] <= right[0]) {
//             sortedArray.push(left.shift())
//         } else {
//             sortedArray.push(right.shift())
//         }
//     }

//     return [...sortedArray, ...left, ...right]
// }

// console.log(mergeSort(array))

// const quickSort = (arr) => {

//     if (arr.length < 2) {
//         return arr
//     }

//     const pivot = arr[arr.length - 1]

//     let leftArray = []
//     let rightArray = []

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             leftArray.push(arr[i])
//         } else {
//             rightArray.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
// }

// console.log(quickSort(array))

// const bubbleSort = (arr) => {
//     let swapped;
//     for (let i = 0; i < arr.length - 1; i++) {
//         swapped = false; // Track if any swap happens in this pass
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
//                 swapped = true;
//             }
//         }
//         if (!swapped) break; // Stop if no swaps were made
//     }
//     return arr;
// };

// const array = [5, 2, 9, 1, 5, 6];
// console.log(bubbleSort(array));
// // Output: [1, 2, 5, 5, 6, 9]
