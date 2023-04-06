let calculator = document.getElementById('calculator_input');

let newValue = document.getElementById('delete');

let switch_btn = document.getElementById('switch-btn');

function deleteDigit() {
    calculator.value = calculator_input.value.slice(0, -1);
}
  

// const deleteButton = document.getElementById('delete');
// deleteButton.addEventListener('click', deleteLastChar);

// function deleteLastChar() {
//   const currentValue = display.value;
//   if (currentValue.length > 0) {
//     const newValue = currentValue.slice(0, -1);
//     display.value = newValue;
//   }
// }
const toggleModeButton = document.getElementById("switch-theme");

toggleModeButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});
