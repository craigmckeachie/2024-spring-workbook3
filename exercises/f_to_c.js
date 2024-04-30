"use strict";

function convertFToC(fahrenheitTemperature) {
  //do the calculation C = (°F - 32) × 5/9
  var celsiusTempature = ((fahrenheitTemperature - 32) * 5) / 9;
  return celsiusTempature;
}

var f = 77;
var c = convertFToC(f);

//print the results
console.log("The fahrenheit temperature of " + f + " is " + c + " celsius.");
