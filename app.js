let input = document.getElementById('input')
input.focus()
let inputValue = document.getElementById('inputValue')
inputValue.focus()
let addButton = document.querySelector('.add')
let list = document.getElementById('list')

if (localStorage.length != 0) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let template = `${localStorage.getItem(key)}`
        list.insertAdjacentHTML('afterbegin', template)
    }
        
}


addButton.addEventListener('click', () => {
    let text = input.value
    let number = inputValue.value 
    let template = `<div data-id="${++localStorage.length}" class="row"><div>${text}</div><div>${number}</div><input type="checkbox" class="close"></div>`
    list.insertAdjacentHTML('afterbegin', template)
    localStorage.setItem(`${++localStorage.length}`, template)
    input.value = ''
    inputValue.value = ''
  
})





