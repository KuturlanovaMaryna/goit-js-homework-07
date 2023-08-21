import { galleryItems } from './gallery-items.js';
// Change code below this line
const listEL = document.querySelector(".gallery");
const galleryList = (array) => array.map(item => 
    `<li class ="gallery__item"
    <a class ="gallery__link" href ="${item.original}">
    <img 
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"/>
    </a>
    </li> `)
    .join("");


const onImageClick = (e) => {
    if (e.currentTarget === e.target) {
        return;
    }
    const currentListItem = e.target;
    const imageItem = currentListItem.dataset.source;
   
    const modalInstance = basicLightbox.create(`
    <div class="modal">
       <img 
      class="gallery__image"
      src="${imageItem}"
      alt="${currentListItem.alt}" width="800" height="600"/>
    </a>
    </div>`)
    modalInstance.show();

    document.addEventListener("keydown", modalKeyClose);
};
    
const modalKeyClose = (e) => {
    if (e.key === "Escape") {
        modalInstance.close();
        
    };
};

listEL.insertAdjacentHTML("beforeend", galleryList(galleryItems));
listEL.addEventListener('click', onImageClick)
