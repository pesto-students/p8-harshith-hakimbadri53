class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.insertNode(this.root, newNode);
  }

  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  levelOrderTraversal() {
    let queue = [this.root];
    while (queue.length !== 0) {
      let firstElement = queue.shift();
      console.log(firstElement.data);
      if (firstElement.left) {
        queue.push(firstElement.left);
      }
      if (firstElement.right) {
        queue.push(firstElement.right);
      }
    }
  }

  //Root,Left,Right
  preOrderTraversal(node) {
    if (!node) return;
    console.log(node.data);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }

  //Left,Root,Right
  inOrderTraversal(node) {
    if (!node) return;
    this.inOrderTraversal(node.left);
    console.log(node.data);
    this.inOrderTraversal(node.right);
  }

  //Left,Right,Root
  postOrderTraversal(node) {
    if (!node) return;
    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    console.log(node.data);
  }

  search(root, toFind) {
    if (!root) {
      return false;
    }
    if (root.data === toFind) {
      return true;
    }
    if (toFind < root.data) {
      return this.search(root.left, toFind);
    } else {
      return this.search(root.right, toFind);
    }
  }

  // delete(toDelete) {
  //   let temp = this.root;

  //   while (temp) {
  //     if (temp.data === toDelete) {
  //       if(temp.left === null && temp.right === null){

  //       }
  //     }
  //   }
  // }
  // deleteLeafNode(node) {}
  // deleteOneChildNode(node) {}
  // deleteTwoChildNode(node) {}
}

const bst = new BinarySearchTree();

const arr = [74, 53, 81, 36, 59, 79, 86, 22, 44, 58, 66, 84, 89];

for (let i = 0; i < arr.length; i++) {
  bst.insert(arr[i]);
}

console.log("level order");
bst.levelOrderTraversal();
console.log("pre order");

bst.preOrderTraversal(bst.root);
console.log("in order");

bst.inOrderTraversal(bst.root);
console.log("post order");

bst.postOrderTraversal(bst.root);

console.log(bst.search(bst.root, 811));

module.exports = BinarySearchTree;
