const topSlider = () => {
    const sliders = document.querySelectorAll('.item');
    sliders.forEach(item => {
        item.style.display = 'none';
    });
    sliders[0].style.display = 'block';

    let currentSlider = 0;
    const autoPlaySlider = () => {
        sliders[currentSlider].style.display = 'none';
        currentSlider = (currentSlider + 1) % sliders.length;
        sliders[currentSlider].style.display = 'block';
    };
    setInterval(autoPlaySlider, 3000);
};

export default topSlider;
