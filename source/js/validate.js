'use strict';

(() => {

  const forms = document.querySelectorAll(`.js-form`);
  const phoneInputs = document.querySelectorAll(`[name="phone"]`);

  const PHONE_MIN_LENGTH = 14;
  const REGEX = /^\+7\(\d{3}\)\d{7}$/;

  const onInputFocusComplete = (item) => {
    if (item.value.length === 0) {
      item.value = `+7(`;
    }
  };

  const addParentheses = (item) => {
    if (item.value.length === 6) {
      item.value = item.value.concat(`)`);
    }
  };

  const limitNumberLength = (input) => {
    if (input.value.length > PHONE_MIN_LENGTH || input.value.length < PHONE_MIN_LENGTH) {
      input.setCustomValidity(`Номер без кода должен состоять из 10 цифр`);

      return true;
    } else {
      input.setCustomValidity('');
    }

    return false;
  };

  const checkNumberByRegex = (number) => {
    return REGEX.test(number.value);
  }

  const onFormSubmitValidate = (form, evt) => {
    const phone = form.querySelector(`[name="phone"]`);
    console.log(checkNumberByRegex(phone));
    console.log(limitNumberLength(phone));

    if (limitNumberLength(phone) || !checkNumberByRegex(phone)) {
      evt.preventDefault();
      console.log(`1`);
    }
  };

  if (forms) {
    forms.forEach((form) => {
      form.addEventListener(`submit`, (evt) => {
        onFormSubmitValidate(form, evt);
      });
    });
  }

  phoneInputs.forEach((item) => {
    if (phoneInputs) {
      phoneInputs.forEach((item) => {
        item.addEventListener(`focus`, () => {
          onInputFocusComplete(item);
        });

        item.addEventListener(`input`, () => {
          addParentheses(item);
        });
      });
    }
  });



  // if (phoneInputs) {
  //   phoneInputs.forEach((input) => {
  //     input.addEventListener(`change`, () => {
  //       limitNumberLength(input);

  //     });
  //   });
  // }

})();
