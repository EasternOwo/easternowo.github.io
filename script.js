const content = document.getElementById("content");

async function loadPage(page, addToHistory = true) {
  try {
    const response = await fetch(`pages/${page}.html`);
    const html = await response.text();
    content.innerHTML = html;

    if (addToHistory) {
      history.pushState({ page }, "", `#${page}`);
    }

    const titleText = document.querySelector(".data-title[data-title]").getAttribute('data-title');
    const title = document.getElementById('page-title');
    if (titleText && title) {
      title.textContent = titleText;
    }
  } catch {
    content.innerHTML = "<h2>Page not found</h2>";
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

// Handle navigation clicks
document.querySelectorAll("button[data-page]").forEach(button => {
  button.addEventListener("click", () => {
    // loadPage(button.dataset.page); // alternative
    loadPage(button.getAttribute('data-page'));
  });
});

// Handle Back / Forward buttons
window.addEventListener("popstate", event => {
  const page = event.state?.page || "info";
  loadPage(page, false);
});

// Load page on initial visit or refresh
const initialPage = location.hash.replace("#", "") || "info";
loadPage(initialPage, false);



// Change link title when hovered
content.addEventListener('mouseover', event => {
  const link = event.target.closest('.social-link');
  if (!link) return;

  const title = document.getElementById('social-link-title');
  title.textContent = link.getAttribute('link-name');
});

content.addEventListener('mouseout', event => {
  const link = event.target.closest('.social-link');
  if (!link) return;

  const title = document.getElementById('social-link-title');
  title.textContent = '';
});