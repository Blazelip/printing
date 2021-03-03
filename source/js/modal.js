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
    page.classList.toggle(`page--no-scroll`);
  };

  const fillForm = () => {
    if (storageName) {
      name.value = storageName;
    } else {
      name.focus();
    }

    if (storagePhone) {
      phone.value = storagePhone;
    }
  };

  const openModal = () => {
    switchScroll();

    if (modal) {
      modal.classList.add(`modal--opened`);
      document.addEventListener(`keydown`, onModalEscPress);
      modalClose.addEventListener(`click`, onCloseCrossClick);
      form.addEventListener(`submit`, onFormSubmit);
      fillForm();
    }
  };

  const closeModal = () => {
    switchScroll();

    if (modal) {
      modal.classList.remove(`modal--opened`);
      document.removeEventListener(`keydown`, onModalEscPress);
      modalClose.removeEventListener(`click`, onCloseCrossClick);
      form.removeEventListener(`submit`, onFormSubmit);
    }
  };

  const onModalEscPress = (evt) => {
    if (evt.key === `Escape`) {
      closeModal();
    }
  };

  const onHeaderBtnClick = (evt) => {
    if (!headerBtn.classList.contains(`header__button-top--nojs`)) {
      evt.preventDefault();
      openModal();
    }
  };

  const onCloseCrossClick = () => {
    closeModal();
  };

  const onFormSubmit = (evt) => {
    if (!name.value || !phone.value || phone.value === `+7(___)___-__-__`) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem(`name`, name.value);
        localStorage.setItem(`phone`, phone.value);
        localStorage.setItem(`question`, question.value);
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
    headerBtn.classList.remove(`header__button-top--nojs`);
    headerBtn.addEventListener(`click`, onHeaderBtnClick);
  }
})();
