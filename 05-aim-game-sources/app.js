const startBtn = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0
const colors = ['#703b50',
                '#c26ca9',
                '#dab1d4',
                '#afd3a7', 
                '#516814', 
                '#ADFF2F',	 
                '#AFEEEE',	 
                '#B0C4DE',	 
                '#B0E0E6',	 
                '#B22222',	 
                '#B8860B',	 
                '#BA55D3', 
                '#BC8F8F']


function startGame () {
    // глобальная переменная
    interval = setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')

    // Очищаем доску от шариков
    board.innerHTML = ''

    // Создаем счетчик очков
    const counter = document.createElement('h1')
    counter.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
    // Добавляем счетчик очков на достку
    board.append(counter)

    // Создаем ссылку играть снова
    const btnPlayAgain = document.createElement('a')
    btnPlayAgain.innerHTML = '<a href="#" class="start-again">Начать игру заново</a>'
    // Добавляем ссылку играть снова на доску
    board.append(btnPlayAgain)

    playAgain()
}

function playAgain(){
    const startAgainBtn = document.querySelector('.start-again')
    startAgainBtn.addEventListener('click', (event) => {
        /* Отменяем появление # в URL по нажатию на кнопку Начать игру */
        event.preventDefault()
        screens[1].classList.remove('up')
        // получить счет и удалить
        const countH1 = document.querySelector('#board h1')
        countH1.remove()
        // получить ссылку играть снова и удалить
        const startGameAgainLink = screens[2].querySelector('a')
        startGameAgainLink.remove()
        // прячем счетчик
        timeEl.parentNode.classList.remove('hide')
        time = 0
        score = 0
    })
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`
}

function decreaseTime(){
    if (time === 0) {
        clearInterval(interval)
        finishGame()

    } else {
        let currenTime = --time
        if (currenTime < 10) {
            currenTime = `0${currenTime}`
        }
        setTime(currenTime)
    }
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function getRandomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size =  getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    circle.classList.add('circle')
    circle.style.background = getRandomColor()
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
}


function winTheGame(){
    function kill(){
        const circle = document.querySelector('.circle')
    
        if (circle) {
            circle.click()
        }
    }
    setInterval(kill, 1);
}



startBtn.addEventListener('click', (event) => {
    /* Отменяем появление # в URL по нажатию на кнопку Начать игру */
    event.preventDefault()
    screens[0].classList.add('up')

})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

