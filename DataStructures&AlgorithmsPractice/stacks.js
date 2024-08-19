//last in first out data structure
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.size = 0;
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }
  peek() {
    return this.top !== null ? this.top.data : null;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.size++;
  }
  pop() {
    if (this.top) {
      const data = this.top.data;
      this.top = this.top.next;
      this.size--;
      return data;
    }
    return null;
  }
  getSize() {
    return this.size;
  }
}

const stack = new Stack();
const array = [1,2,3,4,5,6];
array.forEach((a) => stack.push(a))
console.log(stack);
const size = stack.getSize();
console.log(size)



//BALANCED BRACKETS
// A bracket is any of the following characters: (, ), {, }, [, or].
// We consider two brackets to be matching if the first bracket is an open - bracket, e.g., (, {, or [, and the second bracket is a close- bracket of the same type.That means(and), [and], and { and } are the only pairs of matching brackets.
// Example 1
// s = {[()]}
// output: true
// Example 2
// s = {}()
// output: true
// Example 3
// s = {(})
// output: false
// Example 4
// s = )
// output: false

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  isEmpty() {
    return this.top === null;
  }

  pop() {
    if (this.top) {
      const data = this.top.data;
      this.top = this.top.next;
      return data;
    }
    return null;
  }
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }
}

function getStartBracket(val) {
  let startBracket;
  switch (val) {
    case '}':
      startBracket = '{';
      break;
    case ')':
      startBracket = '(';
      break;
    case ']':
      startBracket = '[';
      break;
    default:
      startBracket = '';
      break;
  }
  return startBracket;
}

function isStartBracket(val) {
  if (val === '{' || val === '[' || val === '(') return true;
  return false;
}

function isBalanced(s) {
  // Write your code here
  const stack = new Stack();
  if (s.length % 2 !== 0) return false;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (i === 0 && !isStartBracket(char)) return false;

    if (isStartBracket(char)) {
      stack.push(char);
    } else {
      const neededStart = getStartBracket(char);
      if (stack.pop() !== neededStart) return false;
    }

  }
  return true;

}
