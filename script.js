const cardsArray = [{
        name: "img1",
        img: 'images/img1.png'
    },
    {
        name: "img2",
        img: 'images/img2.png'
    },
    {
        name: "img3",
        img: 'images/img3.png'
    },
    {
        name: "img4",
        img: 'images/img4.png'
    },
    {
        name: "img5",
        img: 'images/img5.png'
    },
    {
        name: "img6",
        img: 'images/img6.png'
    },
    {
        name: "img1",
        img: 'images/img1.png'
    },
    {
        name: "img2",
        img: 'images/img2.png'
    },
    {
        name: "img3",
        img: 'images/img3.png'
    },
    {
        name: "img4",
        img: 'images/img4.png'
    },
    {
        name: "img5",
        img: 'images/img5.png'
    },
    {
        name: "img6",
        img: 'images/img6.png'
    }
]

cardsArray.sort(() => 0.5 - Math.random())
const grid = document.querySelector(".grid");
const result = document.querySelector('#result');
var cardChosen = [];
var cardChosenId = [];
var cardsWon = [];

//create board

function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card);
    }
}

function flipCard() {
    const cards = document.querySelectorAll('img')
    var cardId = this.getAttribute('data-id')

    if (cards[cardId].getAttribute('src') != "images/white.png") {
        cardChosen.push(cardsArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src', cardsArray[cardId].img)
    }

    if (cardChosen.length == 2) {
        setTimeout(checkCards, 500);
    }
}

//checkCards

function checkCards() {
    const cards = document.querySelectorAll('img')
    var cardOne = cardChosenId[0];
    var cardTwo = cardChosenId[1];
    if (cardOne == cardTwo) {
        alert("you clicked the same image..")
        cards[cardOne].setAttribute('src', 'images/blank.png')
        cards[cardTwo].setAttribute('src', 'images/blank.png')
    } else if (cardChosen[0] === cardChosen[1]) {

        cards[cardOne].setAttribute('src', 'images/white.png')
        cards[cardTwo].setAttribute('src', 'images/white.png')
        cardsWon.push(cardChosenId)
    } else {
        cards[cardOne].setAttribute('src', 'images/blank.png')
        cards[cardTwo].setAttribute('src', 'images/blank.png')
        alert('wrong cards..')
    }
    result.textContent = "Score :" + cardsWon.length
    if (cardsWon.length == cardsArray.length / 2) {
        result.textContent = "congratulations.. you found them all"
    }
    cardChosen = []
    cardChosenId = []
}

createBoard()
