for (const slot of document.querySelectorAll('[data-photo]')) {
  const image = new Image();
  // The recipe title already names the dish beside the optional photo.
  image.alt = '';
  image.decoding = 'async';
  image.addEventListener('load', () => {
    slot.append(image);
    slot.hidden = false;
  }, { once: true });
  image.src = slot.dataset.photo;
}
