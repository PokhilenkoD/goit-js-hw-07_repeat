import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".js-gallery");
list.addEventListener("click", onClick);
murkup(galleryItems, list);

function onClick(e) {
  if (!e.target.closest(".gallery__link")) {
    return;
  }
  e.preventDefault();

  const instance = basicLightbox.create(`<img
      class="gallery__image"
      src="${e.target.dataset.source}"
      alt="${e.target.alt}"
    />

`);

  instance.show(() => {
    const test = document.querySelector("body");
    test.addEventListener("keydown", closeEsc);

    function closeEsc(e) {
      if (e.key === "Escape") {
        instance.close();
      }
    }
  });
}

function murkup(items, element) {
  const murkup = items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
  element.insertAdjacentHTML("beforeend", murkup);
}
