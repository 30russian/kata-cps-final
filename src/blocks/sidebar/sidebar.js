let sidebar = document.querySelector('.sidebar');
let closeButton = sidebar.querySelector('.sidebar__navigation-item:first-child .navigation-button');

export function show() {
  sidebar.classList.add('sidebar--opened');
}

closeButton.addEventListener('click', () => {
  sidebar.classList.remove('sidebar--opened');
});
