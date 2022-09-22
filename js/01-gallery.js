import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const imgTemplate = ({ original, preview, description }) =>
//   `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;

const refs = {
  gallery: document.querySelector(".gallery"),
};

// const render = () => {
//   const imgMarkup = galleryItems.map((item) => imgTemplate(item)).join("");
//   refs.gallery.insertAdjacentHTML("beforeend", imgMarkup);
// };
// render();
// console.log(galleryItems);
// const onImgClick = (e) => {
//   e.preventDefault();
//   console.log(e.target);
// };
// refs.gallery.addEventListener("click", onImgClick);
const imgMarkup = createImgMarkup(galleryItems);

function createImgMarkup(item) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original.value}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />

  </a>
</div>`;
    })
    .join("");
}
refs.gallery.insertAdjacentHTML("beforeend", imgMarkup);
const onImgClick = (e) => {
  e.preventDefault();
  if (e.target === e.currentTarget) return;
  const source = e.target.dataset.source;
  const instance = basicLightbox.create(`
  <div class="modal">
    <img src="${source}"width="1100" height="700"></div>`);

  instance.show();
  console.log(e.target);
};
refs.gallery.addEventListener("click", onImgClick);
