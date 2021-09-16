const createMobileMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu');

    const handlerMenu = () => {
        mobileMenu.classList.toggle('open');
    };

    document.addEventListener('click', event => {
        const target = event.target;

        if (target.matches('.mobile-menu')) {
            return;
        } else if (target.closest('.mob-menu-btn')) {
            handlerMenu();
        } else if (mobileMenu.classList.contains('open')) {
            handlerMenu();
        }
    });
};

export default createMobileMenu;
