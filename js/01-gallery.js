import { galleryItems } from "./gallery-items.js";
// Change code below this line

const palletContainerImg = document.querySelector(".gallery");
const curdsMarcup = createGalleryCards(galleryItems);

palletContainerImg.insertAdjacentHTML("beforeend", curdsMarcup);

palletContainerImg.addEventListener("click", onPalletContainerClick);

function createGalleryCards(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
        `;
    })
    .join("");
}

function onPalletContainerClick(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  console.log('evt.target', evt.target);
}

console.log(galleryItems);
