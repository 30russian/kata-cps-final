import Swiper, { Navigation, Pagination } from 'swiper';

const serviceListWrappers = [];
const serviceLists = [];
const serviceListSlides = [];

let init = false;
let swiper;

export function initElems() {
  serviceListWrappers.push(...document.querySelectorAll('.services__list-wrapper'));
  for (const serviceListWrapper of serviceListWrappers) {
    const serviceList = serviceListWrapper.querySelector('.services__list');
    serviceLists.push(serviceList);
    serviceListSlides.push(...serviceList.querySelectorAll('.services__list-slide'));

    const expander = serviceListWrapper.querySelector('.services__list-expander');
    const expanderCheckbox = expander.querySelector('input');
    expanderCheckbox.addEventListener('input', (evt) => {
      if (evt.currentTarget.checked) {
        serviceList.classList.add('services__list--expanded');
        expander.lastChild.textContent = 'Скрыть';
      } else {
        serviceList.classList.remove('services__list--expanded');
        expander.lastChild.textContent = 'Показать всё';
      }
    });
  }

  shouldToggleSwiper();
  window.addEventListener("resize", shouldToggleSwiper);
}

function toggleSwiper(currentState) {
  const swiperClasses = ['swiper', 'swiper-wrapper', 'swiper-slide'];
  const servicesClasses = ['services__list-wrapper', 'services__list', 'services__list-slide'];
  const fromClasses = currentState ? swiperClasses : servicesClasses;
  const toClasses = currentState ? servicesClasses : swiperClasses;

  for (const serviceListWrapper of serviceListWrappers) {
    serviceListWrapper.classList.remove(fromClasses[0]);
    serviceListWrapper.classList.add(toClasses[0]);
  }

  for (const serviceList of serviceLists) {
    serviceList.classList.remove(fromClasses[1]);
    serviceList.classList.add(toClasses[1]);
  }

  for (let serviceListSlide of serviceListSlides) {
    serviceListSlide.classList.remove(fromClasses[2]);
    serviceListSlide.classList.add(toClasses[2]);
  }

  if (!init) {
    swiper = new Swiper(".services .swiper", {
      modules: [Navigation, Pagination],
      direction: "horizontal",
      slidesPerView: 1.3,
      spaceBetween: 32,
      pagination: {
        el: ".services .swiper-pagination",
        clickable: true,
      },
    });
    init = true;
  } else {
    if (Array.isArray(swiper)) {
      for (const swiperItem of swiper) {
        swiperItem.destroy();
      }
    } else {
      swiper.destroy();
    }
    init = false;
  }
}

function shouldToggleSwiper() {
  if (window.innerWidth <= 768) {
    if (!init) {
      toggleSwiper(init);
    }
  } else if (init) {
    toggleSwiper(init);
  }
}
