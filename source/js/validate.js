'use strict';

(() => {
  const phoneInputs = document.querySelectorAll(`[name="phone"]`);
  const PHONE_MASK = ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  const PHONE_NUMBER_MIN_LENGTH = 16;

  const validatePhoneNumber = (input) => {
    if (input.value.length < PHONE_NUMBER_MIN_LENGTH) {
      input.setCustomValidity(`Введите номер полностью`);
    } else {
      input.setCustomValidity(``);
    }
  };

    if (phoneInputs) {
      phoneInputs.forEach((item) => {
        item.addEventListener(`keyup`, () => {
          validatePhoneNumber(item);
        });

        vanillaTextMask.maskInput({
          guide: false,
          inputElement: item,
          mask: PHONE_MASK,
          showMask: false
        })
      });
    }

})();
