const displayInput = document.getElementById("displayInput");
const displayOutput = document.getElementById("displayOutput");

function appendToDisplay(input) {
    displayInput.value += input;
}

function clearDisplay() {
    displayInput.value = "";
    displayOutput.value = "";
}

function calculate() {
    try {
        displayOutput.value = eval(displayInput.value);
    } 
    
    catch(error) {
        displayInput.value = "Error";
    }
}