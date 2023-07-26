#!/usr/bin/env node
import { add, greet } from './src/main';
console.log(greet('ming'));
console.log(`This is your CLI! 1 + 1 = ${add(1,1)} ` );