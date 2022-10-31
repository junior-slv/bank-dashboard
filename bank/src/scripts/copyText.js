import React from 'react';
var cText = '';
export function copyText() {
    cText = document.getElementById("myInput");
    cText.select();
    cText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cText.value);
    alert("The numbers were copied :) ");
  }

