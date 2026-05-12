// In your blank JavaScript file, declare three variables that hold references to the input, button, and list elements.
//            <input type="text" id="favchap" placeholder="Alma 5">
//            <button type="submit">Add Chapter</button>
//            <ul id="list"></ul>


const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); 

button.addEventListener('click', () => {

    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);

        list.append(li);

        input.value = '';
        input.focus();
        
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });
    }
});