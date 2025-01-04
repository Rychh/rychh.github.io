// Load publications.json and render publications
fetch('publications.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('publications-container');
        data.forEach(publication => {
            const div = document.createElement('div');
            div.className = 'publication';
            div.innerHTML = `
                <h3>${publication.project_name}</h3>
                <p><strong>Co-authors:</strong> ${publication.co_authors.join(', ')}</p>
                <p>${publication.short_description}</p>
                <p><strong>Conference:</strong> <a href="${publication.conference_link}" target="_blank">${publication.conference_name}</a> (${publication.publication_year})</p>
                <p><a href="${publication.publication_link}" target="_blank">Read more</a></p>
            `;
            container.appendChild(div);
        });
    })
    .catch(error => console.error('Error loading publications:', error));
