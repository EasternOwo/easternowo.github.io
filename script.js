// const links = document.querySelectorAll('.social-link');
// const title = document.getElementById('social-link-title');

// links.forEach(link => {
//     link.addEventListener('mouseenter', () => {
//         title.textContent = link.getAttribute('data-link-title');
//     });

//     link.addEventListener('mouseleave', () => {
//         title.textContent = '';
//     });
// });

const footnote = document.querySelector('footer');
const year = new Date().getFullYear();

footnote.textContent = `© ${year} 東`
