var number1 = 0;
var number2 = 0;
var number3 = 0;
var number4 = 0;
var number5 = 0;
var number6 = 0;
var number7 = 0;
var number8 = 0;
var number9 = 0;
var number10 = 0;
var number11 = 0;
var number12 = 0;
var number13 = 0;
var number14 = 0;
var number15 = 0;
var number16 = 0;
export function generateCard() {
  number1 = Math.floor(Math.random() * 10)
  number2 = Math.floor(Math.random() * 10)
  number3 = Math.floor(Math.random() * 10)
  number4 = Math.floor(Math.random() * 10)
  number5 = Math.floor(Math.random() * 10)
  number6 = Math.floor(Math.random() * 10)
  number7 = Math.floor(Math.random() * 10)
  number8 = Math.floor(Math.random() * 10)
  number9 = Math.floor(Math.random() * 10)
  number10 = Math.floor(Math.random() * 10)
  number11 = Math.floor(Math.random() * 10)
  number12 = Math.floor(Math.random() * 10)
  number13 = Math.floor(Math.random() * 10)
  number14 = Math.floor(Math.random() * 10)
  number15 = Math.floor(Math.random() * 10)
  number16 = Math.floor(Math.random() * 10)
}
export function newCard() {
  newCc = ''
  var cc = [number1, number2, number3, number4,
    number5, number6, number7, number8, number9,
    number10, number11, number12, number13, number14, number15, number16]
  for(let i=0; i<cc.length; i++){
    newCc += cc[i] + ' ';
  }
  // newCc = cc.toString();
  console.log(newCc)
}
export function test() {
  generateCard()
  newCard()
  var s = document.getElementById("cardNumber");
  s.innerHTML = newCc;
}
export var newCc;
