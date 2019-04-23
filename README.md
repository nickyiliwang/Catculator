# FCC-Calculator

This is a project for the front end certificate for the FCC course at freecodecamp.com

Criterias

The calculator has 10 buttons that are from 0 - 9, also has buttons for decimal points, equal signs, and 4 operators +, -, *, / to add, subtract, multiply and divide.

At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.

there is an element to display each time number and operators are pressed

In any order, User should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

When inputting numbers, my calculator should not allow a number to begin with multiple zeros.


When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.


I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

If 2 or more operators are entered consecutively, the operation performed should be the last operator entered.

Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

Note On Calculator Logic: It should be noted that there are two main schools of thought on calculator input logic: immediate execution logic and formula logic. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different results than ours for certain equations (see below example). As long as your math can be verified by another production calculator, please do not consider this a bug.
EXAMPLE: 3 + 5 x 6 - 2 / 4 =
Immediate Execution Logic: 11.5
Formula/Expression Logic: 32.5