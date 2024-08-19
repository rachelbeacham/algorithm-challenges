class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(data);
  }

  prepend(data) {
    const newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  deleteWithValue(data) {
    if (this.head === null) return;
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
}

//==============================================================================================================

var addTwoNumbers = function (l1, l2) {
  let res = new Node(0);
  let current = res;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry !== 0) {
    const x = l1 ? l1.data : 0;
    const y = l2 ? l2.data : 0;
    const sum = x + y + carry;
    carry = Math.floor(sum / 10);
    current.next = new Node(sum % 10);
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return res.next
};

//==============================================================================================================

var hasCycle = function (head) {
  let seen = new Set();
  let hasCycles = false;
  if (!head || head.next === null) return hasCycles;
  let first = head;
  while (first !== null && !hasCycles) {
    if (seen.has(first)) {
      hasCycles = true;
    } else {
      seen.add(first);
      first = first.next;
    }
  }
  return hasCycles;

};

//==============================================================================================================

//There is a singly-linked list head and we want to delete a node node in it.
//You are given the node to be deleted node.You will not be given access to the first node of head.
//All the values of the linked list are unique, and it is guaranteed that the given node node is not ////the last node in the linked list.
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

//==============================================================================================================

//Given the head of a singly linked list, return the middle node of the linked list.
//If there are two middle nodes, return the second middle node.
var middleNode = function (head) {
  //FIRST TRY INTUITION
  let len = 0; //FIND LENGTH OF LIST
  if (!head) return len;
  let current = head;
  while (current !== null) {
    len += 1;
    current = current.next
  }
  const middle = len % 2 === 0 ? (len / 2) + 1 : Math.ceil(len / 2); //FIND MIDDLE
  let index = 0;
  current = head;
  while (index <= middle) { //GO THROUGH LIST AGAIN TILL YOU GET TO THE MIDDLE
    index++;
    if (index === middle) {
      return current
    } else {
      current = current.next
    }
  }


  //OPTIMIZED SOLUTION When traversing the list with a pointer slow, make another pointer fast that traverses twice as fast.
  //When fast reaches the end of the list, slow must be in the middle.
  let fast = head; //null
  let slow = fast; //4
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

//==============================================================================================================

//You are given the head of a linked list.
//Remove every node which has a node with a greater value anywhere to the right side of it.
//Return the head of the modified linked list.

//Example 1:
// Input: head = [5, 2, 13, 3, 8]
// Output: [13, 8]
// Explanation: The nodes that should be removed are 5, 2 and 3.
//   - Node 13 is to the right of node 5.
//     - Node 13 is to the right of node 2.
//       - Node 8 is to the right of node 3.

// Example 2:
// Input: head = [1, 1, 1, 1]
// Output: [1, 1, 1, 1]
// Explanation: Every node has value 1, so no nodes are removed.

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var removeNodes = function (head) {
  //use a stack to iterate through nodes in reverse order
  const stack = [];
  let current = head;
  while (current !== null) {
    //go through the list, pusing each node onto the stack
    stack.push(current);
    current = current.next;
  }
  current = stack.pop();
  //initiate a var to hold the maximum value, set it to the last val in the stack
  let max = current.val;
  //initialize a result var, setting it to a new list node holding the current max (last item) as the value
  let res = new ListNode(max);
  //loop while stack has items
  while (stack.length > 0) {
    //get the last item in the stack
    let prev = stack.pop();
    //check if this item is >= to the max
    //if it is not >= the max, then that means items to the right
    //of it are bigger and we should not include it in out result list
    if (prev.val >= max) {
      //if it is >= max. update max to this val
      max = prev.val;
      //create a new node of for this val
      let newNode = new ListNode(prev.val);
      //set the next property of this node to the result list
      newNode.next = res;
      //update the result list to this node
      res = newNode;
    }
  }
  return res;
};

//==============================================================================================================
