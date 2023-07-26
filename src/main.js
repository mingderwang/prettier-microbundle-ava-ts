'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.add = exports.greet = void 0;
function greet(name) {
  return `Hello, ${name}! Welcome to my micromodule!`;
}
exports.greet = greet;
function add(a, b) {
  return a + b;
}
exports.add = add;
