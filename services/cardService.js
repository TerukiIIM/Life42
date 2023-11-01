const fs = require('fs');

const UtilitiesService = require('../services/utilitiesService');

class CardService {

    static generateDraw(){
        var result = [];
        fs.readFile('./config/cards.json', 'utf8', (err, jsonString) => {
            const cardJson = JSON.parse(jsonString);
            var draw = []
            cardJson.forEach(card => {
                let numToAdd = card.quantity;
                for(var i = 0; i < numToAdd; i++) {                    
                    draw.push(card)
                }
            });
            result = UtilitiesService.shuffle(draw);
        });
        return result;
    }
}

module.exports = CardService;