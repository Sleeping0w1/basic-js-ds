const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  rootNode = null;
  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
    } else {
      this.addNode(this.rootNode, new Node(data));
    }
  }

  addNode(rootNode, node) {
    if (node.data < rootNode.data) {
      if (rootNode.left === null) {
        rootNode.left = node;
      } else {
        this.addNode(rootNode.left, node);
      }
    } else {
      if (rootNode.right === null) {
        rootNode.right = node;
      } else {
        this.addNode(rootNode.right, node);
      }
    }
  }

  has(data) {
    if (this.find(data) != null) return true;
    else return false;
  }

  find(data) {
    if (data === this.rootNode.data) return this.rootNode;
    else if (data < this.rootNode.data) return this.findNode(this.rootNode.left, data);
    else return this.findNode(this.rootNode.right, data);
  }
  findNode(node, data) {
    if (node.data === data) return node;
    else if (data < node.data && node.left != null)
      return this.findNode(node.left, data);
    else if (data > node.data && node.right != null)
      return this.findNode(node.right, data);
    else return null;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }
  removeNode(node, data) {
    if (node === null) return null;
    else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      } else {
        let newNode = this.find(this.minNode(node.right));
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data)
        return node;
      }
    }
  }

  min() {
    if (this.rootNode.left === null) return this.rootNode.data;
    else return this.minNode(this.rootNode.left);
  }
  minNode(node) {
    if (node.left === null) return node.data;
    else return this.minNode(node.left);
  }

  max() {
    if (this.rootNode.right === null) return this.rootNode.data;
    else return this.maxNode(this.rootNode.right);
  }
  maxNode(node) {
    if (node.right === null) return node.data;
    else return this.maxNode(node.right);
  }
}

module.exports = {
  BinarySearchTree,
};
