class Stack {
  constructor(){
    this.items = []
  }

  push(value){
    this.items.push(value)
  }
  
  pop(){
    this.items.pop()
  }

  isEmpty(){
    return this.items.length === 0
  }

  toArray(){
    return this.items.slice()
  }
}

const stack1 = new Stack()

stack1.push('Cooking')
stack1.push('Cleaning')
stack1.push('Sleeping')


console.log(stack1.toArray())

console.log(stack1.isEmpty())

stack1.pop()

console.log(stack1.toArray())
