document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content-wrapper">
            <img id="modal-img" class="modal-content" src="" alt="">
            <span id="caption" class="caption"></span>
            <span class="close">&times;</span>
            <div id="spinner" class="spinner"></div>
        </div>
    `;
    document.body.appendChild(modal);

    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    const spinner = document.getElementById('spinner');

    // Array of image objects
    const images = [
        { src: 'images/1.jpg', hdSrc: 'images/hd/1.jpg', caption: 'First Image' },
        { src: 'images/2.jpg', hdSrc: 'images/hd/2.jpg', caption: 'Second Image' },
        // Add more images as needed
        { src: 'images/20.jpg', hdSrc: 'images/hd/20.jpg', caption: 'Twentieth Image' },
    ];

    // Generate image elements
    images.forEach((image) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.caption;
        img.dataset.hdSrc = image.hdSrc;
        img.dataset.caption = image.caption;
        gallery.appendChild(img);

        img.addEventListener('click', () => {
            spinner.style.display = 'block'; // Show spinner while image is loading
            modal.style.display = 'flex'; // Show the modal
            modalImg.src = image.hdSrc;
            captionText.innerText = image.caption;
            modalImg.onload = () => {
                spinner.style.display = 'none'; // Hide spinner when image is loaded
            };
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
