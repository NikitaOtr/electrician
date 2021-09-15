const togglePopup = () => {
    const services = document.querySelector('.services-elements');
    const buttonGetPopupHeader =  document.querySelector('.callback-bt');
    const buttonGetPopupServices = document.querySelector('.button-services');

    const popup = document.getElementById('callback');

    services.addEventListener('click', event => {
        event.preventDefault();
        if (event.target.closest('.fancyboxModal')) {
            popup.style.display = 'block';
        }
    });

    [buttonGetPopupHeader, buttonGetPopupServices].forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            popup.style.display = 'block';
        });
    });

    popup.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.modal-close')) {
            popup.style.display = 'none';
        } else if (target.closest('.modal-callback')) {
            return;
        }
        popup.style.display = 'none';
    });
};

export default togglePopup;
