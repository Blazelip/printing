'use strict';

(() => {
  const buttonNav = document.querySelector(`.button--nav`);
  const buttonContacts = document.querySelector(`.button--contacts`);

  const nav = document.querySelector(`.nav`);
  const contacts = document.querySelector(`.footer-contacts`);

  const onButtonNavClick = () => {
    nav.classList.toggle(`nav--opened`);
    buttonNav.classList.toggle(`button--accordeon-opened`);
  };

  const onbuttonContactsClick = () => {
    contacts.classList.toggle(`footer-contacts--opened`);
    buttonContacts.classList.toggle(`button--accordeon-opened`);
  };

  if (buttonNav) {
    buttonNav.addEventListener(`click`, onButtonNavClick);
  }

  if (buttonContacts) {
    buttonContacts.addEventListener(`click`, onbuttonContactsClick);
  }
})();
