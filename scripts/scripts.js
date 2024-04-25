/****************** create variables ******************/
// Variables to hold the values for modelName and duration
var modelName = "XYZ";
var duration = 0;

/****************** helper function ******************/
// Function to recalculate the total cost based on model and duration
function recalculate() {
    var costLabel = document.getElementById("calculated-cost");
    var totalCost = 0;

    if (modelName === "XYZ") {
        totalCost = duration * 100;
    } else if (modelName === "CPRG") {
        totalCost = duration * 213;
    }

    costLabel.innerHTML = '$' + totalCost.toFixed(2);
}

/****************** model button logic ******************/
// Function to switch the model and recalculate the cost
function changeModel() {
    var modelText = document.getElementById("model-text");
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = 'Model CPRG';
    } else {
        modelName = "XYZ";
        modelText.innerHTML = 'Model XYZ';
    }
    recalculate();
}

// Attach the model change functionality to the "Switch Model" pseudo-button
var modelButton = document.getElementById("model-button");
modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/
// Function to change the booking duration and recalculate the cost
function changeDuration() {
    var durationText = document.getElementById("duration-text");
    var newDuration = prompt("Enter the number of days you want to book:");
    duration = parseInt(newDuration, 10);
    durationText.innerHTML = duration;
    recalculate();
}

// Attach the duration change functionality to the "Change Duration" pseudo-button
var durationButton = document.getElementById("duration-button");
durationButton.addEventListener("click", changeDuration);
