const calculateTip = () => {
    let sum = document.getElementById("amount-input").value;
    const tipPercentage = sum * 0.20;
   if(tipPercentage == 0 ){
    document.getElementById("percentage-display").innerHTML = "You need to enter a amount."
   }else{
    document.getElementById("percentage-display").innerHTML = `Your tip will be ${tipPercentage}$`;
   }
};

