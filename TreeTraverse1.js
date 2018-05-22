const TreeNode = require("./nodes").TreeNode;
const Queue = require("./queue").Queue;
const Node = require("./nodes").Node;

exports.ArrayStack = class ArrayStack {
  // member: arr (array of values)
  constructor() {
    this.arr = [];
  }

  // input: a value to be put on the top of the stack
  push(x) {
    this.arr.push(x); // put it at the end
  }

  // output: an object, from the top of the stack.
  pop() {
    // could have return this.arr.pop()
    let x = this.arr[this.arr.length - 1];
    this.arr = this.arr.slice(0, this.arr.length - 1); // delete last element
    return x;
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }

  isEmpty() {
    return this.arr.length == 0;
  }
}

exports.Node = class Node {
  constructor(v, n) {
    this.value = v;
    this.next = n;
  }
};

exports.DoubleNode = class DoubleNode {
  constructor(v, n, p) {
    this.value = v;
    this.next = n;
    this.prev = p;
  }
};

exports.TreeNode = class TreeNode {
  constructor(v, l, r) {
    this.value = v;
    this.left = l;
    this.right = r;
  }
};
exports.Queue = class Queue {
  constructor() {
    this.head = null;
    this.last = null;
  }
  enqueue(v) {
    if (this.last === null) {
      this.head = new Node(v, null);
      this.last = this.head;
    } else {
      this.head.next = new Node(v, null);
      this.head = this.head.next;
    }
  }
  dequeue() {
    let x = this.last.value;
    this.last = this.last.next;
    if (this.last === null) {
      this.head = null;
    }
    return x;
  }
  peek() {
    return this.last.value;
  }
  isEmpty() {
    return this.head === null;
  }
};
// Homework. Implement traversals without recursion.
// Instead use an explicit stack
function preorderNoRecursion(root, out) {
  // build a stack 
  let s = new ArrayStack
  // initiate stack with the root of the entire tree 
  s.push(root.value);
  while(!s.(isEmpty())){
    // while stack isn't empty, visit what's on the top of the stack 
    let t = s.pop();
    // if the value on the top of the stack, what is popped isn't null 
    // meaning its parent node was not a leaf - which also means it might have child nodes 
    // put right child node and then the left child node into the stack
    // push the node value into the output stackArray
    if(t !== null){
      out.push(t.value);
      s.push(t.right);
      s.push(t.left);
    }
  }
}

function postorderNoRecursion(root, out) {
  let s = new ArrayStack();
  let last = null;
  let c = root;
  while(!s.isEmpty() || c !== null){
    // check if the node is null
    if(c !== null){
      // if not, then push the value into the stack
      s.push(c);
      // move the root to the left child 
      c = c.left;
    } else if(s.peek().right !== null){
          // if node is null, peek what's on the top of the stack,
         // and check if it has a right child or not 
        // if it does, compare the left popped item to the rigt child node 
        if(last !== s.peek().right){
          // if it's not the same, then move to the right node
          c = s.peek().right;
        } else{
          last = s.pop();
          out.push(last.value);
        }
    } else {
      last = s.pop();
      out.push(last.value);
    }
  }
}

function inorderNoRecursion(root, out) {
  // ...
}

// Homework. Construct a tree from two traversals.
function makeTree(preorder, inorder) {
  // ...
}
