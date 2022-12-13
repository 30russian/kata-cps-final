let onChangeStateListener = null;
let sidebar = document.querySelector('.sidebar');
let closeButton = sidebar.querySelector('.sidebar__navigation-item:first-child .navigation-button');
export let callButton = sidebar.querySelector('.sidebar__footer li:first-child .navigation-button');
export let chatButton = sidebar.querySelector('.sidebar__footer li:nth-child(2) .navigation-button');

window.addEventListener("resize", shouldToggleSidebar);

export function show() {
  sidebar.classList.add('sidebar--opened');
  onChangeStateListener(true);
}

export function hide() {
  sidebar.classList.remove('sidebar--opened');
  onChangeStateListener(false);
}

function shouldToggleSidebar() {
  if (window.innerWidth >= 1366 && sidebar.classList.contains('sidebar--opened')) {
    hide();
  }
}

closeButton.addEventListener('click', () => {
  hide();
});

callButton.addEventListener('click', () => {
  hide();
});

chatButton.addEventListener('click', () => {
  hide();
});

export function onChangeState(listener) {
  onChangeStateListener = listener;
}
