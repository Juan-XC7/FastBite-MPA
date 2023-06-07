function moveUp() {
    var placeholder = event.target.nextElementSibling;
    placeholder.classList.add('move-up');
}

function moveDown() {
    var input = event.target;
    var placeholder = input.nextElementSibling;
    if (input.value === '') {
        placeholder.classList.remove('move-up');
    }
}