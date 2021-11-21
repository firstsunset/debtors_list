let addName = document.querySelector('.name');
let addValue = document.querySelector('.number');
let addButton = document.querySelector('.add');
let list = document.querySelector('.list');

let debtorList = [];

if (localStorage.getItem('debtor')) {
    debtorList = JSON.parse(localStorage.getItem('debtor'));
    displayMessage();
}

addButton.addEventListener('click', function(){
    
    let newDebtor = {
        name: addName.value,
        value: addValue.value,
        checked: false
    }
    addName.value = ''
    addValue.value = ''
    debtorList.push(newDebtor);
    displayMessage();
    localStorage.setItem('debtor', JSON.stringify(debtorList));

    
    
});

function displayMessage(){
    let displayMessage = '';
    debtorList.forEach(function(item, i){
        displayMessage += `
       <div class='row'>
        <label for='item_${i}'>${item.name}</label>
        <label for='item_${i}'>${item.value}</label>
        <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
       </div>
        `;
        list.innerHTML = displayMessage;
    });
}

list.addEventListener('change', function(event){
    let idInput = event.target.getAttribute('id');
    let valueLabel = list.querySelector('[for=' + idInput +']').innerHTML;

    debtorList.forEach(function(item){
        if (item.name === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('debtor', JSON.stringify(debtorList));

        }
    });
    console.log('valueLabel:', valueLabel);
});





