var displayBox = document.querySelector("#display");
var allBtn = document.querySelectorAll(".button");
var zero = document.querySelector("#zero");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var plus = document.getElementById("add");
var minus = document.querySelector("#subtract");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var equal = document.querySelector("#equals");
var clear = document.querySelector("#clean");

var recordedKeyPress = [];
var isEqualTo = false;
var resultToCalculate;

onStart();

function onStart() {
    recordAllKeyPresses();
    equalCalculate();
    clearAll();
}

function equalCalculate() {
    equal.addEventListener("click", function () {
        isEqualTo = true;
        calculate();
    });
}

function calculate(){




    displayBox.placeholder = eval(resultToCalculate);
}

function clearAll() {
    clear.addEventListener("click", function () {
        isEqualTo = false;
        displayBox.placeholder = "0";
        resultToCalculate = "0";
    });
}

function recordAllKeyPresses() {
    for (let i = 0; i < allBtn.length; i++) {
        allBtn[i].addEventListener("click", function () {
            recordedKeyPress.push(allBtn[i].textContent);
            var recordedKeyPressStr = recordedKeyPress.join("");
            resultToCalculate = recordedKeyPressStr;
            return displayBox.placeholder = recordedKeyPressStr;
        });
    }
}


// var allBtnArr = [zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, multiply, divide];

//identify higher and lower priority calculations
//do the higher priority calcs and then lower priority
//display the result after the equal is pressed
//if there are decimals involved go to the 7th 