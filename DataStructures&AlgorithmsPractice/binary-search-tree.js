class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }

  // Inserts a new node at the correct position in the tree
  insert(value) {
    if (value <= this.data) {
      // Insert on the left side
      if (this.left === null) {
        // If there is no left, left is now = my value
        this.left = new Node(value);
      } else {
        // Otherwise, ask the left node to insert further down the tree
        this.left.insert(value);
      }
    } else {
      // Same process on the right
      if (this.right === null) {
        this.right = new Node(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  // Returns a boolean of whether or not the provided value is in the tree
  contains(value) {
    if (value === this.data) {
      // If the value = current data, it's here, return true
      return true;
    } else if (value < this.data) {
      // Otherwise check if value is less than data
      if (this.left === null) {
        // If it's null then there are no more nodes to search
        // and the value wasn't found - return false
        return false;
      } else {
        // Otherwise recurse on the left node
        return this.left.contains(value);
      }
    } else {
      // Value was bigger than data so we check the right side
      if (this.right === null) {
        // If right node is null, we haven't found the value return false
        return false;
      } else {
        // Otherwise recurse on the right node
        return this.right.contains(value);
      }
    }
  }

  preorder(root) { //preorder example
    const preorderArr = []
    if (root === null) return;
    preorderArr.push(root.data);
    this.preorder(root.left);
    this.preorder(root.right);
  }

  postorder(root) { //postorder example
    const postOrderArr = []
    if (root === null) return;
    this.postorder(root.left);
    this.postorder(root.right);
    postOrderArr.push(root.data);
    return postOrderArr;
  }


  // In order traversal function - prints all the nodes in the tree
  printInOrder() {
    if (this.left !== null) {
      this.left.printInOrder();
    }
    console.log(this.data);
    if (this.right !== null) {
      this.right.printInOrder();
    }
  }
}

const tree = new Node(10);
tree.insert(5);
tree.insert(8);
tree.insert(15);
tree.printInOrder();
console.log(tree);
console.log('tree contains 8? ', tree.contains(8));
console.log('tree contains 12? ', tree.contains(12));


//determines if two trees are identical
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
};

//reverses left and right nodes throughout the tree
var invertTree = function (root) {
  if (root === null) return null;
  const right = invertTree(root.right);
  const left = invertTree(root.left);
  root.left = right;
  root.right = left;
  return root;
};

var kthSmallest = function (root, k) {
  //Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
  const inOrderArr = []; // Initialize inside the function
  function inOrder(root) {
    if (root === null) return; // Check if root exists
    if (root.left !== null) {
      inOrder(root.left);
    }
    inOrderArr.push(root.val);
    if (root.right !== null) {
      inOrder(root.right);
    }
  }
  inOrder(root); // Call the inOrder function
  return inOrderArr[k - 1];

};

var lowestCommonAncestor = function (root, p, q) {
  //Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
  const parentVal = root.val;
  const pVal = p.val;
  const qVal = q.val;
  if (pVal > parentVal && qVal > parentVal) {
    // both pVal and qVal are in the right subtree
    return lowestCommonAncestor(root.right, p, q);
  } else if (pVal < parentVal && qVal < parentVal) {
    //both pVal and qVal are in the left subtree
    return lowestCommonAncestor(root.left, p, q);
  } else {
    //pVal and qVal are split between left and right subtree
    //return current node
    return root;
  }
};




//Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).
//If two nodes are in the same row and column, the order should be from left to right.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 *     this.colIndex = (colIndex===undefined ? 0 : colIndex)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function (root) {
  //basic idea: the root is at index 0, each column to the left is less 1 index. each column to the right is one index more
  //if root is undefined return empty array
  if (!root) return [];
  //initialize a map to hold the column indexes and the items in those columns
  const columns = new Map();
  //set col to 0 since the root is at index 0
  let col = 0;
  //add col 0 as the key and array containing root.val to columns map
  columns.set(col, [root.val]);
  //initialize an empty queue to loop through the nodes
  const queue = [];
  //add left and right nodes to the queue.  push onto the queue an object so we can have both the node and the nodes column accessible
  if (root.left) queue.push({ node: root.left, col: col - 1 });
  if (root.right) queue.push({ node: root.right, col: col + 1 });
  //loop through the queue so long as there are items
  while (queue.length > 0) {
    // destructure node and col out of the first index in the queue
    const { node, col } = queue.shift();
    //set the col key to either an existing array of items for the col, or a fresh array containing the current node val
    columns.set(col, columns.has(col) ? [...columns.get(col), node.val] : [node.val]);
    //if this node has a left or a right, push those onto the queue, specifying the node and the column
    if (node.left) queue.push({ node: node.left, col: col - 1 });
    if (node.right) queue.push({ node: node.right, col: col + 1 });
  }
  //once the queue is empty grab all the keys into an array
  const indexes = Array.from(columns.keys());
  //sort the array so we can print lowest index to highest index
  indexes.sort((a, b) => a - b);
  //return an array mapped from the sorted indexs, returning the value of the index from the Map
  return indexes.map((index) => columns.get(index))
};
