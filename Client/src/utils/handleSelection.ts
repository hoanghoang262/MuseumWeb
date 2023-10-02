function handleSelection(selectElement : HTMLSelectElement) {
  const selectedOptions = [];

  if (selectElement instanceof HTMLSelectElement) {
    for (let i = 0; i < selectElement.options.length; i++) {
      const option = selectElement.options[i];
      if (option.selected) {
        selectedOptions.push(option.value);
      }
    }
  }

  return selectedOptions
}

export default handleSelection
