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
