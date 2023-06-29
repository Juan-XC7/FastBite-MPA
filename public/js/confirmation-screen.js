function toggleConfirmation() {
    var confirmationContainer = document.getElementById('confirmationContainer');
    confirmationContainer.style.display = confirmationContainer.style.display === 'none' ? 'block' : 'none';
}

function hideConfirmation() {
    var confirmationContainer = document.getElementById('confirmationContainer');
    confirmationContainer.style.display = 'none';
}

function confirmAction() {
    // Handle the confirmed action here
    hideConfirmation();
    alert('Confirmed!');
}