



// this part is for changig a padding and reseting it
var source_padding=document.querySelector('div').querySelector('div').querySelectorAll('div');
  padding_value=window.getComputedStyle(source_padding[0]).getPropertyValue('padding');

function changePadding() {
var padding_input=document.getElementById("padding_input").value;

var source_padding=document.querySelector("div").querySelector("div").querySelectorAll("div");
  
  for (let i = 0; i < source_padding.length; i++) {
    source_padding[i].style.padding=padding_input;
  }
}

function resetPadding() {


  for (let i = 0; i < source_padding.length; i++) {
    source_padding[i].style.padding=padding_value;
  }
  console.log("reset padding worked");
}


// background-color
var source_backg=document.querySelector("div").querySelector("div").querySelectorAll("div");
var backg_value=window.getComputedStyle(source_backg[0]).getPropertyValue('backgroundColor');

function changeBackgroundColor() {
  console.log("change backgroundcolor working");
  let input_value=document.getElementById("backg_input").value;
  for (let i = 0; i < source_backg.length; i++) {
    source_backg[i].style.backgroundColor=input_value;
  }
}

function resetBackgroundColor() {
  for (let i = 0; i < source_backg.length; i++) {
    source_backg[i].style.backgroundColor=backg_value;
  }
}



// change border
var source_border=document.querySelector("div").querySelector("div").querySelectorAll("div");
var border_value=window.getComputedStyle(source_border[0]).getPropertyValue('border');
function changeBorder() {
  console.log("changeBorder(); working");
  let input_value=document.getElementById("border_input").value;

  for (let i=0; i<source_border.length; i++) {
    source_border[i].style.border=input_value;
  }
  
}

//reset border
function resetBorder() {
  console.log("resetBorder() called");

  for(let i=0; i<source_border.length; i++) {
    source_border[i].style.border=border_value;
  }
}