const sliderLeft = document.querySelector('.slider__left');
const sliderRight = document.querySelector('.slider__right');
const btnUp = document.querySelector('.slider__btn-up');
const btnDown = document.querySelector('.slider__btn-down')
const sliderLength = document.querySelectorAll('.slider__text').length;
const slider = document.querySelector('.slider');
const curHeight = slider.clientHeight;
let curentIndex = 0;
let isEnabled = true;

sliderLeft.style.top = `-${(sliderLength + 1)* 100}vh`;
btnDown.addEventListener('click', () => changSlide('down'));
btnUp.addEventListener('click', () => changSlide('Up'));

const sliders = document.querySelectorAll('.slider__img');
const firstSlide = sliders[0];
const lastSlide = sliders[sliderLength - 1];
const firstSlideClone = firstSlide.cloneNode(true);
const lastSlideClone = lastSlide.cloneNode(true);
const texts = document.querySelectorAll('.slider__text');
const firstText = texts[0];
const lastText = texts[sliderLength - 1];
const firstTextClone = firstText.cloneNode(true);
const lastTextClone = lastText.cloneNode(true);

sliderRight.append(firstSlideClone);
sliderRight.prepend(lastSlideClone, firstSlide);
sliderLeft.append(firstTextClone);
sliderLeft.prepend(lastTextClone, firstText);

const newLength = document.querySelectorAll('.slider__text').length;

const moveSlide = () => {
  sliderRight.style.transform = `translateY(-${curentIndex * curHeight}px)`;
  sliderLeft.style.transform = `translateY(${curentIndex * curHeight}px)`;  
}

const removeAnimation = () => {
  sliderRight.classList.remove('animation')
  sliderLeft.classList.remove('animation')
  if (curentIndex === newLength - 1) {
    curentIndex = 1;
    moveSlide();
  } else if (curentIndex === 0) {
    curentIndex = 4;
    moveSlide();
  }
  isEnabled = true
}
removeAnimation();

const changSlide = (direction) => {
  sliderRight.classList.add('animation');
  sliderLeft.classList.add('animation');
  
  if (isEnabled) {
    if (direction === 'Up') {
      curentIndex++;
    } else if (direction === 'down') {
    curentIndex--;
    }
  }
  moveSlide();
  isEnabled = false;
  sliderRight.addEventListener('transitionend', removeAnimation);
}
