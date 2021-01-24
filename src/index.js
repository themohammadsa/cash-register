var output = document.querySelector("#outputDenominations");
var inputBill = document.querySelector("#inputBill");
var inputCash = document.querySelector("#inputCash");
var button = document.querySelector("#button");
var denominations = document.querySelector("#denominations");

var currencies = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

var notes = 0;
function convert() {
  var bill = Number(inputBill.value);
  var cash = Number(inputCash.value);
  var balance = cash - bill;
  output.innerText = "";

  if (cash == bill) {
    output.innerText = "\n\nNo Balance.\n\n";
  } else if (cash < bill) {
    output.innerText = "\n\nInsufficient Cash Received.\n\n";
  } else {
    denominations.innerText = "\n\nDenominations:\n\n";

    let a = currencies.map((money) => {
      var notes = Math.floor(balance / money);
      console.log(money);
      console.log(notes);
      balance = balance - notes * money;
      if (notes != 0) {
        output.innerText += "\n" + money + "₹ x " + notes + "\n";
      }
    });
  }
}

button.addEventListener("click", convert);
