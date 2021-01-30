// First Class Plus Button
const fClassPlusBtn = document.getElementById("fclass-plus-btn");
fClassPlusBtn.addEventListener("click", function(){
    increase("fclass-input", 150);
});
// First Class Minus Button
const fClassMinusBtn = document.getElementById("fclass-minus-btn");
fClassMinusBtn.addEventListener("click", function(){
    decrease("fclass-input", 150);
});
// Economy Class Plus Button
const eClassPlusBtn = document.getElementById("eclass-plus-btn");
eClassPlusBtn.addEventListener("click", function(){
    increase("eclass-input", 100);
});
// Economy Class Minus Button
const eClassMinusBtn = document.getElementById("eclass-minus-btn");
eClassMinusBtn.addEventListener("click", function(){
    decrease("eclass-input", 100);
});
//Booking Button
const bookingBtn = document.getElementById("book-btn");
bookingBtn.addEventListener("click", function(){
    document.getElementById("success-msg").style.visibility = "visible";
});
// Define increase()
function increase(inputID, price){
    const input = document.getElementById(inputID);
    var inputValue = input.value;
    var inputNumber = parseInt(inputValue);
    document.getElementById(inputID).value = inputNumber + 1;
    var currentSubTotal = document.getElementById("sub-total").innerText;
    var currentSubTotalNumber = parseInt(currentSubTotal);
    var newSubTotal = currentSubTotalNumber + price;
    document.getElementById("sub-total").innerText = newSubTotal;
    var currentTax = document.getElementById("tax").innerText;
    var currentTaxNumber = parseInt(currentTax);
    var newTax = currentTaxNumber + (price * 0.1);
    document.getElementById("tax").innerText = newTax;
    var newTotal = newSubTotal + newTax;
    document.getElementById("total").innerText = newTotal;
};
//Define decrease()
function decrease(inputID, price){
    const input = document.getElementById(inputID);
    var inputValue = input.value;
    if(inputValue > 0){
        var inputNumber = parseInt(inputValue);
        document.getElementById(inputID).value = inputNumber - 1;
        var currentSubTotal = document.getElementById("sub-total").innerText;
        var currentSubTotalNumber = parseInt(currentSubTotal);
        var newSubTotal = currentSubTotalNumber - price;
        document.getElementById("sub-total").innerText = newSubTotal;
        var currentTax = document.getElementById("tax").innerText;
        var currentTaxNumber = parseInt(currentTax);
        var newTax = currentTaxNumber - (price * 0.1);
        document.getElementById("tax").innerText = newTax;
        var newTotal = newSubTotal + newTax;
        document.getElementById("total").innerText = newTotal;
    };    
};

