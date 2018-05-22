class TreeNode {
  constructor(v, r=null, l=null){
    this.value = v;
    this.right = r;
    this.left = l;
  }
}

let nodeValues = [20, 30, 10, 45, 35, 15, 7]
let rootNode = new TreeNode(20);

rootNode.right = new TreeNode();
rootNode.left = new TreeNode();

let thirtyNode;
let tenNode;
thirtyNode = rootNode.right;
tenNode = rootNode.left;
thirtyNode.value = 30;
tenNode.value = 10;

// console.log(tenNode);

let fourtyNode;
let thirtyFiveNode;
let fifteenNode;
let sevenNode;
thirtyNode.right = new TreeNode;
thirtyNode.left = new TreeNode;
tenNode.right = new TreeNode;
tenNode.left = new TreeNode;

// console.log(thirtyNode)

fourtyNode = thirtyNode.right;
twentyFiveNode = thirtyNode.left;
fifteenNode = tenNode.right;
sevenNode = tenNode.left;

fourtyNode.value = 40;
twentyFiveNode.value = 25;
fifteenNode.value = 15;
sevenNode.value = 7;

console.log(rootNode);

let thirtyThree = new TreeNode;
thirtyThree.value = 33;

//a node.value - compare to the thirtyThree.value 

// if the node.value is less than the thirtyThree.value 
// then move to the right node 

// if the node,.value is larger than the thirtyThree.value 
// the move to the left mode 

// repeat 

//Base case - when does this stop?? 
// if the node.value is 


if(rootNode.value < thirtyThree.value){
  let tempNode = rootNode.left;
  rootNode.right = thirtyThree;
  thirtyThree.right = tempNode;
  //console.log(thirtyThree)
} else {
  console.log("yay")
}

