import { createHomepage } from './homepage.js';
import { contact } from './contact.js';
import { menu } from './menu.js';
import './style.css';
createHomepage();

let tabSwitch = (function () {
  const homeTab = document.querySelector('.home');
  homeTab.addEventListener('click', createHomepage);

  const menuTab = document.querySelector('.menu');
  menuTab.addEventListener('click', menu);

  const contactTab = document.querySelector('.contact');
  contactTab.addEventListener('click', contact);
})();
