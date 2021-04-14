const validateInput = (formElements) => {
    try {
        for (let formElement of formElements) {
            if (!formElement.value) {
                formElement.classList.add('error');
                return false;
            } else {
                formElement.classList.remove('error');
                return true;
            }
        }
    } catch (error) {
        console.error(error);
    }
};

export { validateInput };
