"use strict";

//function to run after the page's html has loaded
function init() {
  console.log("html has loaded");
  //get the html button into a variable, the id needs to match the id attribute in the html
  //the name of the variable could be anything but best practice says it should end in something
  //that indicates it is an html element: Paragraph, Div, TableRow, Button, Input
  const submitOrderButton = document.getElementById("submitOrderButton");
  //the submitOrderButton holds an object like the one shown below which represents the html element
  //<button type="button" id="submitOrderButton">Submit Order</button>
  // let submitOrderButton = {
  //   onclick: null,
  //   id: "submitOrderButton",
  //   type: "button"
  // };
  submitOrderButton.onclick = submitOrder;
}

function submitOrder() {
  //get the html input element into a variable, the id needs to match the id attribute in the html
  const numberOfScoopsInput = document.getElementById("numberOfScoopsInput");
  let numberOfScoops = numberOfScoopsInput.value;
  console.log(numberOfScoops);
}

//run this function after the window has loaded
//in other words, after the page's html has loaded
window.onload = init;
