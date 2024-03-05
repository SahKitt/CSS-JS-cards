// Get button class
var buttons = document.querySelectorAll('.read-more-btn');

//Event listeners 
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var modalId = button.getAttribute('data-modal-id');
        var modal = document.getElementById(modalId); 
        // Display the modal
        modal.style.display = 'block';
    });
});

// Closing button(X) class
var closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        var modal = closeButton.parentElement.parentElement;
        // Hide the modal
        modal.style.display = 'none';
    });
});
