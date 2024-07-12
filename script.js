document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { src: 'images/1.jpg', hdSrc: 'images/hd/1.jpg', caption: 'First Image' },
        { src: 'images/2.jpg', hdSrc: 'images/hd/2.jpg', caption: 'Second Image' },
        { src: 'images/3.jpg', hdSrc: 'images/hd/3.jpg', caption: 'Third Image' },
        { src: 'images/4.jpg', hdSrc: 'images/hd/4.jpg', caption: 'Fourth Image' },
        { src: 'images/5.jpg', hdSrc: 'images/hd/5.jpg', caption: 'Fifth Image' },
        { src: 'images/6.jpg', hdSrc: 'images/hd/6.jpg', caption: 'Sixth Image' },
        { src: 'images/7.jpg', hdSrc: 'images/hd/7.jpg', caption: 'Seventh Image' },
        { src: 'images/8.jpg', hdSrc: 'images/hd/8.jpg', caption: 'Eighth Image' },
        { src: 'images/9.jpg', hdSrc: 'images/hd/9.jpg', caption: 'Ninth Image' },
        { src: 'images/10.jpg', hdSrc: 'images/hd/10.jpg', caption: 'Tenth Image' },
        { src: 'images/11.jpg', hdSrc: 'images/hd/11.jpg', caption: 'Eleventh Image' },
        { src: 'images/12.jpg', hdSrc: 'images/hd/12.jpg', caption: 'Twelfth Image' },
        { src: 'images/13.jpg', hdSrc: 'images/hd/13.jpg', caption: 'Thirteenth Image' },
        { src: 'images/14.jpg', hdSrc: 'images/hd/14.jpg', caption: 'Fourteenth Image' },
        { src: 'images/15.jpg', hdSrc: 'images/hd/15.jpg', caption: 'Fifteenth Image' },
        { src: 'images/16.jpg', hdSrc: 'images/hd/16.jpg', caption: 'Sixteenth Image' },
        { src: 'images/17.jpg', hdSrc: 'images/hd/17.jpg', caption: 'Seventeenth Image' },
        { src: 'images/18.jpg', hdSrc: 'images/hd/18.jpg', caption: 'Eighteenth Image' },
        { src: 'images/19.jpg', hdSrc: 'images/hd/19.jpg', caption: 'Nineteenth Image' },
        { src: 'images/20.jpg', hdSrc: 'images/hd/20.jpg', caption: 'Twentieth Image' },
    ];

    let currentIndex = 0;

    const gallery = document.getElementById('gallery');
    const overlay = document.getElementById('overlay');
    const largeImage = document.getElementById('large-image');
    const imageDetails = document.getElementById('image-details');
    const closeBtn = document.getElementById('close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.caption;
        img.className = 'thumbnail';
        img.loading = 'lazy';
        img.addEventListener('click', () => showImage(index));
        gallery.appendChild(img);
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('show');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    });

    prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
    nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

    function showImage(index) {
        if (index < 0) {
            index = images.length - 1;
        } else if (index >= images.length) {
            index = 0;
        }
        currentIndex = index;
        const image = images[index];
        largeImage.src = image.hdSrc;
        largeImage.alt = image.caption;
        imageDetails.innerHTML = `<h2>${image.caption}</h2>`;
        overlay.style.display = 'flex';
        requestAnimationFrame(() => overlay.classList.add('show'));
    }
});
