/* eslint-disable no-console */
// 7 kyu

// return masked string
function maskify(cc) {
  const string = cc.trim();
  const stringLength = string.length;
  const last4nums = stringLength - 4;
  let maskedString = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < string.length; i++) {
    if (i >= last4nums) maskedString += string[i];
    else maskedString += '#';
  }

  return maskedString;
}

// nice solution
// function maskify(cc) {
//   // return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }

console.log(maskify('Primer code katas!'));
console.log(maskify('457237234523462346'));
