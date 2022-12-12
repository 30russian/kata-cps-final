let modalFormOpened = false;
let onChangeStateListener = null;
export let modalForms = document.querySelectorAll('.modal-form');

function hideModalForm(modalForm) {
  modalForm.classList.remove('modal-form--opened');
  onChangeStateListener(false);
  modalFormOpened = false;
}

export function hide() {
  for (let modalForm of modalForms) {
    hideModalForm(modalForm);
  }
}

export function initElems() {
  for (let modalForm of modalForms) {
    let closeButton = modalForm.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      hideModalForm(modalForm);
    });
  }
}

export function addOpener(openerElem, modalForm) {
  openerElem.addEventListener('click', () => {
    if (!modalFormOpened) {
      modalForm.classList.add('modal-form--opened');
      onChangeStateListener(true);
      modalFormOpened = true;
    }
  });
}

export function onChangeState(listener) {
  onChangeStateListener = listener;
}
