let shown = false;
let overlay = document.querySelector('.blur-overlay');

export function setShown(state) {
  switch (state) {
    case true:
      if (!shown) {
        overlay.classList.add('blur-overlay--shown');
        shown = true;
      }
      break;
    case false:
      if (shown) {
        overlay.classList.remove('blur-overlay--shown');
        shown = false;
      }
      break;
  }
}

export function addOnClickListener(clickListener) {
  overlay.addEventListener('click', () => {
    clickListener();
  })
}
