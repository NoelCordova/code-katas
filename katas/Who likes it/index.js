/* eslint-disable no-console */
// 6 kyu

// eslint-disable-next-line consistent-return
function likes(names) {
  if (names.length === 0) {
    return 'no one likes this';
  }

  if (names.length === 1) {
    return `${names[0]} likes this`;
  }

  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }

  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }

  if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// nice solution
// function likes(names) {
//   names = names || [];
//   switch(names.length){
//     case 0: return 'no one likes this'; break;
//     case 1: return names[0] + ' likes this'; break;
//     case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//     case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//     default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//   }
// }

console.log(likes(['Noel', 'Diana']));
console.log(likes([]));
console.log(likes(['Noel', 'Diana', 'Diego']));
console.log(likes(['Noel', 'Diana', 'Diego', 'Josh']));
