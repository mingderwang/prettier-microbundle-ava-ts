'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const ava_1 = require('@fast-check/ava');
// Your function to test (example)
function add(a, b) {
  return a + b;
}
// Define the property-based test
(0, ava_1.testProp)('Adding two numbers is commutative', [ava_1.fc.integer(), ava_1.fc.integer()], (t, a, b) => {
  t.is(add(a, b), add(b, a));
});
