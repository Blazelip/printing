'use strict';

(() => {

const page = document.querySelector(`.page`);
const menu = document.querySelector(`.menu`);
const menuToggle = document.querySelector(`.menu__toggle`);
const menuList = document.querySelector(`.menu__list`);

const onMenuPressEsc = (evt) => {
  if (evt.key === `Escape`) {
    closeMenu();
  }
};

const openMenu = () => {
  page.classList.add(`page--no-scroll`);
  menu.classList.remove(`menu--closed`);
  menu.classList.add(`menu--opened`);
  menuList.addEventListener(`click`, onMenuItemClick);
  document.addEventListener(`keydown`, onMenuPressEsc);
};

const closeMenu = () => {
  page.classList.remove(`page--no-scroll`);
  menu.classList.remove(`menu--opened`);
  menu.classList.add(`menu--closed`);
  menuList.removeEventListener(`click`, onMenuItemClick);
  document.removeEventListener(`keydown`, onMenuPressEsc);
};

const onMenuItemClick = (evt) => {
  const target = evt.target.getAttribute(`href`);
  const id = target.slice(1);

  closeMenu();
  window.scrollTo(0, id.offsetTop);
};

if (menu && menuToggle) {
  menu.classList.remove(`menu--nojs`);
  menu.classList.add(`menu--closed`);

  menuToggle.addEventListener(`click`, () => {
    if (menu.classList.contains(`menu--closed`)) {
      openMenu();
    } else {
      closeMenu();
    }
  });
}

})();

'use strict';

(() => {

const form = document.querySelector(`.write-us`);
const name = form.querySelector(`[name="customer"]`);
const phone = form.querySelector(`[name="phone"]`);

let isStorageSupport = true;
let storageName = ``;
let storagePhone = ``;

try {
    storageName = localStorage.getItem(`name`);
    storagePhone = localStorage.getItem(`phone`);
} catch (err) {
    isStorageSupport = false;
}

name.value = storageName || ``;
phone.value = storagePhone || ``;

form.addEventListener(`submit`, (evt) => {
  if (!name.value || !phone.value) {
    evt.preventDefault();
    if (!phone.value) {
      phone.classList.add(`write-us--error`);
      phone.focus();
    }

    if (!name.value) {
      name.classList.add(`write-us--error`);
      name.focus();
    }

  } else {
    if (isStorageSupport) {
      localStorage.setItem(`name`, name.value);
      localStorage.setItem(`phone`, phone.value);
    }
  }
});

})();
