//Business logic
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

//User interface
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });

  $(document).ready(function() {
    $("form#subtract").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#subtract1").val());
      const number2 = parseInt($("#subtract2").val());
      const result = subtract(number1, number2);
      $("#subtractoutput").text(result);
    });
  });

  $(document).ready(function() {
    $("form#multiply").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#multiply1").val());
      const number2 = parseInt($("#multiply2").val());
      const result = multiply(number1, number2);
      $("#multiplyoutput").text(result);
    });
  });

  $(document).ready(function() {
    $("form#divide").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#divide1").val());
      const number2 = parseInt($("#divide2").val());
      const result = divide(number1, number2);
      $("#divideoutput").text(result);
    });
  });
});