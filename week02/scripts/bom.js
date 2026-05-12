// In your blank JavaScript file, declare three variables that hold references to the input, button, and list elements.
//            <input type="text" id="favchap" placeholder="Alma 5">
//            <button type="submit">Add Chapter</button>
//            <ul id="list"></ul>




// 1. Ensure you select the actual UL or OL element
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // Change 'ul' to match your HTML

button.addEventListener('click', () => {
    // Check if input is empty to avoid adding blank items
    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        
        // Use the variable li, not the string 'li'
        list.append(li);

        // Clear the input and refocus for the next entry
        input.value = '';
        input.focus();
        
        // Bonus: Add functionality to the delete button
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });
    }
});