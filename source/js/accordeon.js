'use strict';

(() => {
  const buttonNav = document.querySelector(`.js-nav`);
  const buttonContacts = document.querySelector(`.js-contacts`);

  const nav = document.querySelector(`.nav`);
  const contacts = document.querySelector(`.footer-contacts`);

  const onButtonNavClick = () => {
    nav.classList.toggle(`nav--opened`);
    buttonNav.classList.toggle(`js-nav--opened`);
    contacts.classList.remove(`footer-contacts--opened`);
    buttonContacts.classList.remove(`js-contacts--opened`);
  };

  const onbuttonContactsClick = () => {
    contacts.classList.toggle(`footer-contacts--opened`);
    buttonContacts.classList.toggle(`js-contacts--opened`);
    nav.classList.remove(`nav--opened`);
    buttonNav.classList.remove(`js-nav--opened`);
  };

  document.addEventListener(`DOMContentLoaded`, () => {
    buttonNav.classList.remove(`footer__heading--nojs`);
    buttonContacts.classList.remove(`footer__heading--nojs`);

    nav.classList.toggle(`nav--opened`);
    contacts.classList.toggle(`footer-contacts--opened`);

    if (buttonNav && buttonContacts) {
      buttonNav.addEventListener(`click`, onButtonNavClick);
      buttonContacts.addEventListener(`click`, onbuttonContactsClick);
    }
  });
})();
