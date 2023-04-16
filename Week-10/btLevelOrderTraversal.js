const BinaryTree = require("./BinaryTree");

const arr = [1];

const bt = new BinaryTree();
bt.insertLevelOrder(arr);
function levelOrderTraversal(root) {
  let queue = [root];
  let result = [];
  while (queue.length !== 0) {
    let levelSize = queue.length;
    let currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      currentLevel.push(currentNode.data);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    result.push(currentLevel);
  }
  return result;
}

console.log(levelOrderTraversal(bt.root));
