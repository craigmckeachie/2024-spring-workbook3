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
  const basePriceTD = document.getElementById("basePriceTD");
  const totalDueTD = document.getElementById("totalDueTD");
  //the basePriceTD holds an object like the one shown below which represents this html:
  //<td id="basePriceTD">xxx.xx</td>
  //   const basePriceTD = {
  //     id: "basePriceTD"
  //     innerText: "xxx.xx",
  //   };

  //create variable numberOfScoops
  //assign into the variable the value that was entered by the user
  //otherwise known as the value property of the HTMLInputElement
  //calling the Number function which takes a string as a parameter and returns the string converted into a number
  let numberOfScoops = Number(numberOfScoopsInput.value);
  const scoopCost = 2.25;
  let basePrice = numberOfScoops * scoopCost;
  basePriceTD.innerText = "$" + basePrice.toFixed(2);
  totalDueTD.innerText = "$" + basePrice.toFixed(2);

  let console = {
    log: function(){

    }
  }
  console.log()

}

//run this function after the window has loaded
//in other words, after the page's html has loaded
window.onload = init;
