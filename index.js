const { hash } = window.location;

console.log(atob(hash.replace('#', '')));

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