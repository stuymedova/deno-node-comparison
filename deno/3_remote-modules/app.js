import {
  add,
  multiply,
} from 'https://x.nest.land/ramda@0.27.0/source/index.js';

function totalCost(outbound, inbound, tax) {
  return multiply(add(outbound, inbound), tax);
}

console.log(totalCost(19, 31, 1.2));


// Run: deno run app.js
// Output: 60