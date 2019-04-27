//Display box
var displayBox = document.querySelector("#display");
// Numbers
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
//operator
var plus = document.getElementById("add");
var minus = document.querySelector("#subtract");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
//others
var equal = document.querySelector("#equals");
var clear = document.querySelector("#clean");
var decimals = document.querySelector("#decimal");
//all
var calcNum = document.getElementsByClassName("number");
var calcOperator = document.getElementsByClassName("operator");
var allBtn = document.querySelectorAll(".button");

//Logic
//identify higher and lower priority calculations
//do the higher priority calcs and then lower priority
//display the result after the equal is pressed
//if there are decimals involved go to the 7th

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
  equal.addEventListener("click", function() {
    isEqualTo = true;
    calculate();
  });
}
function calculate() {
  displayBox.placeholder = eval(resultToCalculate);
}
function clearAll() {
  clear.addEventListener("click", function() {
    isEqualTo = false;
    displayBox.placeholder = "0";
    resultToCalculate = "0";
  });
}
function recordAllKeyPresses() {
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener("click", function() {
      recordedKeyPress.push(allBtn[i].textContent);
      var recordedKeyPressStr = recordedKeyPress.join("");
      resultToCalculate = recordedKeyPressStr;
      return (displayBox.placeholder = recordedKeyPressStr);
    });
  }
}
