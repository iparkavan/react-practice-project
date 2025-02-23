// // _______________Linked List___________________

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   getSize() {
//     return this.size;
//   }

//   prepend(value) {
//     const node = new Node(value);

//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }

//     this.size++;
//   }

//   append(value) {
//     const node = new Node(value);

//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let prev = this.head;

//       while (prev.next) {
//         prev = prev.next;
//       }
//       prev.next = node;
//     }

//     this.size++;
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("It is empty");
//     } else {
//       let current = this.head;
//       let result = [];

//       while (current) {
//         result.push(current.value);
//         current = current.next;
//       }

//       console.log(result);
//     }
//   }
// }

// const list = new LinkedList();
// console.log("Is list is empty? => ", list.isEmpty());
// console.log("List size? => ", list.getSize());

// list.append(10);
// list.append(20);
// list.append(30);

// list.append(40);

// list.print();

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
