import { testProp, fc } from '@fast-check/ava';
import { add } from '../src/main';

// Define the property-based test
testProp('Adding two numbers is commutative', [fc.integer(), fc.integer()], (t: any, a: number, b: number) => {
  t.is(add(a, b), add(b, a));
});
