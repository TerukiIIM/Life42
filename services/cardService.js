const fs = require('fs');

const UtilitiesService = require('../services/utilitiesService');

class CardService {
    static getAllCards(res) {
        fs.readFile('./config/cards.json', 'utf8', (err, jsonString) => {
            res.json(JSON.parse(jsonString));
        })
    }

    static generateDraw(res){
        fs.readFile('./config/cards.json', 'utf8', (err, jsonString) => {
            const cardJson = JSON.parse(jsonString);
            var draw = []
            cardJson.forEach(card => {
                let numToAdd = card.quantity;
                console.log("card2 : " + card);
                console.log("cardQuantity : " + card.quantity);
                for(var i = 0; i < numToAdd; i++) {                    
                    draw.push(card)
                }
            });
            res.json(UtilitiesService.shuffle(draw));
        })
    }
}

module.exports = CardService;