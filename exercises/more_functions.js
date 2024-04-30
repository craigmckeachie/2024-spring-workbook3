"use strict";

function displayReceipt(totalDue, amountPaid) {
  var change = amountPaid - totalDue;
  console.log("Total Due: $" + totalDue);
  console.log("Amount Paid: $" + amountPaid);

  if (change > 0) {
    console.log("Change: $" + change.toFixed(2));
  } else if (change == 0) {
    console.log("No change needed");
  } else if (change < 0) {
    change = Math.abs(change);
    var changeFormatted = change.toFixed(2);
    console.log("You still owe another: $" + changeFormatted);
  }

  console.log();
}

displayReceipt(11.75, 20);
displayReceipt(11.75, 11.75);
displayReceipt(11.75, 10);
displayReceipt(22.65, 15);
