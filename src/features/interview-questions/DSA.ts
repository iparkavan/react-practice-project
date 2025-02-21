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
// 	constructor(capacity) {
// 		this.items = new Array(capacity)
// 		this.capacity = capacity
// 		this.currentLength = 0
// 		this.rear = -1
// 		this.front = -1
// 	}

// 	isFull() {
// 		return this.currentLength === this.capacity
// 	}

// 	isEmpty() {
// 		return this.currentLength === 0
// 	}

// 	enQueue(element) {
// 		if (!this.isFull()) {
// 			this.rear = (this.rear + 1) % this.capacity
// 			this.items[this.rear] = element
// 			this.currentLength++
// 			if (this.front === - 1) {
// 				this.front = this.rear
// 			}
// 		}
// 	}

// 	deQueue() {
// 		if (this.isEmpty()) {
// 			return null
// 		}

// 		const item = this.items[this.front]
// 		this.items[this.front] = null
// 		this.front = (this.front + 1) % this.capacity
// 		this.currentLength--
// 		if (this.isEmpty()) {
// 			this.front = -1
// 			this.rear = -1
// 		}
// 		return item
// 	}

// 	peek() {
// 		if (!this.isEmpty()) {
// 			return this.items[this.front]
// 		}

// 		return null
// 	}

// 	print() {
// 		if (this.isEmpty()) {
// 			console.log("Queue is empty")
// 		} else {
// 			let i
// 			let str = ''

// 			for ( i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {

// 				str += this.items[i] + " "

// 			}

// 			str += this.items[i]
// 			console.log(str)
// 		}
// 	}
// }

// const queue = new CircularQueue(5)

// console.log("empty => ",queue.isEmpty())
// console.log("full => ",queue.isFull())

// queue.enQueue(10)
// queue.enQueue(20)
// queue.enQueue(30)
// queue.enQueue(40)
// queue.enQueue(50)

// console.log("empty => ",queue.isEmpty())
// console.log("full => ",queue.isFull())

// queue.print()
// console.log(queue.deQueue())

// console.log('Peek => ', queue.peek())

// queue.print()

// _______________________________________________________________
