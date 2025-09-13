// Get references to the input, button, and list
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener to the button
button.addEventListener('click', () => {
  // Prevent empty input
  if (input.value.trim() === '') {
    input.focus();
    return;
  }

  // Create list item and delete button
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  // Set values
  li.textContent = input.value;
  deleteButton.textContent = '❌';

  // Add delete functionality
  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
  });

  // Build and display
  li.append(deleteButton);
  list.append(li);

  // Reset input field
  input.value = '';
  input.focus();
});
