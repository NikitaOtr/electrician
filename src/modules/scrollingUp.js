const scrollingUp = () => {
    const arrowUp = document.querySelector('.up');
    const begin = document.querySelector('.main-wrapper');

    arrowUp.addEventListener('click', () => {
        begin.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    const checkShowArrowUp = () => {
        if (document.documentElement.scrollTop > 2000) {
            arrowUp.style.display = 'block';
        } else {
            arrowUp.style.display = 'none';
        }
        requestAnimationFrame(checkShowArrowUp);
    };
    checkShowArrowUp();
};

export default scrollingUp;
