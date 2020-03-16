'use strict';
var numbersArray = [4, 2, 3, 1];
var greaterThanArray =[];
var num = 3;
function greaterThan(){
  for(var i =0; i < numbersArray.length; i++){
    if(numbersArray[i] > num){
      greaterThanArray.push(numbersArray[i]);
    }
  }
}
greaterThan(numbersArray, num);
console.log(greaterThanArray);
console.log(greaterThanArray.length);
