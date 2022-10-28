var number1,number2,number3,number4,number5,number6
,number7,number8,number9,number10,number11,number12,number13
,number14,number15,number16, eNumber1, eNumber2, eNumber3;


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
  eNumber1 = Math.floor(Math.random() * 10)
  eNumber2 = Math.floor(Math.random() * 10)
  eNumber3 = Math.floor(Math.random() * 10)
  var cc = [number1, number2, number3, number4 ,]
  var cc2 = [number5, number6, number7, number8 ,]
  var cc3 = [number9, number10, number11, number12 ,]
  var cc4 = [number13, number14, number15, number16 ,]
  var e = [eNumber1, eNumber2, eNumber3,]
  var newCc1 = cc.join('')
  var newCc2 = cc2.join('')
  var newCc3 = cc3.join('')
  var newCc4 = cc4.join('')
  var newE = e.join('')
  var s1 = document.getElementById("serialOne");
  s1.innerHTML = newCc1;
  var s2 = document.getElementById("serialTwo");
  s2.innerHTML = newCc2;
  var s3 = document.getElementById("serialThree");
  s3.innerHTML = newCc3;
  var s4 = document.getElementById("serialFour");
  s4.innerHTML = newCc4;
  var s5 = document.getElementById("expiration");
  s5.innerHTML = newE;
}

export var newCc1, newCc2, newCc3, newCc4, newE
















