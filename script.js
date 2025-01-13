document.addEventListener('DOMContentLoaded', function() {
    fetch('links.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('linksContainer');
        data.links.forEach(link => {
            const linkElement = document.createElement('div');
            linkElement.className = 'link';

            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            anchor.target = '_blank';  // Open links in a new tab

            const description = document.createElement('div');
            description.className = 'description';
            description.textContent = link.description;

            linkElement.appendChild(anchor);
            linkElement.appendChild(description);
            container.appendChild(linkElement);
        });
    })
    .catch(error => console.error('Error loading the links:', error));
});