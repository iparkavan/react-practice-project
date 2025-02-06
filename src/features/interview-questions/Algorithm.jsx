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
