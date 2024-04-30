"use strict";

function displayReceipt(totalDue, amountPaid) {
  var change = amountPaid - totalDue;
  console.log("Total Due: $" + totalDue);
  console.log("Amount Paid: $" + amountPaid);
  console.log("Change: $" + change);
  console.log();
}

displayReceipt(11.75, 20);
displayReceipt(11.75, 11.75);
displayReceipt(11.75, 10);

