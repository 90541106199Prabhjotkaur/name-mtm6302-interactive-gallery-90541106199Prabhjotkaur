document.addEventListener('DOMContentLoaded', () => {
    const images = [
                        
                          {src:'images/1.jpg',hdSrc:'images/hd/1.jpeg', caption: 'First image'},      
 {src:'images/2.jpg',hdSrc:'images/hd/2.jpeg', caption: 'First image'},      
 {src:'images/3.jpg',hdSrc:'images/hd/3.jpeg', caption: 'First image'},      
 {src:'images/4.jpg',hdSrc:'images/hd/4.jpeg', caption: 'First image'},      
 {src:'images/5.jpg',hdSrc:'images/hd/5.jpeg', caption: 'First image'},      
 {src:'images/6.jpg',hdSrc:'images/hd/6.jpeg', caption: 'First image'},      
 {src:'images/7.jpg',hdSrc:'images/hd/7.jpeg', caption: 'First image'},      
 {src:'images/8.jpg',hdSrc:'images/hd/8.jpeg', caption: 'First image'},      
 {src:'images/9.jpg',hdSrc:'images/hd/9.jpeg', caption: 'First image'},      
 {src:'images/10.jpg',hdSrc:'images/hd/10.jpeg', caption: 'First image'},      
 {src:'images/11.jpg',hdSrc:'images/hd/11.jpeg', caption: 'First image'},      
 {src:'images/12.jpg',hdSrc:'images/hd/12.jpeg', caption: 'First image'},      
 {src:'images/13.jpg',hdSrc:'images/hd/13.jpeg', caption: 'First image'},      
 {src:'images/14.jpg',hdSrc:'images/hd/14.jpeg', caption: 'First image'},      
 {src:'images/15.jpg',hdSrc:'images/hd/15.jpeg', caption: 'First image'},      
 {src:'images/16.jpg',hdSrc:'images/hd/16.jpeg', caption: 'First image'},      
 {src:'images/17.jpg',hdSrc:'images/hd/17.jpeg', caption: 'First image'},      
 {src:'images/18.jpg',hdSrc:'images/hd/18.jpeg', caption: 'First image'},      
 {src:'images/19.jpg',hdSrc:'images/hd/19.jpeg', caption: 'First image'},      
 {src:'images/20.jpg',hdSrc:'images/hd/20.jpeg', caption: 'First image'}
};
const gallery = document.getElementById('gallery');
images.ForEach({image,index}=>{
  const imgElement = document.createElement('img');
  imgElement.src=image.src;
      imgElement.dataset.hdSrc= image.hdSrc
    imgElement.dataset.caption= image.caption;
        imgElement.dataset.index =index;
  gallery,appendchild(imgElement);
});
gallery.addEventListner('click',(e) =>{
  if(e.target.tagName ==='IMG'){
    const hdSrc= e.target.dataset.hdSrc;
     const caption= e.target.dataset.caption;
    const hdImageContainer= document.createElement('div');
    hdImageContainer. id= 'hd-image-container';
        hdImageContainer. style.display= 'flex';

    const hdElement = document.createElement('img');
    hdImage.src = hdSrc;
    hdimageContainer. appendChild(captionElement);
    document.body.appenchild(hdImageContainer);
    hdImageContainer.addEventListener('click',() =>{
      hdImageContainer.style.display = 'none';
     document.body.removeChild(hdImageContainer);
            });
        }
    });
});
      
    
