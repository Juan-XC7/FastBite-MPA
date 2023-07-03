function toggleConfirmation() {
    var confirmationContainer = document.getElementById('confirmationContainer');
    confirmationContainer.style.display = confirmationContainer.style.display === 'none' ? 'block' : 'none';
}

function hideConfirmation() {
    var confirmationContainer = document.getElementById('confirmationContainer');
    confirmationContainer.style.display = 'none';
}

function confirmAction() {
    hideConfirmation();
    alert('Confirmed!');
}