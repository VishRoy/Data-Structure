import {LinkedList} from './LinkedList.js';

class Queue {
  
  constructor(){
    this.list = new LinkedList()
  }

  enqueue(value){
      this.list.append(value)
  }

  dequeue(){
      return this.list.deleteHead()
  }
  
  isEmpty(){
    return !this.list.head;
  }
  
  toArray(){
     return this.list.toArray()
  }
  
}
