const nameInput = document.getElementById('name-input');
const numberInput = document.getElementById('number-input');
const contactList = document.getElementById('contact-list');

document.getElementById('addBtn').addEventListener('click', function() {

    let name = nameInput.value;
    let number = numberInput.value;

    let newContact = document.createElement('li');

    let nameField = document.createElement('input');
    nameField.value = name;
    nameField.disabled = true;
    
    let numberField = document.createElement('input');
    numberField.value = number;
    numberField.disabled = true;

    let editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';

    editButton.addEventListener('click', function(){
    
        if (nameField.disabled) {
            nameField.disabled = false;
            numberField.disabled = false;
            editButton.innerHTML = 'Save';
        } else {
            nameField.disabled = true;
            numberField.disabled = true;
            editButton.innerHTML = 'Edit';
        }
    });

    deleteButton.addEventListener('click', function(){
        newContact.remove();
    });

    newContact.appendChild(nameField);
    newContact.appendChild(numberField);
    newContact.appendChild(editButton);
    newContact.appendChild(deleteButton);

    contactList.appendChild(newContact);


})
