document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { filename: '1.jpg', description: 'Description of Image 1' },
        { filename: '2.jpg', description: 'Description of Image 2' },
        { filename: '3.jpg', description: 'Description of Image 3' },
        { filename: '4.jpg', description: 'Description of Image 4' },
        { filename: '5.jpg', description: 'Description of Image 5' },
        { filename: '6.jpg', description: 'Description of Image 6' },
        { filename: '7.jpg', description: 'Description of Image 7' },
        { filename: '8.jpg', description: 'Description of Image 8' },
        { filename: '9.jpg', description: 'Description of Image 9' },
        { filename: '10.jpg', description: 'Description of Image 10' },
        { filename: '11.jpg', description: 'Description of Image 11' },
        { filename: '12.jpg', description: 'Description of Image 12' },
        { filename: '13.jpg', description: 'Description of Image 13' },
        { filename: '14.jpg', description: 'Description of Image 14' },
        { filename: '15.jpg', description: 'Description of Image 15' },
        { filename: '16.jpg', description: 'Description of Image 16' },
        { filename: '17.jpg', description: 'Description of Image 17' },
        { filename: '18.jpg', description: 'Description of Image 18' },
        { filename: '19.jpg', description: 'Description of Image 19' },
        { filename: '20.jpg', description: 'Description of Image 20' }
    ];

    const gallery = document.querySelector('.gallery');

    // Function to create image elements and add them to the gallery
    function populateGallery() {
        images.forEach((image) => {
            const img = document.createElement('img');
            img.src = `images/${image.filename}`;
            img.alt = image.description;
            img.onclick = () => openImage(img.src);
            gallery.appendChild(img);
        });
    }

    // Function to open the image in a new tab/window
    function openImage(imageUrl) {
        window.open(imageUrl, '_blank');
    }

    // Populate the gallery when the page loads
    populateGallery();
});
