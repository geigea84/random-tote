var button = document.querySelector("#button");
var numberDisplay = document.querySelector("#tote-number");

var getRandomTote = function() {
    var randomTote = Math.floor(1000000000 + Math.random() * 9000000000);
    console.log(randomTote);

    numberDisplay.textContent = "Tote Number: " + randomTote;
};

button.addEventListener("click", getRandomTote);