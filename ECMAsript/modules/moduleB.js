import { addition as additionFn, substract as substractFn } from './moduleA.js';
import cals, * as calculatorFn from './moduleA.js';

console.log(additionFn(10, 20));
console.log(substractFn(10, 20));
console.log(cals(), calculatorFn);
