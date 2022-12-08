import 'swiper/swiper-bundle.css';
import '../scss/style.scss'

import * as Services from '../blocks/services/services'
import * as Prices from '../blocks/prices/prices'

Services.initElems();

Prices.initElemsWith([
  {service: 'Диагностика', price: 'Бесплатно', duration: '30 мин'},
  {service: 'Замена дисплея', price: '1000 \u20BD', duration: '30-120 мин'},
  {service: 'Замена полифонического динамика', price: '1000 \u20BD', duration: '30-120 мин'},
  {service: 'Тестирование с выдачей технического заключения', price: '1000 \u20BD', duration: '30-120 мин'},
  {service: 'Замена программного обеспечения', price: '1000 \u20BD', duration: '30-120 мин'},
]);
