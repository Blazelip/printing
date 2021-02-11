'use strict';

(() => {
  const buttonNav = document.querySelector(`.button--nav`);
  const buttonContatcs = document.querySelector(`.button--contacts`);

  const nav = document.querySelector(`.nav`);
  const contacts = document.querySelector(`.footer-contacts`);

  const onButtonNavClick = () => {
    nav.classList.toggle(`nav--opened`);
    buttonNav.classList.toggle(`button--accordeon-opened`);
  };

  const onbuttonContatcsClick = () => {
    contacts.classList.toggle(`footer-contacts--opened`);
    buttonContatcs.classList.toggle(`button--accordeon-opened`);
  };

  if (buttonNav) {
    buttonNav.addEventListener(`click`, onButtonNavClick);
  }

  if (buttonContatcs) {
    buttonContatcs.addEventListener(`click`, onbuttonContatcsClick);
  }
})();
