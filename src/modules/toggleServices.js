const toggleServices = () => {
    const elements = document.querySelectorAll('.services-element');
    const right = document.querySelector('.arrow-right');
    elements.forEach(item => item.style.display = 'none');
    elements[0].style.display = 'block';
    elements[1].style.display = 'block';
    elements[2].style.display = 'block';

    console.log(elements);

    let current = 0;

    const removePrev = index => {
        elements[index].style.display = 'none';
        elements[(index + 1) % elements.length].style.display = 'none';
        elements[(index + 2) % elements.length].style.display = 'none';
    };

    const setNext = index => {
        elements[index].style.display = 'block';
        elements[(index + 1) % elements.length].style.display = 'block';
        elements[(index + 2) % elements.length].style.display = 'block';
    };

    const autoPlay = () => {
        removePrev(current);
        current = (current + elements.length - 1) % elements.length;
        setNext(current);
    };

    console.log(right);
    right.addEventListener('click', autoPlay);
    // setInterval(autoPlay, 1000);

};

export default toggleServices;
