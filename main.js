// Adiciona valor ao display
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

// Limpa o display
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Calcula o resultado usando math.js
function calculateResult() {
  let display = document.getElementById('display');
  try {
    display.value = math.evaluate(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
