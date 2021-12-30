import img_1 from '../img/liquid-1.jpg'
import img_2 from '../img/liquid-2.jpg'
import img_3 from '../img/liquid-3.jpg'
import img_4 from '../img/liquid-4.jpg'
import img_5 from '../img/liquid-5.jpg'
import img_6 from '../img/liquid-6.jpg'
import img_7 from '../img/liquid-7.jpg'
import img_8 from '../img/liquid-8.jpg'

const gallery = [
   { image: img_1, title: 'Liquid Feel' },
   { image: img_2, title: 'Liquid Feel' },
   { image: img_3, title: 'Liquid Feel' },
   { image: img_4, title: 'Liquid Feel' },
   { image: img_5, title: 'Liquid Feel' },
   { image: img_6, title: 'Liquid Feel' },
   { image: img_7, title: 'Liquid Feel' },
   { image: img_8, title: 'Liquid Feel' },


];



const renderGalleryItem = (image = image_1, title = "Title") =>
   `<article class="gallery__item">
   <div class="gallery__img">
      <img class="gallery__img-card" src=${image} alt="${title}">
      <div class ="gallery__overlay">
      </div>
   </div>
   <div class="gallery__content-title">
      <h3 class="gallery__title">${title}</h3>
   </div>
</article>`;


const renderGalleryList = (list) => {
   let galleryList = list.map(item => renderGalleryItem(item.image, item.title)).join('');
   document.querySelector('.gallery__items').innerHTML = galleryList;

}

renderGalleryList(gallery);

