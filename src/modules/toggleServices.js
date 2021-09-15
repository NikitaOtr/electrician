const toggleServices = () => {
    const elements = document.querySelectorAll('.services-element');
    const right = document.querySelector('.arrow-right');
    const left = document.querySelector('.arrow-left');

    elements.forEach(item => item.style.display = 'none');
    elements[0].style.display = 'block';
    elements[1].style.display = 'block';
    elements[2].style.display = 'block';

    let current = 0;

    const removePrev = index => {
        elements[index].style.display = 'none';
        elements[(index + 1) % elements.length].style.display = 'none';
        elements[(index + 2) % elements.length].style.display = 'none';
    };

    const setNext = index => {
        elements[index].style.display = 'block';
        elements[index].style.order = 1;

        elements[(index + 1) % elements.length].style.display = 'block';
        elements[(index + 1) % elements.length].style.order = 2;

        elements[(index + 2) % elements.length].style.display = 'block';
        elements[(index + 2) % elements.length].style.order = 3;
    };

    const playLeft = () => {
        removePrev(current);
        current = (current + 1) % elements.length;
        setNext(current);
    };

    const playRight = () => {
        removePrev(current);
        current = (current + elements.length - 1) % elements.length;
        setNext(current);
    };

    right.addEventListener('click', playRight);
    left.addEventListener('click', playLeft);
};

export default toggleServices;
