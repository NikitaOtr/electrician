const smoothScrolling = () => {
    const anchorsMenu = document.querySelectorAll('.top-menu a');
    const anchorsMobileMenu = document.querySelectorAll('.mobile-menu li>a');
    const anchors = [...anchorsMenu, ...anchorsMobileMenu];

    for (const anchor of anchors) {
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
