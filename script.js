



// this part is for changig a padding and reseting it
var source=document.querySelector('div').querySelector('div').querySelectorAll('div'); // we can use this source for all dynamical operations


 var padding_value=window.getComputedStyle(source[0]).getPropertyValue('padding');

function changePadding() {
var padding_input=document.getElementById("padding_input").value;
  
  for (let i = 0; i < source.length; i++) {
    source[i].style.padding=padding_input;
  }
}

function resetPadding() {


  for (let i = 0; i < source.length; i++) {
    source[i].style.padding=padding_value;
  }
  console.log("reset padding worked");
}


// background-color

var backg_value=window.getComputedStyle(source[0]).getPropertyValue('backgroundColor');

function changeBackgroundColor() {
  console.log("change backgroundcolor working");
  let input_value=document.getElementById("backg_input").value;
  for (let i = 0; i < source.length; i++) {
    source[i].style.backgroundColor=input_value;
  }
}

function resetBackgroundColor() {
  for (let i = 0; i < source.length; i++) {
    source[i].style.backgroundColor=backg_value;
  }
}



// change border

var border_value=window.getComputedStyle(source[0]).getPropertyValue('border');
function changeBorder() {
  console.log("changeBorder(); working");
  let input_value=document.getElementById("border_input").value;

  for (let i=0; i<source.length; i++) {
    source[i].style.border=input_value;
  }
  
}

//reset border
function resetBorder() {
  console.log("resetBorder() called");

  for(let i=0; i<source.length; i++) {
    source[i].style.border=border_value;
  }
}


//change justify-content
var source_justify=document.querySelector('div').querySelector('div');
var justify_value=window.getComputedStyle(source_justify).getPropertyValue('justify-content');

function changeJustifyContent() {
  console.log("changeJustifyContent() called");
  let input_value=document.getElementById('justify-content').value;

  source_justify.style.justifyContent=input_value;
}

//reset justify-content
function resetJustifyContent() {
  console.log("resetJustifyContent() called");
  source_justify.style.justifyContent=justify_value;
}