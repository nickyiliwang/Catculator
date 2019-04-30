//Display box
var displayBox = document.querySelector("#display");
//Buttons Variables
var equal = document.querySelector("#equals");
var clear = document.querySelector("#clear");
var numbers = document.querySelectorAll(".numbers");
var operators = document.querySelectorAll(".operator");
var cats = document.querySelector(".cats");
var decimal = document.querySelector("#decimal");
//Global Variables
var recordedKeyPressArr = [];
var resultToCalculate;
var operatorCount = 0;
var decimalCount = 0;

onStart();

function onStart() {
  recordAllKeyPresses();
  iWantAnswersNowDammit();
  getThisGarbageOuttaHere();
  giveMeCatsDammit();
}

function iWantAnswersNowDammit() {
  equal.addEventListener("click", function() {
    var result = math.eval(resultToCalculate);
    displayBox.value = result;
    recordedKeyPressArr = [result];
  });
}

function recordAllKeyPresses() {
  recordDecimals();
  recordNumbers();
  recordOperators();
}

function recordNumbers() {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
      recordedKeyPressArr.push(numbers[i].textContent);
      recordedKeyPressStr = recordedKeyPressArr.join("");
      resultToCalculate = recordedKeyPressStr;
      operatorCount = 0;
      reEvaluateInput();
      reEvaluateOperators();
    });
  }
}

function recordDecimals() {
  decimal.addEventListener("click", function() {
    decimalCount++;
    if (decimalCount <= 1) {
      recordedKeyPressArr.push(decimal.textContent);
      recordedKeyPressStr = recordedKeyPressArr.join("");
      resultToCalculate = recordedKeyPressStr;
      reEvaluateInput();
    }
  });
}

function recordOperators() {
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function() {
      recordedKeyPressArr.push(operators[i].textContent);
      recordedKeyPressStr = recordedKeyPressArr.join("");
      resultToCalculate = recordedKeyPressStr;
      reEvaluateOperators();
      operatorCount++;
      decimalCount = 0;
      reEvaluateInput();
      reEvaluateOperators();
    });
  }
}

function reEvaluateOperators() {
  if (operatorCount == 2) {
    recordedKeyPressArr = recordedKeyPressArr
      .slice(0, recordedKeyPressArr.length - 2)
      .concat(recordedKeyPressArr.pop());
  }
}

function reEvaluateInput() {
  var twoDecimals = "..";
  resultToCalculate === "00"
    ? (recordedKeyPressArr = [])
    : recordedKeyPressStr.indexOf(twoDecimals) > -1
    ? (recordedKeyPressArr = recordedKeyPressArr.slice(
        0,
        recordedKeyPressArr.length - 1
      ))
    : (displayBox.value = resultToCalculate);
}

function getThisGarbageOuttaHere() {
  clear.addEventListener("click", function() {
    displayBox.value = 0;
    decimalCount = 0;
    operatorCount = 0;
    recordedKeyPressArr = [];
  });
}

function giveMeCatsDammit() {
  var catArr = [
    "url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)",
    "url(https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)",
    "url(https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)",
    "url(https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)",
    "url(https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)",
    "url(https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)",
    "url(https://images.unsplash.com/photo-1457410129867-5999af49daf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)",
    "url(https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)",
    "url(https://images.unsplash.com/photo-1526509177308-2073fcfbf0b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)",
    "url(https://images.unsplash.com/photo-1479065476818-424362c3a854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)"
  ];
  cats.addEventListener("click", function() {
    document.body.style.backgroundImage = catArr[math.floor(math.random(10))];
  });
}
