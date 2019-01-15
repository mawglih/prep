class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if(!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return node;
  }
  pop() {
    if(!this.head) return undefined;
      let end = this.head;
      let pre = end;
    while(end.next) {
      pre = end;
      end = end.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head === null;
      this.tail === null;
    }
    return end;
  }
  shift() {
    if(this.length === 0) return undefined;
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    if(this.length === 0) {
      this.tail === null;
    }
    return temp;
  }
  unshift(val) {
    let node = new Node(val);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(index) {
    if(index < 0 || index >= this.length) return null;
    let current = this.head;
    for(let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  set(index, value) {
    let found = this.get(index);
    if(found) {
      found.val = value
      return true;
    }
    return false;
  }
  insert(index, value) {
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(value);
    if(index === 0) return !!this.unshift(value);
    let pre = this.get(index - 1);
    let temp = pre.next;
    pre.next = new Node(value);
    pre.next.next = temp;
    this.length++;
    return true;
  }
  remove(index, value) {
    if(index < 0 || index > this.length) return undefined;
    if(index === this.length) return this.pop(value);
    if(index === 0) return !!this.shift(value);
    let pre = this.get(index - 1);
    let removed = pre.next
    pre.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let node = this.head
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for(let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList;
list.push('Oleg');
list.push('Markoff');
list.push('sits');
list.push('here');
list.push('!');