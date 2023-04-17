const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){
    this.array = new Array
  }
  push(element) {
    return this.array.push(element)
  }

  pop() {
    let removed = this.array.splice(this.array.length - 1, 1)
    return this.array.length === 0? undefined: removed[0]
  }

  peek() {
    let last = this.array[this.array.length - 1]
    return this.array.length === 0? undefined: last
  }
}

module.exports = {
  Stack
};
