const express = require('express')
const app = express()
const port = 4200

const card = require('./card.json');

var usedDeck = [];

const Deck = [
    {
        "suit": "spades",
        "value" : ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
    },
    {
        "suit": "clubs",
        "value" : ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
    },
    {
        "suit": "hearts",
        "value" : ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
    },
    {
        "suit": "diamonds",
        "value" : ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
    }
]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getCard() {
    this.card = card;

    var suitVal = getRndInteger(0,3);
    var cardVal = getRndInteger(0,11);

    this.card["suit"] = Deck[suitVal].suit;
    this.card["value"] = Deck[suitVal].value[cardVal];

    this.card = checkWeight(this.card);

    return this.card;
}

function checkWeight(card){
    if((typeof card["value"]) == 'number') {
        card["weight"] = card["value"];
        return card;
    }
    else if(card["value"] == "J"||"Q"||"K") {
        card["weight"] = 10;
        return card;
    }
}

function addUsed(card){
    if(usedDeck.includes(card) === false){
        this.usedDeck = usedDeck.push(card);
    }
}

function getUsed(){
    for(var i = 0; i < usedDeck.length; i++){
        console.log(usedDeck);
    }
}

function validCard() {
    var card = getCard();

    return card;
}

app.get('/', (req, res) => {
    var card = validCard();
    addUsed(card);
    getUsed();
    res.send(card);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))