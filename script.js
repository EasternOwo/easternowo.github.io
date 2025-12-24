const links = document.querySelectorAll('.social-link');
const title = document.getElementById('social-link-title');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        title.textContent = link.getAttribute('data-link-title');
    });

    link.addEventListener('mouseleave', () => {
        title.textContent = '';
    });
});