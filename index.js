// Select the element with the ID "myButton"
const myButton = document.querySelector('#myButton');

// Add a click event listener to the button
myButton.addEventListener('click', () => {
  // When the button is clicked, log a message to the console
  console.log('Button clicked!');
});

// Select the element with the ID "myForm"
const myForm = document.querySelector('#myForm');

// Add a submit event listener to the form
myForm.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the value of the input with the ID "myInput"
  const inputValue = document.querySelector('#myInput').value;

  // Log the input value to the console
  console.log(`Input value: ${inputValue}`);
});
