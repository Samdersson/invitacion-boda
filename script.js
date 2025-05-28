document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.getElementById('openButton');
    const envelope = document.querySelector('.envelope');

    openButton.addEventListener('click', () => {
        envelope.classList.add('open');
        // Redirect to the second page after the envelope animation completes
        setTimeout(() => {
            window.location.href = 'invitacion.html';
        }, 1000); // Match the CSS transition duration
    });
});
