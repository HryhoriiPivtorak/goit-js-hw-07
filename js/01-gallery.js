import { galleryItems } from "./gallery-items.js";
// Change code below this line

const palletContainerImg = document.querySelector(".gallery");
const cardsMarcup = createGalleryCards(galleryItems);

palletContainerImg.insertAdjacentHTML("beforeend", cardsMarcup);

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
    <img src="assets/images/image.png" width="800" height="600">
`);

  instance.show();

  console.log("evt.target", evt.target);
}

console.log(galleryItems);

// console.log(basicLightbox);

// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);
