const smoothScrolling = () => {
    const anchorsMenu = document.querySelectorAll('.top-menu a');
    for (const anchor of anchorsMenu) {
        anchor.addEventListener("click", event => {
            event.preventDefault();
            const goto = anchor.getAttribute('href');
            document.querySelector(goto).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }
};

export default smoothScrolling;
