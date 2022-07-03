class QElement {
	constructor(element, priority) {
		this.element = element
		this.priority = priority
	}
}

class PriorityQueue {
	constructor() {
		this.items = []
	}

	// Add element
	enqueue(element, priority) {
		let qElement = new QElement(element, priority)
		let contain = false

		for (let i = 0; i < this.items.length; i++) {
			if (this.items[i].priority > qElement.priority) {
				this.items.splice(i, 0, qElement)
				contain = true
				break
			}
		}

		if (!contain) {
			this.items.push(qElement)
		}
	}

	// Remove element
	dequeue() {
		if (this.isEmpty())
			return "Underflow"
		return this.items.shift()
	}

	// Return front element
	front() {
		if (this.isEmpty())
			return "No elements in queue"
		return this.items[0]
	}

	// Returns last element
	rear() {
		if (this.isEmpty())
			return "No elements in queue"
		return this.items.at(-1)
	}

	isEmpty() {
		return this.items.length === 0
	}

	printQueue() {
		let str = ""
		for (let i = 0; i < this.items.length; i++) {
			str += this.items[i].element + " "
		}

		return str
	}
}

let priorityQueue = new PriorityQueue()
console.log(priorityQueue.isEmpty())
console.log(priorityQueue.front())
console.log(priorityQueue.rear())
priorityQueue.enqueue("Sumit", 2)
priorityQueue.enqueue("Gaurav", 1)
priorityQueue.enqueue("Piyush", 1)
priorityQueue.enqueue("Sunny", 2)
priorityQueue.enqueue("Sheru", 3)
console.log(priorityQueue.front())
console.log(priorityQueue.rear())
console.log(priorityQueue.printQueue())
priorityQueue.dequeue()
console.log(priorityQueue.printQueue())
priorityQueue.dequeue()
console.log(priorityQueue.printQueue())
priorityQueue.enqueue("Parmesh", 6)
console.log(priorityQueue.printQueue())
console.log(priorityQueue.rear())
