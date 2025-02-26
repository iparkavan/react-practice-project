// // // _______________Linked List___________________

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     prepend(value) {
//         const node = new Node(value)

//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }

//         this.size++
//     }

//     append(value) {
//         const node = new Node(value)

//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head

//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }

//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) return

//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head

//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }

//     }

//     removedFrom(index) {
//         if (index < 0 || index >= this.size) {
//             return null
//         }

//         let removed
//         if (index === 0) {
//             removed = this.head
//             this.head = this.head.next
//         } else {
//             let current = this.head

//             for (let i = 0; i < index - 1; i++) {
//                 current = current.next
//             }
//             removed = current.next
//             current.next = current.next.next // Or we can use remove.next
//         }

//         this.size--
//         return removed.value
//     }

//     removedValue(value) {
//         if (this.isEmpty()) {
//             return null
//         }

//         if (this.head.value === value) {
//             this.head = this.head.next
//             this.size--
//             return value
//         } else {
//             let prev = this.head

//             while (prev.next && prev.next.value !== value) {
//                 prev = prev.next
//             }
//             if (prev.next) {
//                 const removed = prev.next
//                 prev.next = prev.next.next
//                 this.size--
//                 return value
//             }
//             return null
//         }
//     }

//     search(value) {
//         if (this.isEmpty()) {
//             return -1
//         }

//         let i = 0
//         let current = this.head

//         while (current) {
//             if (current.value === value) {
//                 return i
//             }
//             current = current.next
//             i++
//         }
//         return -1
//     }

//     reverse() {
//         let prev = null
//         let current = this.head

//         while (current) {
//             let node = current.next
//             current.next = prev
//             prev = current
//             current = node
//         }

//         this.head = prev
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
// list.insert(25, 0)
// list.insert(20, 0)
// list.print()

// console.log("removedFrom", list.removedFrom(2))
// console.log("removed Value", list.removedValue(30))
// console.log("removed Value", list.removedValue(70))

// list.print()

// console.log('Search Value', list.search(22))
// console.log('Search Value', list.search(40))
// list.reverse()
// list.print()

// //______________________LINKED LIST HEAD WITH TAIL_____________________________

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

// // //___________QUEUE_CLASS__________________________

// class Queue {
// 	constructor() {
// 		this.items = {}
// 		this.front = 0
// 		this.rear = 0
// 	}

// 	enQueue(element) {
// 		this.items[this.rear] = element
// 		this.rear++
// 	}

// 	deQueue(element) {
// 		const item = this.items[this.front]
// 		delete this.items[this.front]
// 		this.front++
// 		return item
// 	}

// 	isEmpty() {
// 		return this.rear - this.front === 0
// 	}

// 	peek() {
// 		return this.items[this.front]
// 	}

// 	size() {
// 		return this.rear - this.front
// 	}

// 	print() {
// 		console.log(this.items)
// 	}
// }

// const queue = new Queue()
// console.log(queue.isEmpty())

// queue.enQueue(10)
// queue.enQueue(20)
// queue.enQueue(30)

// console.log(queue.size())
// queue.print()

// console.log('Peek : ', queue.peek())

// console.log('deQueue => ', queue.deQueue())

// console.log('Peek : ', queue.peek())

// //___________________________________________________________________________

// // ___________________CIRCULAR_QUEUE_______________________

// class CircularQueue {
//     constructor(capacity) {
//         this.items = new Array(capacity)
//         this.capacity = capacity
//         this.currentLength = 0
//         this.front = -1
//         this.rear = -1
//     }

//     isFull() {
//         return this.currentLength === this.capacity
//     }

//     isEmpty() {
//         return this.currentLength === 0
//     }

//     enQueue(element) {
//         if (!this.isFull()) {
//             this.rear = (this.rear + 1) % this.capacity
//             this.items[this.rear] = element
//             this.currentLength++
//             if (this.front === -1) {
//                 this.front = this.rear
//             }
//         }
//     }

//     deQueue()  {
//         if (this.isEmpty()) return

//         const item = this.items[this.front]
//         this.items[this.front] = null
//         this.front = (this.front + 1) % this.capacity
//         this.currentLength--

//         if (this.isEmpty()) {
//             this.front = -1
//             this.rear = -1
//         }

//         return item
//     }

//     peek() {
//         if (!this.isEmpty()) {
//             return this.items[this.front]
//         }
//     }

// 	print() {
//     	if (this.isEmpty()) {
//     	    console.log('No Item in this que')
//     	    return
//     	}

//     	let result = []

//         for (let i = 0, index = this.front; i < this.currentLength; i++) {
//             result.push(this.items[index])
//             index = index + 1 % this.capacity
//         }

//         console.log(result.join(', '))
//     }
// }

// const queue = new CircularQueue(5)

// console.log(queue.isFull())
// console.log(queue.isEmpty())

// queue.enQueue(22)

// queue.enQueue(32)
// queue.enQueue(42)
// queue.enQueue(52)

// console.log(queue.isFull())
// console.log(queue.isEmpty())

// queue.deQueue()

// console.log(queue.peek())

// queue.print()
