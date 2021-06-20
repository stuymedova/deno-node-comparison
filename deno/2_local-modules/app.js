import * as easings from './easings.ts';

for (let t = 0; t <= 1; t += 0.05) {
  const eased = easings.cubicInOut(t);
  const str = repeat('*', eased * 20);
  console.log(str);
}

function repeat(str, num) {
  let result = '';
  num = Math.round(num);
  while (num--) {
    if(num >= 0) result += str;
    else num = 0
  }
  return result;
}


// Run: deno run app.js
// Output:
// 
// 
// *
// *
// **
// ***
// *****
// *******
// **********
// *************
// ***************
// *****************
// ******************
// *******************
// *******************
// ********************
// ********************
// ********************