const cardArray = [{
        name: 'img1',
        img: 'images/img1.png'
    },
    {
        name: 'img2',
        img: 'images/img2.png'
    },
    {
        name: 'img3',
        img: 'images/img3.png'
    },
    {
        name: 'img4',
        img: 'images/img4.png'
    },
    {
        name: 'img5',
        img: 'images/img5.png'
    },
    {
        name: 'img6',
        img: 'images/img6.png'
    },
    {
        name: 'img1',
        img: 'images/img1.png'
    },
    {
        name: 'img2',
        img: 'images/img2.png'
    },
    {
        name: 'img3',
        img: 'images/img3.png'
    },
    {
        name: 'img4',
        img: 'images/img4.png'
    },
    {
        name: 'img5',
        img: 'images/img5.png'
    },
    {
        name: 'img6',
        img: 'images/img6.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())
const grid = document.querySelector(".grid")
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create your board

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (optionTwoId == optionOneId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('you have clicked the same image')
    } else if (cardsChosen[0] === cardsChosen[1]) {
        alert('you found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'congratulation! you found them all'
    }
}

//flip your card

function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()
