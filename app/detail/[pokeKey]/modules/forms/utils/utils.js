function setFormHeaderText(formCount, pokeName) {
  const formTexts = {
    form: {
      en: `${pokeName.en}'s form`,
      ko: `${pokeName.ko}의 모습`,
    },
    forms: {
      en: `${pokeName.en}'s forms`,
      ko: `${pokeName.ko}의 모습들`,
    },
  };

  if (formCount === 1) {
    return formTexts.form;
  }

  return formTexts.forms;
}

export {
  setFormHeaderText,
};
