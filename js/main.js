async function loadComponent(id, path) {
    try {
        const response = await fetch(path);
        const html = await response.text();
        const element = document.getElementById(id);

        if (!element) {
            console.warn(`Elemento con id "${id}" no encontrado.`);
            return;
        }

        element.innerHTML = html;
    } catch (error) {
        console.error('Error cargando componente:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'components/header.html');
    loadComponent('footer', 'components/footer.html');
    loadComponent('main-content', 'components/home.html');
})

document.addEventListener('click', (e) => {
    if (e.target.id === 'email-link') {
        e.preventDefault();
        navigator.clipboard.writeText('yass18.98@gmail.com')
            .then(() => alert('Correo electrónico copiado al portapapeles'))
            .catch(() => alert('No se pudo copiar el correo electrónico'))
            .catch((error) => console.error('Error al copiar el correo electrónico:', error));
    }    
});