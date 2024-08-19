class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

  function getNodePosition(node) {
    if (node.next === null) {
      //base case: if there is no next node, this node is the first node
      return 1;
    }
    return 1 + getNodePosition(node.next)
  }



//You are given a nested list of integers nestedList.
//Each element is either an integer or a list whose elements may also be integers or other lists.
//The depth of an integer is the number of lists that it is inside of.For example,
//the nested list[1, [2, 2], [[3], 2], 1] has each integer's value set to its depth.
//Return the sum of each integer in nestedList multiplied by its depth.
//Input: nestedList = [[1,1],2,[1,1]]
//Output: 10
//Explanation: Four 1's at depth 2, one 2 at depth 1. 1*2 + 1*2 + 2*1 + 1*2 + 1*2 = 10.

//nestedList is a type of class that contains pre built functions:
//isInteger which determines if an item is an integer
//getInteger which returns an integer
//getList which return a list of integers
var depthSum = function (nestedList, depth = 1) {
  let sum = 0;
  //loop through each item in list
  for (let i = 0; i < nestedList.length; i++) {
    if (nestedList[i].isInteger()) {
      //if item is an integer, add integer to sum, multiply by current depth
      sum += nestedList[i].getInteger() * depth;
    } else {
      //call this function with the list[i], increment depth
      sum += depthSum(nestedList[i].getList(), depth + 1)
    }
  }
  return sum;
};


//Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).
//Each node will have a reference to its parent node.The definition for Node is below:
// class Node {
//   public int val;
//   public Node left;
//   public Node right;
//   public Node parent;
// }

var lowestCommonAncestor = function (p, q) {
  //choosing one of the values, store all of its parent node vals in a set, including the initail node val
  //do the same thing for the other value, except instead of storing its parent vals at each stage,
  //check to see if the parent is in the set of the other lines values.
  //if it is return that node
  const pLine = new Set();
  function getPParents(node, pLine) {
    //base case - node is null, exit recursion
    if (!node) return;
    //add node val to set
    pLine.add(node.val);
    //call this function recursivly on the nodes parent
    getPParents(node.parent, pLine);
  }
  //initiate call to getPParents with p
  getPParents(p, pLine);
  function findLCA(node, pLine) {
    //base case - node is null exit recursion
    if (!node) return;
    //if node val exists in set of P vals, return this node
    if (pLine.has(node.val)) return node;
    //recursivly return parent nodes
    return findLCA(node.parent, pLine);
  }
  //initiate/return call to findLCA with q node
  return findLCA(q, pLine);
};
