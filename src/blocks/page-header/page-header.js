let menuButton = document.querySelector('.page-header__navigation-list-item:first-child .page-header__navigation-list-link');
export function addMenuButtonHandler(handler) {
  menuButton.addEventListener('click', handler);
}
