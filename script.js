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

let copyTimeout;

function copyText() {
  var text = "eastern.owo";

  navigator.clipboard.writeText(text).then(() => {
    const element = document.getElementById('discord-link-text');
    element.textContent = '已複製 ID 到剪貼簿：eastern.owo';
  
    clearTimeout(copyTimeout);

    copyTimeout = setTimeout(() => {
      element.textContent = '可以在這裡找到我';
    }, 2000);
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
}