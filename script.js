// List of image filenames and descriptions
const images = [
    { filename: 'images/1.jpg', description: 'Description of Image 1' },
    { filename: 'images/2.jpg', description: 'Description of Image 2' },
    { filename: 'images/3.jpg', description: 'Description of Image 3' },
    { filename: 'images/4.jpg', description: 'Description of Image 4' },
    { filename: 'images/5.jpg', description: 'Description of Image 5' },
    { filename: 'images/6.jpg', description: 'Description of Image 6' },
    { filename: 'images/7.jpg', description: 'Description of Image 7' },
    { filename: 'images/8.jpg', description: 'Description of Image 8' },
    { filename: 'images/9.jpg', description: 'Description of Image 9' },
    { filename: 'images/10.jpg', description: 'Description of Image 10' },
    { filename: 'images/11.jpg', description: 'Description of Image 11' },
    { filename: 'images/12.jpg', description: 'Description of Image 12' },
    { filename: 'images/13.jpg', description: 'Description of Image 13' },
    { filename: 'images/14.jpg', description: 'Description of Image 14' },
    { filename: 'images/15.jpg', description: 'Description of Image 15' },
    { filename: 'images/16.jpg', description: 'Description of Image 16' },
    { filename: 'images/17.jpg', description: 'Description of Image 17' },
    { filename: 'images/18.jpg', description: 'Description of Image 18' },
    { filename: 'images/19.jpg', description: 'Description of Image 19' },
    { filename: 'images/20.jpg', description: 'Description of Image 20' }
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
window.onload = populateGallery;
