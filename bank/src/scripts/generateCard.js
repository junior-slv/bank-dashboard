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
var cc;
// var cc2;
// var cc3;
// var cc4;
// var newCc1 = ''
// var newCc2 = ''
// var newCc3 = ''
// var newCc4 = ''
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
  var cc = [number1, number2, number3, number4 ,]
  var cc2 = [number5, number6, number7, number8 ,]
  var cc3 = [number9, number10, number11, number12 ,]
  var cc4 = [number13, number14, number15, number16 ,]
  var cc = cc.join(' ')
  cc2.join(' ')
  cc3.join(' ')
  cc4.join(' ')
  // for(let i=0; i<cc.length; i++){
  //   newCc1 += cc[i] ;
  // }
  // for(let i=0; i<cc2.length; i++){
  //   newCc2 += cc2[i] ;
  // }
  // for(let i=0; i<cc3.length; i++){
  //   newCc3 += cc3[i] ;
  // }
  // for(let i=0; i<cc4.length; i++){
  //   newCc4 += cc4[i] ;
  // }
  // console.log(newCc)
}
export function callCc() {
  // newCc1 = cc.toString();
  // newCc2 = cc2.toString();
  // newCc3 = cc3.toString();
  // newCc4 = cc4.toString();
  generateCard()
  newCard()
  // var s1 = document.getElementById("serialOne");
  // s1.innerHTML = newCc1;
  // var s2 = document.getElementById("serialTwo");
  // s2.innerHTML = newCc2;
  // var s3 = document.getElementById("serialThree");
  // s3.innerHTML = newCc3;
  // var s4 = document.getElementById("serialFour");
  // s4.innerHTML = newCc4;
  console.log(cc)
  console.log(newCc2)
  console.log(newCc3)
  console.log(newCc4)
}
export var newCc1, newCc2, newCc3, newCc4;
