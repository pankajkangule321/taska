function insert(num) {
  document.getElementById('input').value += num;
}

function clearInput() {
  document.getElementById('input').value = '';
}

function calculate() {
  var input = document.getElementById('input').value;
  var result = eval(input);
  document.getElementById('input').value = result;
}
