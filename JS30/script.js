const sliderLeft = document.querySelector('.slider__left');
const sliderRight = document.querySelector('.slider__right');
const btnUp = document.querySelector('.slider__btn-up');
const btnDown = document.querySelector('.slider__btn-down')
const sliderLength = document.querySelectorAll('.slider__text').length;
const slider = document.querySelector('.slider');

let curentIndex = 0;
sliderLeft.style.top = `-${(sliderLength -1) * 100}vh`;
btnDown.addEventListener('click', () => changSlide('down'));
btnUp.addEventListener('click', () => changSlide('Up'));

const changSlide = (direction) => {
  const curHeight = slider.clientHeight;
  if (direction === 'Up') {
    curentIndex++;
    if (curentIndex > sliderLength - 1) {
      curentIndex = 0;
    }
  } else if (direction === 'down') {
    curentIndex--;
    if (curentIndex < 0) {
      curentIndex = sliderLength -1;
    }
  }
  sliderRight.style.transform = `translateY(-${curentIndex * curHeight}px)`;
  sliderLeft.style.transform = `translateY(${curentIndex * curHeight}px)`;

}
