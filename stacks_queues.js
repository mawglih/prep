class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let current = this.first;
      this.first = newNode;
      newNode.next = current;
    }
    return ++this.length;

  }

  pop() {
    if(!this.first) return null;
    let current = this.first;
    if(this.length === 1) {
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return current.val;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if(this.size === 0) return null;
    if(this.size === 1) {
      this.last = null;
    } 
      let temp = this.first;
      this.first = this.first.next;
      this.size--;
      return temp.val;
  }
}