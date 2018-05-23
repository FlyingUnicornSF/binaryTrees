// This code build a binary search tree by inserting a node. 
// 
//
// when you insert a node into a binary tree, 
// it gets attached as a leaf.
// 
// the function from line 36 find its appropriate location. 
//
// There are so many ways to skin a cat or a BST, 
// But there are always two classes - one for the node, one for the tree itself. 
//
//
// This class for a binary tree node looks exactly the same accross the board. 
class TreeNode {
// you can set the default to null as a leaf's left and right nodes are null.
// Java can't do this. Python, C++, Swift, etc, also can set default value to parameters. 
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
// Then this class is for a binary tree. 
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Aftter this, there are different ways you can find online.
  // you can make prototype like this guy did,
  // https://khan4019.github.io/front-end-Interview-Questions/bst.html
  //
  // also reference
  // https://github.com/AlgorithmsStudy/Code/blob/master/binary_search_tree.js
  // 
  // Essentially, a function to traverse the tree to find leaf to attach new node.
  // If the tree doesn't have any node (no root), then insert the node as the root.
  //
  //
  insertNode(value) {
    // Check if the root is null.
    // if it is, then make it into the new root.
    if (this.root === null) {
      this.root = new TreeNode(value);
      return;
    }
    // start from the root. Set the root to the parent or currnet node.
    let parentNode = this.root;
    // khan4019 set this while(currentNode){
    // Here, parentNodeFound is set to false
    // The reason why this while loop isn't set to true is
    // that if you return from while loop, you can't use the function
    // for anything else after it returns and get out of while loop.
    //
    let parentNodeFound = false;
    while (!parentNodeFound) {
      // Ignore nodes with the same value.
      if (value === parentNode.value) return;
      // From here, check if it's bigger than the current/parent node.
      // and decide if it should travel to the left or right.
      if (value < parentNode.value) {
        if (parentNode.left != null) {
          parentNode = parentNode.left;
        } else {
          // when it reaches to a leaf, left or right node is null,
          // then it becomes a new TreeNode with left and right node null.
          parentNode.left = new TreeNode(value);
          parentNodeFound = true;
        }
      } else {
        if (parentNode.right != null) {
          parentNode = parentNode.right;
        } else {
          parentNode.right = new TreeNode(value);
          parentNodeFound = true;
        }
      }
    }
  }
}

let myTree = new BinarySearchTree();
myTree.insertNode(35);
myTree.insertNode(25);
myTree.insertNode(45);
myTree.insertNode(10);
myTree.insertNode(27);
myTree.insertNode(38);
myTree.insertNode(47);
console.log(myTree);


// Make this binary tree 
//        35
//     /     \
//    25      45
//   /  \     / \
// 10   27   38  47

// 





