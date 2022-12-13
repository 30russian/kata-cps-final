import Swiper, { Navigation, Pagination } from 'swiper';

export function initElemsWith(data) {
  initSwiper();

  createElements(data);
}

function initSwiper() {
  new Swiper(".prices .swiper", {
    modules: [Navigation, Pagination],
    direction: "horizontal",
    slidesPerView: 1.2,
    spaceBetween: 32,
    pagination: {
      el: ".prices .swiper-pagination",
      clickable: true,
    },
  });
}

function createElements(data) {
  let tbody = document.querySelector('.prices__table tbody');
  let trTemplate = document.querySelector('#prices__table-row-template');

  let ul = document.querySelector('.prices__list');
  let liTemplate = document.querySelector('#prices__list-slide-template');

  for (let dataItem of data) {
    let trClone = trTemplate.content.cloneNode(true);
    let tds = trClone.querySelectorAll('td');
    tds[0].textContent = dataItem.service;
    tds[1].textContent = dataItem.price;
    tds[2].textContent = dataItem.duration;
    tbody.appendChild(trClone);

    let liClone = liTemplate.content.cloneNode(true);
    let spans = liClone.querySelectorAll('span');
    spans[0].textContent = dataItem.service;
    spans[1].textContent = dataItem.price;
    spans[2].textContent = dataItem.duration;
    ul.appendChild(liClone);
  }
}
