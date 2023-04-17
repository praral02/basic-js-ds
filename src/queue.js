const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
function Node(value){
  this.value = value
  this.next = null
}
class Queue {
  constructor(){
    this.head = null;
    this.length = 0
  }
  getUnderlyingList() {
    let res = JSON.stringify(this.head)
    let result = res.replace(/\+/gi,"")
    return JSON.parse(result)
  }

  enqueue(value ) {
    if(this.length === 0){
       this.head = new Node(value)
    }else{
      let lastnext = this.head
      while(lastnext.next){
        lastnext = lastnext.next
      }
      lastnext.next = new Node(value)
    }
    this.length++
  }

  dequeue() {
    let current = this.head;
    this.head = current.next
    return current.value
  }
}

module.exports = {
  Queue
};
