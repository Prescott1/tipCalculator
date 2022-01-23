const calculateTip = () => {
  const sum = document.getElementById("amount-input").value;
  const tipPercentage = sum * 0.2;
  if (tipPercentage == 0) {
    document.getElementById("percentage-display").innerHTML =
      "You need to enter a amount.";
  } else {
    document.getElementById(
      "percentage-display"
    ).innerHTML = `Your tip will be ${tipPercentage}$`;
  }
};
