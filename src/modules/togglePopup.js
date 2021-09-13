const togglePopup = () => {
    const buttonGetPopup = document.querySelector('.callback-bt');
    const popup = document.getElementById('callback');

    buttonGetPopup.addEventListener('click', () => {
        popup.style.display = 'block';
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
