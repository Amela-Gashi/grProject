document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.btn-warning');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your interest! More information will be available soon.');
        });
    });
});







