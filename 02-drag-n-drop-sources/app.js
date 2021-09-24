const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

function dragstart(event) {
    /* event.target - Вернет объект который мы перетаскиваем */
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), '0')
}

function dragend(event) {
    event.target.classList.remove('hold','hide')
}

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)


function dragover(event) {
    event.preventDefault()    
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function drop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}


for (const placeholder of placeholders) {
    /* Вызывается когда курсор мыши наведен на элемент при перетаскивании */
    placeholder.addEventListener('dragover', dragover)
    /* Вызывается когда перетаскиваемый элемент достигает конечного элемента. */
    placeholder.addEventListener('dragenter', dragenter)
    /* Вызывается когда курсор мыши покидает пределы перетаскиваемого элемента */
    placeholder.addEventListener('dragleave', dragleave)
    /* Вызывается когда происходит drop элемента*/
    placeholder.addEventListener('drop', drop)
}