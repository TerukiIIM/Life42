const fs = require('fs');

class CardService {
    static getAllCards(res) {
        fs.readFile('./config/cards.json', 'utf8', (err, jsonString) => {
            res.json(JSON.parse(jsonString));
        })
    }
}

module.exports = CardService;