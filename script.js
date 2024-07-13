document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const modal = document.createElement('div');
    modal.id = 'hd-image-container';
    modal.className = 'modal';
    modal.innerHTML = `
        <img id="hd-image" src="" alt="">
        <div id="caption"></div>
        <span class="close-btn">&times;</span>
    `;
    document.body.appendChild(modal);

    const modalImg = document.getElementById('hd-image');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-btn');

    const images = [
        { src: 'images/1.jpg', hdSrc: 'images/hd/1.jpg', caption: 'First Image' },
        { src: 'images/2.jpg', hdSrc: 'images/hd/2.jpg', caption: 'Second Image' },
        // Add more images as needed
        { src: 'images/20.jpg', hdSrc: 'images/hd/20.jpg', caption: 'Twentieth Image' },
    ];

    images.forEach((image) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.caption;
        img.dataset.hdSrc = image.hdSrc;
        img.dataset.caption = image.caption;
        gallery.appendChild(img);

        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = image.hdSrc;
            captionText.innerText = image.caption;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
