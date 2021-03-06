const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')
let activeSlideIndex = 0

/* Подгоняем блок нужного цвета */
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down'){
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    const containerHeight = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * containerHeight}px)`
    //mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`
    sidebar.style.transform = `translateY(${activeSlideIndex * 100}vh)`
}

upBtn.addEventListener('click', () => {
    changeSlide('up')
})


downBtn.addEventListener('click', () => {
    changeSlide('down')
})

// Прокрутка слайдера по нажатию стрелок на клавиатуре
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    }else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})