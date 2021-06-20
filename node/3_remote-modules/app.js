import {
  add,
  multiply,
} from 'ramda';

function totalCost(outbound, inbound, tax) {
  return multiply(add(outbound, inbound), tax);
}

console.log(totalCost(19, 31, 1.2));


// Run: node app.js
// Output: 60