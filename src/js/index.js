import 'swiper/swiper-bundle.css';
import '../scss/style.scss'

import * as Services from '../blocks/services/services'
import * as Prices from '../blocks/prices/prices'
import * as Sidebar from '../blocks/sidebar/sidebar'
import * as PageHeader from '../blocks/page-header/page-header'
import * as ModalForm from '../blocks/modal-form/modal-form';
import * as BlurOverlay from '../blocks/blur-overlay/blur-overlay';

Services.initElems();

Prices.initElemsWith([
  {service: 'Диагностика', price: 'Бесплатно', duration: '30 мин'},
  {service: 'Замена дисплея', price: '1000 \u20BD', duration: '30-120 мин'},
  {service: 'Замена полифонического динамика', price: '1000 \u20BD', duration: '30-120 мин'},
  {service: 'Тестирование с выдачей технического заключения', price: '1000 \u20BD', duration: '30-120 мин'},
  {service: 'Замена программного обеспечения', price: '1000 \u20BD', duration: '30-120 мин'},
]);

PageHeader.addMenuButtonHandler(Sidebar.show);

ModalForm.initElems();
ModalForm.addOpener(Sidebar.callButton, ModalForm.modalForms[0]);
ModalForm.addOpener(Sidebar.chatButton, ModalForm.modalForms[1]);
ModalForm.addOpener(PageHeader.callButton, ModalForm.modalForms[0]);
ModalForm.addOpener(PageHeader.chatButton, ModalForm.modalForms[1]);
ModalForm.onChangeState(BlurOverlay.setShown);

Sidebar.onChangeState(BlurOverlay.setShown);

BlurOverlay.addOnClickListener(Sidebar.hide);
BlurOverlay.addOnClickListener(ModalForm.hide);
