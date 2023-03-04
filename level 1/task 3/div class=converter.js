const convertBtn = document.getElementById('convertBtn');

convertBtn.addEventListener('click', function() {
  const input = document.getElementById('input').value;
  const inputUnit = document.getElementById('inputUnit').value;
  const outputUnit = document.getElementById('outputUnit').value;
  let result;

  if (inputUnit === 'Celsius' && outputUnit === 'Fahrenheit') {
    result = input * 9 / 5 + 32;
  } else if (inputUnit === 'Celsius' && outputUnit === 'Kelvin') {
    result = parseFloat(input) + 273.15;
  } else if (inputUnit === 'Fahrenheit' && outputUnit === 'Celsius') {
    result = (input - 32) * 5 / 9;
  } else if (inputUnit === 'Fahrenheit' && outputUnit === 'Kelvin') {
    result = (input - 32) * 5 / 9 + 273.15;
  } else if (inputUnit === 'Kelvin' && outputUnit === 'Celsius') {
    result = parseFloat(input) - 273.15;
  } else if (inputUnit === 'Kelvin' && outputUnit === 'Fahrenheit') {
    result = (input - 273.15) * 9 / 5 + 32;
  } else {
    result = input;
  }

  document.getElementById('result').innerHTML = `${input} ${inputUnit} = ${result.toFixed(2)} ${outputUnit}`;
});
