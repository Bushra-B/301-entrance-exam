'use strict';
// var starsArray = ['*', '**', '***', '****', '*****'];
// for (var i =0; i < starsArray.length; i++){
//   console.log(starsArray[i]);
// }
var starsArray = [];
var stars = '';
starsArray.push(stars);
for (var i =0; i < 5; i++){
  stars += '*';
  starsArray.push(stars);
  console.log(starsArray[i+1]);
}
