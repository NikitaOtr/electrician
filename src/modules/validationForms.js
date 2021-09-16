const validationForms = inputs => {
    const setSuccessInput = input => {
        input.classList.remove('error-input');
        input.classList.add('success-input');
    };

    const setErrorInput = input => {
        input.classList.remove('success-input');
        input.classList.add('error-input');
    };

    const arrayinputs = Array.from(inputs);
    const userName = arrayinputs.find(item => item.matches('#form-callback-name'));
    const userPhone = arrayinputs.find(item => item.matches('#form-callback-phone'));

    inputs.forEach(item => {
        setSuccessInput(item);
    });
    let rez = true;

    if (!(userName.value.match(/^[A-Я]/) && userName.value.length > 1)) {
        setErrorInput(userName);
        rez = false;
    }

    if (!(userPhone.value.match(/^(\+)?(\d){4,}$/) && userPhone.value.length <= 16)) {
        setErrorInput(userPhone);
        rez = false;
    }

    return rez;
};

export default validationForms;
