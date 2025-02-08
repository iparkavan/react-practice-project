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

  return true;
};

console.log(areAnagrams(string_1, string_2));

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
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//         //   let temp
//           if (arr[j] > arr[j + 1]) {
//               [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             //   temp = arr[j]
//             //   arr[j] = arr[j + 1]
//             //   arr[j + 1] = temp
//           }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort(array))
