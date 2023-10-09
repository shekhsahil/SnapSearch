const apiKey = 'I4d40LXE0Q0R9dJDe4a5oEK7jMI6lpOsEIigra4VuSA';
const searchInput = document.getElementById('search-input');
const imageContainer = document.getElementById('image-container');

async function fetchImages(query) {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
    }
}

function displayImages(images) {
    imageContainer.innerHTML = '';
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.regular;
        imgElement.alt = image.alt_description;
        imageContainer.appendChild(imgElement);
    });
}

async function searchImages() {
    const query = searchInput.value;
    if (query === '') {
        alert('Please enter a search term.');
        return;
    }
    const images = await fetchImages(query);
    displayImages(images);
}
