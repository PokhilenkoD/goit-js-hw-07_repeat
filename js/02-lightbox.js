import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".js-gallery");
list.addEventListener("click", onClick);
murkup(galleryItems, list);

function murkup(items, element) {
  const murkup = items
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
  element.insertAdjacentHTML("beforeend", murkup);
}
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function onClick(e) {
  if (!e.target.closest(".gallery__link")) {
    return;
  }
  e.preventDefault();
}
