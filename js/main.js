document.addEventListener('DOMContentLoaded', () => {
    const emailme = 'yass18.98@gmail.com';
    const emailLink = document.getElementById('email-link');

    if (!emailLink) return;

    emailLink.addEventListener('click', (e) => {
        e.preventDefault();
    
        navigator.clipboard.writeText(emailme)
        .then(() => alert('Dirección de correo copiada al portapapeles'))
        .catch(() => {
            console.error('Failed to copy email: ', err);
            alert('Failed to copy email address. Please try again.');
        })
    
    });

})