//Display box
var displayBox = document.querySelector("#display");
//Buttons Variables
var equal = document.querySelector("#equals");
var clear = document.querySelector("#clean");
var allBtn = document.querySelectorAll(".button");
var cats = document.querySelector(".cats");
//Global Variables
var recordedKeyPress = [];
var resultToCalculate;

onStart();

function onStart() {
  recordAllKeyPresses();
  iWantAnswersNowDammit();
  getThisGarbageOuttaHere();
  giveMeCatsDammit();
}

function iWantAnswersNowDammit() {
  equal.addEventListener("click", function() {
    displayBox.placeholder = math.eval(resultToCalculate);
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

function getThisGarbageOuttaHere() {
  clear.addEventListener("click", function() {
    displayBox.placeholder = "0";
    recordedKeyPress = [];
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
