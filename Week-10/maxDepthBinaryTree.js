const BinaryTree = require("./BinaryTree");

function maxDepth(root) {
  if (!root) return 0;
  leftTreeDepth = maxDepth(root.left);
  rightTreeDepth = maxDepth(root.right);

  return Math.max(leftTreeDepth, rightTreeDepth) + 1;
}

const binaryTree = new BinaryTree();
const arr = [3, 9, 20, null, null, 15, 7];
binaryTree.insertLevelOrder(arr);

console.log(binaryTree.root);
console.log(maxDepth(binaryTree.root));
