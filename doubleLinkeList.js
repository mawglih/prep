class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if(!this.head) return undefined;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let node = this.tail;
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;
    return node;
  }
  shift() {
    if(!this.head) return undefined;
    let current = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = current.next;
      this.head.prev = null;
      current.next = null;
    }
    this.length--;
    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if(index <= 0 || index >= this.length) return null;
    if(index > this.length / 2) {
      let current = this.tail;
      for(let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
      return current;
    } else {
      let current = this.head;
      for(let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
  }
  set(index, val) {
    if(this.get(index) !== null) {
      this.get(index).val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if(index < 0 || index >= this.length) return false;
    if(index === 0) return !!this.unshift(val)
    if(index === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let current = this.get(index - 1);
    let afterNode = current.next;
    current.next = newNode;
    newNode.next = afterNode;
    newNode.prev = current;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index, val) {
    if(index < 0 || index >= this.length) return false;
    if(index === 0) return this.shift(val);
    if(index === this.length -1) return this.pop(val);
    let removeNode = get(index);
    let prevNode = removedNode.prev;
    let afterNode = removeNode.next;
    prevNode.next = afterNode;
    afterNode.prev = prevNode;
    removeNode.prev = null;
    removeNode.next = null;
    this.length--;
    return removeNode;
  }
}