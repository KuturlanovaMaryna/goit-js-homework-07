import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
console.log(galleryItems);
const listEL = document.querySelector(".gallery");
console.dir(listEL);
const galleryList = (array) => array.map(item => 
    `<li class ="gallery__item"
    <a class ="gallery__link" href ="${item.original}">
    <img 
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"/>
    </a>
    </li> `)
    .join("");
listEL.insertAdjacentHTML("beforeend", galleryList(galleryItems));


const lightbox = $('.gallery a').SimpleLightbox( { captionsData: "alt", captionDelay: 250, });
