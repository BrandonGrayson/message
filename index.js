// Select window element store it to hash object
const { hash } = window.location;

const message = atob(hash.replace('#', ''));

// If there is a message select add or subtract hide class 
// Present value as the message to user

if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

// select the form 

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    // Select input generate encrypted value
    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    // Designate 1st input value  as second inputs value
    const linkInput = document.querySelector('#link-input')
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
});