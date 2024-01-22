
function loadHeader() {
    fetch('../pageParts/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch header');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(err => console.error('Failed to load header: ', err));
}

function loadFooter() {
    fetch('../pageParts/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch footer');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(err => console.error('Failed to load footer: ', err));
}

document.addEventListener('DOMContentLoaded', loadHeader);
document.addEventListener('DOMContentLoaded', loadFooter);