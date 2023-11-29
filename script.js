function validateText(inputField) {
    var inputValue = inputField.value;
    var onlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúüñÑ\s]+$/.test(inputValue);

    if (!onlyLetters) {
    alert('Solo se permiten letras y espacios en blanco.');
    }
}