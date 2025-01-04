const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  root = null;
  getUnderlyingList() {
    return this.root;
  }

  enqueue(value) {
    if (this.root === null) this.root = new ListNode(value);
    else this.enqueueNode(value, this.root);
  }
  enqueueNode(value, node){
    if (node.next === null) node.next = new ListNode(value);
    else this.enqueueNode(value, node.next);
  }

  dequeue() {
    const lastRoot = this.root;
    this.root = this.root.next;
    return lastRoot.value;
  }
}

module.exports = {
  Queue
};
