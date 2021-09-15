const sendForms = () => {
    const form = document.getElementById('form-callback');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: #e9bb26; text-align: center';
    form.prepend(statusMessage);

    const errorMessage = 'Что-то пошло не так.';
    const loadMessage = 'Загрузка...';
    const successMessage = 'Спасибо! Мы скоро вам перезвоним.';

    const postData = data => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    form.addEventListener('submit', event => {
        event.preventDefault();

        statusMessage.textContent = loadMessage;

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => data[key] = value);

        postData(data)
            .then(response => {
                setTimeout(() => {
                    statusMessage.textContent = '';
                }, 5000);
                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }
                form.reset();
                statusMessage.textContent = successMessage;
            })
            .catch(error => {
                console.log(error);
                statusMessage.textContent = errorMessage;
            });
    });
};

export default sendForms;
