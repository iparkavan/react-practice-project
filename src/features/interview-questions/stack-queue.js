// • [1] Valid parentheses — Easy

let s = "()";

const balancedParentheses = (s) => {
  const stack = [];

  const match = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (stack.pop() !== match[s[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(balancedParentheses(s));

// • [2] Implement stack using queues — Medium

class MyStack {
  constructor() {
    this.q = [];
  }

  push(x) {
    this.q.push(x);
    for (let i = 0; i < this.q.length - 1; i++) {
      this.q.push(this.q.shift());
    }
  }

  pop() {
    if (this.q.length === 0) return null;
    return this.q.shift();
  }

  top() {
    if (this.q.length === 0) return null;
    return this.q[0];
  }

  isEmpty() {
    return this.q.length === 0;
  }
}
