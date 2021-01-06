class LinkedList {
  constructor(){
    this.head = null; // First element of the list
    this.tail = null; // Last element of the list
  }

  prepend(value){
    const newNode = {value : value, next: this.head}
    this.head = newNode
    if(!this.tail){
      this.tail = newNode
    }  
  }

  insertAfter(value,afterValue){
    const existingNode = this.find(afterValue)

    if(existingNode){
      const newNode = {value : value, next: existingNode.next}
      existingNode.next = newNode
    }
  }

  find(value){
    if(!this.head){
      return null;
    }

    let curNode = this.head;
    while(curNode){
      if(curNode.value === value){
        return curNode;
      }
      curNode = curNode.next
    }
    return null;
  }

  append(value){
    const newNode = {value : value, next : null}

    if(this.tail){
      this.tail.next = newNode
    }
    this.tail = newNode

    if(!this.head){
      this.head = newNode
    }
  }

  delete(value){

    if(!this.head){
      return;
    }

    while(this.head && this.head.value === value){
      this.head = this.head.next
    }

    let curNode = this.head
    
    while(curNode.next){
      if(curNode.next.value === value){
        curNode.next = curNode.next.next
      }else{
        curNode = curNode.next
      }
    }

    if(this.tail.value === value){
      this.tail = curNode
    }


  }

  toArray(){
    const elements = []
    let curNode = this.head
    while(curNode){
      elements.push(curNode)
      curNode = curNode.next
    }
    return elements
  }
}

const linkedlist1 = new LinkedList()
linkedlist1.append(1)
linkedlist1.append('hello')
linkedlist1.append('Vishakha')
linkedlist1.append(18.54)
linkedlist1.append(true)
linkedlist1.prepend(45)
linkedlist1.prepend('Roy')
linkedlist1.prepend('Max')
linkedlist1.append('Max')
linkedlist1.prepend(45)
linkedlist1.append('Roy')
linkedlist1.prepend(45)
linkedlist1.prepend(45)

console.log(linkedlist1.toArray())

linkedlist1.delete('Max')
linkedlist1.delete('Roy')
linkedlist1.delete(45)

console.log(linkedlist1.toArray())

console.log(linkedlist1.find('Max'))
console.log(linkedlist1.find(1))

linkedlist1.insertAfter('new value - 1', 1)
linkedlist1.insertAfter('new value - 2', 'hello')

console.log(linkedlist1.toArray())
