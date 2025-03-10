// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     prepend(value) {
//         let node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }

//         this.size++
//     }

//     append(value) {
//         let node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             this.tail = node
//         }

//         this.size++
//     }

//     removeFromStart() {
//         if (this.isEmpty()) {
//             return null
//         }

//         const value = this.head.value
//         this.head = this.head.next
//         this.size--
//         return value
//     }

//     removeFromEnd() {
//         if (this.isEmpty()) {
//             return null
//         }
//         const value = this.tail.value

//         if (this.size === 1) {
//             this.head = null
//             this.tail = null
//         } else {
//             let prev = this.head
//             while (prev.next !== this.tail) {
//                 prev = prev.next
//             }

//             prev.next = null
//             this.tail = prev
//         }
//         this.size--
//         return value
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log("It is empty")
//         } else {
//             let current = this.head
//             let result = []

//             while (current) {
//                 result.push(current.value)
//                 current = current.next
//             }

//             console.log(result)
//         }
//     }
// }

// const list = new LinkedList()
// console.log('Is list is empty? => ', list.isEmpty())
// console.log('List size? => ', list.getSize())

// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.prepend(50)
// list.prepend(60)
// list.print()

// console.log(list.removeFromEnd())
// console.log(list.removeFromStart())

// list.print()
