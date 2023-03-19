class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
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

  insertLevelOrder(arr) {
    this.root = this.getLevelOrderTree(arr, 0);
  }

  getLevelOrderTree(arr, i) {
    if (arr[i] === null) return null;
    let node = null;

    if (i < arr.length) {
      node = new Node(arr[i]);

      node.left = this.getLevelOrderTree(arr, 2 * i + 1);
      node.right = this.getLevelOrderTree(arr, 2 * i + 2);
    }
    return node;
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
}

module.exports = BinaryTree;
