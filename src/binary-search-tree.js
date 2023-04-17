const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
function Node(data){
  this.left = null;
  this.rigth = null;
  this.data = data;
}
class BinarySearchTree {
  constructor(){
    this.start = null;
  }

  root() {
    return this.start
  }

  add(data) {
    this.start = addRecursion(this.start, data)
    function addRecursion(node, data){
      if(!node){return new Node(data)}

      if(node.data === data){return node}
      
      if(node.data < data){node.left = addRecursion(node.left,data)
      
      }else{node.right = addRecursion(node.right,data)}
     
      return node
    }
  }

  has(data) {
    return searchRecurc(this.start, data)
    function searchRecurc(node, data){
      if(!node){return false}
      if(node.data === data){return true}
      if(node.data < data){node.right = searchRecurc(node.right, data)}
      if(node.data > data){node.left = searchRecurc(node.left, data)}
      return false
    }
  }

  find(data) {
    let node = this.start;
    while(node){
      if(data === node.data){return node}
      if(data < node.data){node = node.right}
      if(data > node.data){node = node.left}
    }
    return null
  }

  remove(data) {
    this.start = removeRecurs(this.start, data)
    function removeRecurs(node, data){
      if(!node){
        return null
      }
      if(node.data < data){
        node.right = removeRecurs(node.right, data)
        return node
      }
      if(node.data > data){
        node.left = removeRecurs(node.left, data)
        return node
      }
      if(node.data === data){
        if(!node.left && !node.right){return null}
        if(!node.left){
          node = node.right
          return node
        }
        if(!node.right){
          node = node.left
          return node
        }else{
          let min = node.right;
          while(min.left){
            min = min.left
          }
          node.data = min.data
          node.right = removeRecurs(node.right, min.data)
          return node
        }
      }

    }
  }

  max() {
    if(!this.start){
      return undefined
    }
    let node = this.start;
    while(node.left){
      node = node.left
    }
    return node.data
  }

  min() {
    if(!this.start){
      return undefined
    }
    let node = this.start;
    while(node.right){
      node = node.right
    }
    return node.data
  }

}

module.exports = {
  BinarySearchTree
};