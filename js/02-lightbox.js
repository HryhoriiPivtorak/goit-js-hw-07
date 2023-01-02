import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryImg = document.querySelector(".gallery");
const cardsMarkup = createGalleryCards(galleryItems);

galleryImg.insertAdjacentHTML("beforeend", cardsMarkup);

galleryImg.addEventListener("click", onPalletContainerClick);

function createGalleryCards(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
            <li>
                <a class="gallery__item" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                    />
                </a>
            </li>
            `;
    })
    .join("");
}

function onPalletContainerClick(evt) {
  evt.preventDefault();

  var lightbox = new SimpleLightbox(".gallery a", {
    navText: ["<", ">"],
    captionsData: 'alt',
    captionDelay: 250,
  });

  gallery.next();
}

console.log(galleryItems);
