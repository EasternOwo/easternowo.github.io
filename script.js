const links = document.querySelectorAll('.link');
const title = document.getElementById('link-title');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        title.textContent = link.getAttribute('link-name');
    });

    link.addEventListener('mouseleave', () => {
        title.textContent = '';
    });
});