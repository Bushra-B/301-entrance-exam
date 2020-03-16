'use strict';
//random numbers generator function:
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
var numbersArray = [];
//array of random numbers:
for (var j=0; j < 4; j++){
  numbersArray.push(getRandomInt(1, 10));
}
// console.log(numbersArray);
var greaterThanArray =[];
var num = getRandomInt(1, 10);
function greaterThan(){
  for(var i =0; i < numbersArray.length; i++){
    if(numbersArray[i] > num){
      greaterThanArray.push(numbersArray[i]);
    }
  }
}
greaterThan(numbersArray, num);
// console.log(num);
// console.log(greaterThanArray);
// console.log(greaterThanArray.length);
// console.log(`greaterThan([${numbersArray}], ${num}) => ${greaterThanArray.length}`);
var solution = document.getElementById('sol');
var pEl = document.createElement('p');
pEl.textContent = `greaterThan([${numbersArray}], ${num}) => ${greaterThanArray.length}`;
solution.appendChild(pEl);

