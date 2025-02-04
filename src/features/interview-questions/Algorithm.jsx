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
