import {LinkedList} from './LinkedList.js';

class Stack {
  constructor(){
    this.list = new LinkedList()
  }

  push(value){
    this.list.prepend(value);
  }

  pop(){
    this.list.deleteHead();
  }

  isEmpty(){
    this.list.head;
  }

  toArray(){
    this.list.toArray()
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
