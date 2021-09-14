const banPrintForms = () => {
    const name = document.getElementById('form-callback-name');
    name.addEventListener('input', () => name.value = name.value.replace(/[^А-Яа-яёЁ]/, ''));

    const phone = document.getElementById('form-callback-phone');
    phone.addEventListener('input', () => phone.value = phone.value.replace(/[^\d+]/, ''));
};

export default banPrintForms;
