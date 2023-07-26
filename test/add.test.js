'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const ava_1 = require('@fast-check/ava');
const main_1 = require('../src/main');
// Define the property-based test
(0, ava_1.testProp)('Adding two numbers is commutative', [ava_1.fc.integer(), ava_1.fc.integer()], (t, a, b) => {
  t.is((0, main_1.add)(a, b), (0, main_1.add)(b, a));
});
