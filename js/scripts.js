function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = divide(number1, number2);
alert(result);


//THESE ARE ADDITIONAL JAVASCFIPT PRACTICE PROJECTS TO MOVE TO A DIFFERENT FILE LATER
//farenheit converter
function convertFtoC(farenheitTemp) {
  return (farenheitTemp - 32) * .5556;
  }
const input = prompt("Enter temp in Farenheit");
alert("The temp in Celcius equals: " + convertFtoC(input) + ".");

//celcius converter
function convertCtoF(celsiusTemp){
	return (celsiusTemp * 1.8) + 32;
}
const input = prompt("Enter temp in Celsius:");
alert("The temp in Farenheit equals: " + convertCtoF(input) + ".");



//cooking unit converters
function convertGtoL(gallons) {
  return (gallons * 3.78541178);
}
const input = prompt("Enter volume in gallons:");
alert("The volume in liters is: " + convertGtoL(input));