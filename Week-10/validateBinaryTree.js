const BinaryTree = require("./BinaryTree");

function validateBST(root) {
  if (!root) return true;
  if (root.left) {
    if (root.left.data > root.data) {
      return false;
    }
  }
  if (root.right) {
    if (root.right.data < root.data) {
      return false;
    }
  }

  return validateBST(root.left) && validateBST(root.right);
}

const arr = [3, 9, 20, null, null, 15, 7];

const bt = new BinaryTree();

bt.insertLevelOrder(arr);

// console.log(bt.root);
console.log(validateBST(bt.root));
