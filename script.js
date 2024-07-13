document.addEventListener('DOMContentLoaded', () => {
    const images = [
        {src: 'images/1.jpg', hdSrc: 'images/hd/1.jpg', caption: 'First Image'},
        {src: 'images/2.jpg', hdSrc: 'images/hd/2.jpg', caption: 'Second Image'},
        {src: 'images/3.jpg', hdSrc: 'images/hd/3.jpg', caption: 'Third Image'},
        {src: 'images/4.jpg', hdSrc: 'images/hd/4.jpg', caption: 'Fourth Image'},
        {src: 'images/5.jpg', hdSrc: 'images/hd/5.jpg', caption: 'Fifth Image'},
        {src: 'images/6.jpg', hdSrc: 'images/hd/6.jpg', caption: 'Sixth Image'},
        {src: 'images/7.jpg', hdSrc: 'images/hd/7.jpg', caption: 'Seventh Image'},
        {src: 'images/8.jpg', hdSrc: 'images/hd/8.jpg', caption: 'Eighth Image'},
        {src: 'images/9.jpg', hdSrc: 'images/hd/9.jpg', caption: 'Ninth Image'},
        {src: 'images/10.jpg', hdSrc: 'images/hd/10.jpg', caption: 'Tenth Image'},
        {src: 'images/11.jpg', hdSrc: 'images/hd/11.jpg', caption: 'Eleventh Image'},
        {src: 'images/12.jpg', hdSrc: 'images/hd/12.jpg', caption: 'Twelfth Image'},
        {src: 'images/13.jpg', hdSrc: 'images/hd/13.jpg', caption: 'Thirteenth Image'},
        {src: 'images/14.jpg', hdSrc: 'images/hd/14.jpg', caption: 'Fourteenth Image'},
        {src: 'images/15.jpg', hdSrc: 'images/hd/15.jpg', caption: 'Fifteenth Image'},
        {src: 'images/16.jpg', hdSrc: 'images/hd/16.jpg', caption: 'Sixteenth Image'},
        {src: 'images/17.jpg', hdSrc: 'images/hd/17.jpg', caption: 'Seventeenth Image'},
        {src: 'images/18.jpg', hdSrc: 'images/hd/18.jpg', caption: 'Eighteenth Image'},
        {src: 'images/19.jpg', hdSrc: 'images/hd/19.jpg', caption: 'Nineteenth Image'},
        {src: 'images/20.jpg', hdSrc: 'images/hd/20.jpg', caption: 'Twentieth Image'}
    ];

    const gallery = document.getElementById('gallery');

    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.dataset.hdSrc = image.hdSrc;
        imgElement.dataset.caption = image.caption;
        imgElement.dataset.index = index;
        gallery.appendChild(imgElement);
    });

    gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const hdSrc = e.target.dataset.hdSrc;
            const caption = e.target.dataset.caption;
            const hdImageContainer = document.createElement('div');
            hdImageContainer.id = 'hd-image-container';
            hdImageContainer.style.display = 'flex';

            const hdImage = document.createElement('img');
            hdImage.src = hdSrc;
            hdImageContainer.appendChild(hdImage);

            const captionElement = document.createElement('div');
            captionElement.id = 'caption';
            captionElement.textContent = caption;
            hdImageContainer.appendChild(captionElement);

            document.body.appendChild(hdImageContainer);

            hdImageContainer.addEventListener('click', () => {
                hdImageContainer.style.display = 'none';
                document.body.removeChild(hdImageContainer);
            });
        }
    });
});
