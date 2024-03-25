// Code your solutions in this file
// for(let age=30; age <40; age++){
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// }
// const gifts = ["teady bear","drone","doll"]
// function wrapGifts(gifts){
// for(let i = 0; i<gifts.length; i++){
//   console.log (`Wrapped ${gifts[i]} and added a bow!`);
 
// }
// return gifts;
// }
// wrapGifts(gifts);

const gifts = ["teddy bear","doll","drone"]
function wrapGifts(gifts){
  let i = 0;
  while (i < gifts.length){
    console.log(`Wrapped ${gifts[i]} and added a bow`); i++;
  }
  return gifts;
}
wrapGifts(gifts);

let i;
function countDown(i){
  while( i >= 0){
    console.log (i); i--;
}
return i;
}
(countDown(10));