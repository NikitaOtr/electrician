const createAccordeon = () => {
    const accordeon = document.querySelector('.accordeon');
    const elements = document.querySelectorAll('.accordeon .element');
    const elementsContent = document.querySelectorAll('.accordeon .element-content');

    elements[0].classList.add('active');
    elementsContent[0].style.display = 'block';

    const toggleContent = content => {
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    };

    const changeContent = target => {
        elements.forEach((item, index) => {
            if (item === target) {
                item.classList.toggle('active');
                toggleContent(elementsContent[index]);
            } else {
                item.classList.remove('active');
                elementsContent[index].style.display = 'none';
            }
        });
    };

    accordeon.addEventListener('click', event => {
        const target = event.target;
        if (target.matches('.title')) {
            changeContent(target.closest('.element'));
        }
    });
};

export default createAccordeon;
