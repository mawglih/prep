class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if(!this.root) {
      this.root = node
      return this;
    } else {
      let current = this.root;
      while(true) {
        if(value === current.value) return undefined;
        if(value < current.value) {
          if(current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else if(value > current.value) {
          if(current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if(!this.root) return false;
    let current = this.root;
    let found = false;
    while(current && !found) {
      if(value < current.value) {
          current = current.left;
      } else if(value > current.value) {
          current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return false;
    return current;
  }
}

let tree = new BST();
tree.root = new Node(10);
tree.root.right = new Node(20);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);