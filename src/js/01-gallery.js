// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const CreateGalleryMarkup = items => {
  return items
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
     <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
       />
     </a>
    </li>
 `
    )
    .join('');
};

galleryRef.innerHTML = CreateGalleryMarkup(galleryItems); //Apeleaza functioa CreateGalleryMarkup
console.log(galleryRef);

//Initializeaza SimpleLightbox

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});



// Functie deschidere fereastra modala cand se face click pe o img
// Nu mai este nevoie de ea deoarece face SimpleLightbox asta

// const openModal = e => {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') return;

//   const instance = basicLightbox.create(`
//     <img src="${e.target.dataset.source}" width="800" height="600">
//   `);

//   instance.show();

//   window.addEventListener('keydown', e => {
//     if (e.key === 'Escape') {
//       instance.close();
//     }
//   });
// };

// galleryRef.addEventListener('click', openModal);