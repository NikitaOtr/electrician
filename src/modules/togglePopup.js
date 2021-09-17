const togglePopup = () => {
    const services = document.querySelector('.services-elements');
    const buttonsGetPopupHeader =  document.querySelectorAll('.callback-btn');
    const buttonGetPopupServices = document.querySelector('.button-services');

    const popupOverlay = document.querySelector('.modal-overlay');
    const popup = document.getElementById('callback');
    popup.classList.add('animated', 'faster');

    const hidePopup = () => {
        popup.style.display = 'none';
    };

    const animationOpen = () => {
        popupOverlay.style.display = 'block';
        popup.style.display = 'flex';
        popup.removeEventListener('animationend', hidePopup);
        popup.classList.remove('fadeOutDown');
        popup.classList.add('fadeInDown');
    };

    const animationClose = () => {
        popup.addEventListener('animationend', hidePopup);
        popup.classList.remove('fadeInDown');
        popup.classList.add('fadeOutDown');
        popupOverlay.style.display = 'none';
    };

    services.addEventListener('click', event => {
        event.preventDefault();
        if (event.target.closest('.fancyboxModal')) {
            animationOpen();
        }
    });

    [...buttonsGetPopupHeader, buttonGetPopupServices].forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            animationOpen();
        });
    });

    popup.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.modal-close')) {
            animationClose();
        } else if (target.closest('.modal-callback')) {
            return;
        } else {
            animationClose();
        }
    });
};

export default togglePopup;
