class Queue {
  constructor(){
    this.items = []
  }

  enqueue(value){
    this.items.unshift(value)
  }

  dequeue(){
    return this.items.pop()
  }

  isEmpty(){
    return this.items.length === 0
  }

  toArray(){
    return this.items
  }
}

const queue = new Queue()
console.log(queue.toArray())

queue.enqueue('Daniel')
queue.enqueue('Radcliffe')
queue.enqueue('Harry')
queue.enqueue('Potter')

console.log(queue.toArray())

console.log(queue.dequeue())

console.log(queue.isEmpty())

console.log(queue.toArray())
