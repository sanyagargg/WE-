// Function to toggle collapsible sections
document.querySelectorAll('h2, h3').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        if (content.classList.contains('active')) {
            content.classList.remove('active');
        } else {
            content.classList.add('active');
        }
    });
});

// Auto-generate Table of Contents
const tocList = document.getElementById('tocList');
document.querySelectorAll('h2').forEach(header => {
    const id = header.parentElement.getAttribute('id');
    const tocItem = document.createElement('li');
    tocItem.innerHTML = `<a href="#${id}">${header.textContent}</a>`;
    tocList.appendChild(tocItem);
});
