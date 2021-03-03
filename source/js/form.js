`use strict`;

(() => {
  const forms = document.querySelectorAll(`.feedback__form`);

  const onFormSubmit = (evt, form) => {
    const name = form.querySelector(`[name="customer"]`);
    const phone = form.querySelector(`[name="phone"]`);

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

  forms.forEach((form) => {
    form.addEventListener(`submit`, (evt) => {
      onFormSubmit(evt, form);
    });
  });

})();
