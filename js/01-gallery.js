import { galleryItems } from "./gallery-items.js";
// Change code below this line

const palletContainerImg = document.querySelector(".gallery");
const cardsMarkup = createGalleryCards(galleryItems);

palletContainerImg.insertAdjacentHTML("beforeend", cardsMarkup);

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
  evt.preventDefault();

  const isGalleryImageEl = evt.target.classList.contains("gallery__image");

  if (!isGalleryImageEl) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src = "${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  const isVisible = instance.visible();

  if (isVisible) {
    palletContainerImg.addEventListener("keydown", onCloseModalWindow);
  }

  function onCloseModalWindow(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}

console.log(galleryItems);
