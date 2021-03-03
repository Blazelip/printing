'use strict';

(() => {
  const phoneInputs = document.querySelectorAll(`[name="phone"]`);
  const PHONE_MASK = ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

    if (phoneInputs) {
      phoneInputs.forEach((item) => {
        vanillaTextMask.maskInput({
          inputElement: item,
          mask: PHONE_MASK,
          showMask: false
        })
      });
    }

})();
