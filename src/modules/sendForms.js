import validationForms from "./validationForms";

const sendForms = () => {
    const form = document.getElementById('form-callback');

    const errorMessage = 'Что-то пошло не так.';
    const warningMessage = 'Введите корректные данные';
    const loadMessage = 'Загрузка...';
    const successMessage = 'Спасибо! Мы скоро вам перезвоним.';

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: #e9bb26; text-align: center';
    form.prepend(statusMessage);

    const inputs = form.querySelectorAll('input');

    const postData = data => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const popup = document.getElementById('callback');
    const resetForm = () => {
        form.reset();
        inputs.forEach(item => item.classList.remove('success-input'));

        setTimeout(() => {
            statusMessage.textContent = '';
        }, 3000);

        setTimeout(() => {
            popup.style.display = 'none';
        }, 5000);
    };

    form.addEventListener('submit', event => {
        event.preventDefault();

        if (!validationForms(inputs)) {
            statusMessage.textContent = warningMessage;
            return;
        }

        statusMessage.textContent = loadMessage;

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => data[key] = value);

        postData(data)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }
                resetForm();
                statusMessage.textContent = successMessage;
            })
            .catch(error => {
                console.log(error);
                statusMessage.textContent = errorMessage;
            });
    });
};

export default sendForms;
