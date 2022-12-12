let menuButton = document.querySelector('.page-header__navigation-list-item:first-child .page-header__navigation-list-link');
export let callButton = document.querySelector('.page-header__navigation-list-item:nth-child(4) .page-header__navigation-list-link');
export let chatButton = document.querySelector('.page-header__navigation-list-item:nth-child(5) .page-header__navigation-list-link');
export function addMenuButtonHandler(handler) {
  menuButton.addEventListener('click', handler);
}
