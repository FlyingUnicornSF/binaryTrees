// class Node{
//     constructor(r, l=null, v=null){
//         this.value = v;
//         this.right = r;
//         this.left = l;
//     }
// }

// build this tree in three different ways. 
//        a
//      /   \
//     b     c
//    / \   / \
//   d  e  f   g

// PRE: root left right
// POST: left right root
// IN: left root right.

// PRE - [a [b [d[null][null]][e[null][null]]] [c[f[null][null]][g[null][null]]]]
// POST - [[[[null][null]d][[null][null]e]b][[[null][null]c][[null][null]g]c]a
// IN - [[[]d[]]b[[]e[]]]a[[[]f[]]c[[]g[]]]
// PRE [a, b, d, null, null, e, null, null, c, f, null, null, g, null, null]


const TreeNode = require("./nodes").TreeNode;
const Queue = require("./queue").Queue;
const Stack = require("./stack").Stack;

exports.preorder = function preorder(root, out) {
  if (root == null) {
    return;
  }
  out.push(root.value);
  preorder(root.left, out);
  preorder(root.right, out);
};

exports.postorder = function postorder(root, out) {
  if (root == null) {
    return;
  }
  postorder(root.left, out);
  postorder(root.right, out);
  out.push(root.value);
};

exports.inorder = function inorder(root, out) {
  if (root == null) {
    return;
  }
  inorder(root.left, out);
  out.push(root.value);
  inorder(root.right, out);
};

exports.levelorder = function levelorder(root, out) {
  let q = new Queue();
  q.enqueue(root);
  while (!q.isEmpty()) {
    let t = q.dequeue();
    if (t != null) {
      out.push(t.value);
      q.enqueue(t.left);
      q.enqueue(t.right);
    }
  }
};

// Homework. Implement traversals without recursion.
// Instead use an explicit stack
// function preorderNoRecursion(root, out) {
//   if(root === null){
//     return
//   }
//   while(root !== null){
//     out.enqueue(root.value);
//     if(root.left !== null){
//       root.left = root;
//     } else if(root.right !== null){
//       root.right = root;
//     } else {
//       dequeue.out()
//     }
//   }
// }

function preorderNoRecursion2(root, out) {
  let s = new Stack();
  s.push(root);
  while(!s.isEmpty()) {
    let t = s.pop();
    if (t != null) {
      out.push(t.value);
      s.push(t.right);
      s.push(t.left);
    }
  }
}

function postorderNoRecursion(root, out) {
  if (root === null) {
      return;
  }
  while(root.right !== null){
    if(root.right !== null){
      root.right = root;
      out.push(root.value);
    } else{
      root.left = root;
      out.push(root.value)
    }
  }
}

function inorderNoRecursion(root, out) {
  if (root == null){
    return;
  }
  while(root !==null){
    if(root.)
    root.left = root;

  }
}

// // Homework. Construct a tree from two traversals.
function makeTree(preorder, inorder) {
  for(i=0; i<preorder.length; i++){
    if(preorder[i] !== null)
    newNodei.left = newTreeNode();
  }
  newNodei.value = preorder[i];
}