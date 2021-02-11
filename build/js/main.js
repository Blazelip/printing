'use strict';

(() => {
  const page = document.querySelector(`.page`);
  const headerBtn = page.querySelector(`.header__button-top`);
  const modal = page.querySelector(`.modal`);
  const form = modal.querySelector(`.modal__form`);
  const modalClose = modal.querySelector(`.modal__close`);

  const name = modal.querySelector(`[name="customer"]`);
  const phone = modal.querySelector(`[name="phone"]`);
  const question = modal.querySelector(`[name="question"]`);

  let isStorageSupport = true;
  let storageName = ``;
  let storagePhone = ``;

  const switchScroll = () => {
    page.classList.toggle(`.page--no-scroll`);
  };

  const fillForm = () => {
      if (storageName) {
          name.value = storageName;
      } else {
          name.focus();
      }

      if (storageEmail) {
          phone.value = storagePhone;
      }
  };

  const openModal = () => {
    switchScroll();

    if (modal) {
      modal.classList.add(`modal--opened`);
      document.addEventListener(`keydown`, onModalEscPress);
      modalClose.addEventListener(`click`, onCloseCrossClick);
      form.addEventListener(`submit`, onFormSumbit);
      fillForm();
    }
  };

  const closeModal = () => {
    switchScroll();

    if (modal) {
      modal.classList.remove(`modal--opened`);
      document.removeEventListener(`keydown`, onModalEscPress);
      modalClose.removeEventListener(`click`, onCloseCrossClick);
      form.removeEventListener(`submit`, onFormSumbit);
    }
  };

  const onModalEscPress = (evt) => {
    if (evt.key === `Escape`) {
      switchModal();
    }
  };

  const onHeaderBtnClick = () => {
    openModal();
  };

  const onCloseCrossClick = () => {
    closeModal();
  };

  const onFormSumbit = (evt) => {
    if (!name.value || !phone.value) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('login', login.value);
        localStorage.setItem('phone', phone.value);
        localStorage.setItem('question', question.value);
      }
    }
  };

  try {
    storageName = localStorage.getItem(`name`);
    storagePhone = localStorage.getItem(`phone`);
  } catch (err) {
    isStorageSupport = false;
  }

  if (headerBtn) {
    headerBtn.addEventListener(`click`, onHeaderBtnClick);
  }
})();

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
