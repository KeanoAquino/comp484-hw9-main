// ==========================
// Part 1: Date Display
// ==========================

const today = new Date();
const year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

if (day < 10) day = "0" + day;
if (month < 10) month = "0" + month;

document.querySelector("#dateOutput").textContent="Today is "+month+"/"+day+"/"+year;

// ==========================
// Part 2: Number Conversion
// ==========================

const num1 = "44";
const num2 = "23";
const dec = "3.14";
const text = "hello";

const output1 = "Original: '" + num1 + "' -> Converted: " + Number(num1) + " -> isNan: " + Number.isNaN(Number(num1)) + " -> isInteger: " + Number.isInteger(Number(num1));
const output2 = "Original: '" + num2 + "' -> Converted: " + Number(num2) + " -> isNan: " + Number.isNaN(Number(num2)) + " -> isInteger: " + Number.isInteger(Number(num2));
const output3 = "Original: '" + dec + "' -> Converted: " + Number(dec) + " -> isNan: " + Number.isNaN(Number(dec)) + " -> isInteger: " + Number.isInteger(Number(dec));
const output4 = "Original: '" + text + "' -> Converted: " + Number(text) + " -> isNan: " + Number.isNaN(Number(text)) + " -> isInteger: " + Number.isInteger(Number(text));

document.querySelector("#numberConversionOutput").innerHTML=output1+"<br>"+output2+"<br>"+output3+"<br>"+output4;

// ==========================
// Part 3: Math & Formatting
// ==========================

const number1 = 34;
const number2 = 90;
const number3 = 55.123;

const addResult = number1 + number2;
let multiplyResult = number1 * number3;

document.querySelector("#mathOutput").innerHTML="Addition: " + number1 + " + " + number2 + " = " + addResult + "<br>Multiplication: " + number1 + " x " + number3 + " = " + multiplyResult.toFixed(2);

// ==========================
// Part 4: Conditionals
// ==========================

if (Number.isInteger(addResult)){
    document.querySelector("#mathOutput").innerHTML += "<br> Addition result is an integer";
}
else {
    document.querySelector("#mathOutput").innerHTML += "<br> Addition result is NOT an integer";
}

if (day > 1){
    document.querySelector("#dateOutput").innerHTML += "<br> It is NOT the first day of the month";
}
else {
    document.querySelector("#dateOutput").innerHTML += "<br> It is the first day of the month";
}