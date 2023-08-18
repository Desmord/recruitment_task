// Import our custom CSS
import '../scss/Styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Slider 
(() => {
    const sliderLeftButton = document.querySelector(`#left`);
    const sliderRightButton = document.querySelector(`#right`);
    const sliderItems = document.querySelectorAll(`.slider-item`);

    let currentSliderActiveElementIndex = 0;

    const clearAllActive = () => [...sliderItems].map(item => item.classList.remove(`slider-item-active`))

    const addActive = () => sliderItems[currentSliderActiveElementIndex].classList.add(`slider-item-active`)

    const handleClickLeft = () => {

        if (currentSliderActiveElementIndex < 1) {
            currentSliderActiveElementIndex = sliderItems.length - 1
        } else {
            currentSliderActiveElementIndex -= 1;
        }

        clearAllActive()
        addActive()

    }


    const handleClickRight = () => {

        if (currentSliderActiveElementIndex >= sliderItems.length - 1) {
            currentSliderActiveElementIndex = 0;
        } else {
            currentSliderActiveElementIndex += 1;
        }

        clearAllActive()
        addActive()

    }


    sliderLeftButton.addEventListener(`click`, handleClickLeft)
    sliderRightButton.addEventListener(`click`, handleClickRight)

})();

(() => {
    let elem = document.querySelector('.grid');
    let msnry = new Masonry(elem, {
        itemSelector: '.grid-item',
        columnWidth: 320
    });
})();

(() => {

    const showMore = document.querySelector(`#show-more`);
    const opacityFiltr = document.querySelector(`#opacity-filtr`);
    const container = document.querySelector(`#implementations`)

    showMore.addEventListener(`click`, () => {
        container.setAttribute(`style`, `overflow: visible;height: auto`);
        showMore.style.display = 'none';
        opacityFiltr.style.display = `none`;
    })


})();



